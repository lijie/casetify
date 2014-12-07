package main

import (
	_ "crypto/md5"
	"crypto/sha1"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	_ "html/template"
	"io"
	"mime/multipart"
	"net/http"
	"net/url"
	"os"
	"time"
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
	reader   *multipart.Reader
	fileName string
	currfile *os.File
}

func (fs *FileSave) Save() *FileInfo {
	info := &FileInfo{
		Type: "unknown",
		Url:  "test_url_here",
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
			fs.currfile, _ = os.OpenFile("../html/uploadfiles/"+fs.fileName, os.O_RDWR|os.O_CREATE, 0666)
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

func responseUploadErr() {

}

type FileUploadInfo struct {
	Id       string `json:"id"`
	Uri      string `json:"uri"`
	FileSize int64  `json:"file_size", string`
}

func generateFileName(name string) string {
	h := sha1.New()
	io.WriteString(h, name)
	io.WriteString(h, time.Now().Format("Mon Jan 2 15:04:05 -0700 MST 2006"))
	return hex.EncodeToString(h.Sum(nil))
}

// "FILE_UPLOAD_SUCCESS": 1201,
// "FILE_UPLOAD_FAIL": 1202,
// "FILE_UPLOAD_FAIL_UPLOAD_ERROR": 1203,
// "FILE_UPLOAD_FAIL_UNABLE_TO_WRITE_TEMP_FILE": 1204,
// "FILE_UPLOAD_FAIL_FILE_SIZE_EXCEED_LIMIT": 1205,
// "FILE_UPLOAD_FAIL_FILE_TRANSFER_INCOMPLETE": 1206,
// "FILE_UPLOAD_FAIL_FILE_TYPE_NOT_ALLOWED": 1207,
// "FILE_UPLOAD_FAIL_UNABLE_TO_GENERATE_FILENAME": 1208,
// "FILE_UPLOAD_FAIL_UNABLE_TO_MOVE_UPLOADED_FILE": 1209,
// "FILE_UPLOAD_FAIL_INVALID_IMAGE_SIZE": 1210,
// "FILE_UPLOAD_FAIL_UNABLE_TO_RESIZE_IMAGE": 1211,
// "FILE_UPLOAD_FAIL_UNABLE_TO_UPLOAD_TO_S3": 1212,
// "FILE_UPLOAD_FAIL_UNABLE_TO_UPDATE_INDEX": 1213,
// "FILE_UPLOAD_DELETION_SUCCESS": 1214,
// "FILE_UPLOAD_DELETION_FAIL": 1215,
// "FILE_UPLOAD_DELETION_CANNOT_PARSE_URI": 1216,
// "FILE_UPLOAD_FAIL_UNSUPPORTED_UPLOAD_TYPE": 1217,
// "FILE_UPLOAD_FAIL_UPLOAD_QUOTA_EXCEEDED": 1218,
// "FILE_UPLOAD_FAIL_NO_USER_SESSION_FOUND": 1219,
// "FILE_UPLOAD_GET_FILE_FAIL": 1220,
// "FILE_UPLOAD_FAIL_NOT_INITIATED_FROM_CASETAGRAM": 1221,
// "FILE_UPLOAD_NO_MEDIA_DATA_TO_RETURN": 1222,
// "FILE_UPLOAD_TYPE_USER_IMAGE": "I",
// "FILE_UPLOAD_TYPE_USER_PROFILE_PICTURE": "P",
// "FILE_UPLOAD_TYPE_USER_ARTWORK": "A",
// "FILE_UPLOAD_USER_PHOTO_LIMIT": 10485760,
// "FILE_UPLOAD_USER_PHOTO_LIMIT_TEXT": "10MB",
// "FILE_UPLOAD_USER_PHOTO_BATCH_SIZE_LIMIT": 20,

func HandleDeleteUploadFile(w http.ResponseWriter, req *http.Request) {
	id := req.FormValue("uploadedFileId")
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		fmt.Printf("restore userinfo err %v\n", err)
		return
	}
	for i := 0; i < len(user.UploadList); i++ {
		if user.UploadList[i].Id == id {
			user.UploadList = append(user.UploadList[:i], user.UploadList[i+1:]...)
			return
		}
	}
}

func HandleUpload2(w http.ResponseWriter, req *http.Request) {
	fn := req.FormValue("fn")
	if fn == "deleteFile" {
		HandleDeleteUploadFile(w, req)
		return
	}

	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		fmt.Printf("restore userinfo err %v\n", err)
		return
	}

	f, header, err := req.FormFile("fileUploader")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer f.Close()

	outname := generateFileName(header.Filename)
	fmt.Printf("src name %s out name %s\n", header.Filename, outname)

	outf, err := os.OpenFile("../htdocs/data/upload/"+outname+".png", os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		fmt.Printf("open out file err %v\n", err)
		return
	}
	defer outf.Close()

	n, err := io.Copy(outf, f)
	if err != nil {
		fmt.Printf("write out file err %v\n", err)
		return
	}

	info := &FileUploadInfo{
		Id:       outname,
		Uri:      "/data/upload/" + outname + ".png",
		FileSize: n,
	}

	// save upload info
	user.UploadList = append(user.UploadList, info)
	io.WriteString(w, "1201")
}

func HandleGetUploadList(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		fmt.Printf("restore userinfo err %v\n", err)
		return
	}

	b, _ := json.Marshal(user.UploadList)
	w.Write(b)
}

func HandleMapper(w http.ResponseWriter, req *http.Request) {
	img := req.FormValue("img")
	if len(img) == 0 {
		return
	}
	f, err := os.Open("../htdocs/" + img)
	if err != nil {
		fmt.Printf("open %s error %v\n", img, err)
		return
	}
	defer f.Close()
	w.Header().Set("Content-Type", "image/png")
	io.Copy(w, f)
	return
}

func newImgName(email string) string {
	sha := sha1.New()
	io.WriteString(sha, email)
	io.WriteString(sha, time.Now().Format("Mon Jan 2 15:04:05 -0700 MST 2006"))
	return hex.EncodeToString(sha.Sum(nil))
}

func LocalPath2URL(path string) string {
	prefix := "../htdocs"
	return "http://127.0.0.1:8082" + path[len(prefix):]
}

func HandlePreview(w http.ResponseWriter, req *http.Request) {
	fmt.Println(req)
	defer req.Body.Close()

	israw := req.FormValue("is_raw")
	id := req.FormValue("id")
	//	user, err := RestoreUserInfoFromCookie(w, req)
	//	if err != nil {
	//		fmt.Printf("read user info err %v\n", err)
	//		return
	//	}

	header := []byte("data:image/png;base64,")
	b := make([]byte, len(header))
	// ignore header
	req.Body.Read(b)

	decoder := base64.NewDecoder(base64.StdEncoding, req.Body)
	if decoder == nil {
		fmt.Printf("base64 decoder err\n")
		return
	}
	israw_str := ""
	if israw == "Y" {
		israw_str = "_raw"
	}
	path := "../htdocs/data/preview/" + id + israw_str + ".png"
	f, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		fmt.Printf("save file %s err %v\n", id, err)
		return
	}
	defer f.Close()
	io.Copy(f, decoder)

	ci := FindCaseInfo(id)
	if ci == nil {
		return
	}

	if israw == "Y" {
		ci.localPreviewRawPath = path
		ci.PreviewURL["S"] = LocalPath2URL(ci.localPreviewPath)
		ci.PreviewURL["M"] = LocalPath2URL(ci.localPreviewPath)
		ci.PreviewURL["L"] = LocalPath2URL(ci.localPreviewPath)
		out, err := json.Marshal(ci)
		if err != nil {
			fmt.Printf("marshal caseinfo err %v\n", err)
			return
		}
		w.Write(out)
	} else {
		ci.localPreviewPath = path
	}
}

func HandlePreviewData(w http.ResponseWriter, req *http.Request) {
	fmt.Println(req)
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		fmt.Printf("read user info err %v\n", err)
		return
	}

	// TODO: need email!!
	if user.Email == "" {
		user.Email = "test@test.com"
		fmt.Printf("user email err\n")
		//		return
	}

	c := NewCaseInfo(user.Email, "261")
	io.WriteString(w, c.CaseID)
}
