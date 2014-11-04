package main

import (
	"net/http"
	"encoding/json"
	"net/url"
	"mime/multipart"
	_ "html/template"
	"fmt"
	"io"
	"os"
	_ "strings"
)

func saveFile(part *multipart.Part) {
}

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
	reader *multipart.Reader
	fileName string
	currfile *os.File
}

func (fs *FileSave) Save() *FileInfo {
	info := &FileInfo{
		Type: "unknown",
		Url: "test_url_here",
	}

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
		fs.fileName = part.FileName()
		info.Name = fs.fileName
		if fs.currfile == nil {
			fs.currfile, _ = os.OpenFile("../html/uploadfiles/" + fs.fileName, os.O_RDWR | os.O_CREATE, 0666)
		}
		n, _ = io.Copy(fs.currfile, part)
		info.Size += n
	}

	if fs.currfile != nil {
		fs.currfile.Close()
	}

	return info
}

func NewFileSave(r *multipart.Reader) *FileSave {
	return &FileSave{
		reader: r,
	}
}

func HandleUpload(w http.ResponseWriter, req *http.Request) {
	fmt.Println("here")
	fmt.Println(w)
	fmt.Println(req)

	mr, err := req.MultipartReader()
	if err != nil {
		fmt.Println(err)
		return
	}

	req.Form, err = url.ParseQuery(req.URL.RawQuery)
	saver := NewFileSave(mr)
	info := saver.Save()

	out, _ := json.Marshal(info)
	fmt.Println(string(out))
	w.Write(out)
}
