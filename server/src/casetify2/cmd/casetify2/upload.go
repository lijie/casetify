package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"image"
	_ "image/gif"
	_ "image/jpeg"
	"image/png"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"time"
)

// FileInfo describes a file that has been uploaded.
type FileInfo struct {
	Key          string `json:"-"`
	Url          string `json:"url,omitempty"`
	ThumbnailUrl string `json:"thumbnail_url,omitempty"`
	Name         string `json:"name"`
	Type         string `json:"type"`
	Size         int64  `json:"size"`
	Error        string `json:"error,omitempty"`
	DeleteUrl    string `json:"delete_url,omitempty"`
	DeleteType   string `json:"delete_type,omitempty"`
}

type FileSave struct {
	reader   *multipart.Reader
	fileName string
	currfile *os.File
}

// todo:
// 检查文件格式
// 其它图像格式到png的转换
func (fs *FileSave) Save() *FileInfo {
	name := fmt.Sprintf("%d", time.Now().UnixNano()) + ".png"
	info := &FileInfo{
		Type: "png",
		Url:  "/tmp/" + name,
	}

	var buffer bytes.Buffer
	var n int64

	for {
		part, err := fs.reader.NextPart()
		if err == io.EOF {
			break
		}

		if part.FormName() == "" {
			break
		}
		if part.FileName() == "" {
			break
		}
		// fs.fileName = part.FileName()
		fs.fileName = name
		info.Name = part.FileName()
		// if fs.currfile == nil {
		// 	fs.currfile, _ = os.OpenFile("./tmp/"+fs.fileName, os.O_RDWR|os.O_CREATE, 0666)
		// 	defer fs.currfile.Close()
		// }
		// n, _ = io.Copy(fs.currfile, part)
		n, _ = io.Copy(&buffer, part)
		info.Size += n
	}

	if info.Size > 0 {
		m, class, err := image.Decode(&buffer)
		fmt.Println(class)
		if err != nil {
			Logger.Error(err)
			return nil
		}
		if class != "png" {
			fmt.Printf("convert %s to png\n", class)
			buffer.Reset()
			if err = png.Encode(&buffer, m); err != nil {
				Logger.Error(err)
				return nil
			}
		}
		f, err := os.OpenFile("./tmp/"+fs.fileName, os.O_RDWR|os.O_CREATE, 0666)
		if err != nil {
			Logger.Error(err)
			return nil
		}
		defer f.Close()
		io.Copy(f, &buffer)
	}

	return info
}

func NewFileSave(r *multipart.Reader) *FileSave {
	return &FileSave{
		reader: r,
	}
}

func HandleUpload(w http.ResponseWriter, r *http.Request) {
	mr, err := r.MultipartReader()
	if err != nil {
		fmt.Printf("multipart reader err %v\n", err)
		return
	}
	info := NewFileSave(mr).Save()

	out, _ := json.Marshal(info)
	// fmt.Println(string(out))
	w.Write(out)
}
