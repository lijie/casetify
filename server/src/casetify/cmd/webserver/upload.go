package main

import (
	"code.google.com/p/log4go"
	_ "crypto/md5"
	"crypto/sha1"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	_ "html/template"
	"io"
	"mime/multipart"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"time"
	"strings"
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
			fs.currfile, _ = os.OpenFile("../tmp/"+fs.fileName, os.O_RDWR|os.O_CREATE, 0666)
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
	mr, err := req.MultipartReader()
	if err != nil {
		Logger.Error(err)
		return
	}

	req.Form, err = url.ParseQuery(req.URL.RawQuery)
	saver := NewFileSave(mr)
	info := saver.Save()

	out, _ := json.Marshal(info)
	// fmt.Println(string(out))
	w.Write(out)
}

func responseUploadErr() {

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
		Logger.Error("restore userinfo err:\n", err)
		return
	}
	for i := 0; i < len(user.UploadList); i++ {
		if user.UploadList[i].Id == id {
			user.UploadList = append(user.UploadList[:i], user.UploadList[i+1:]...)
			break
		}
	}
	io.WriteString(w, "1214")
}

func HandleUpload2(w http.ResponseWriter, req *http.Request) {
	fn := req.FormValue("fn")
	if fn == "deleteFile" {
		HandleDeleteUploadFile(w, req)
		return
	}

	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		Logger.Error("restore userinfo err:\n", err)
		return
	}

	f, header, err := req.FormFile("fileUploader")
	if err != nil {
		Logger.Error(err)
		return
	}
	defer f.Close()

	outname := generateFileName(header.Filename)
	// fmt.Printf("src name %s out name %s\n", header.Filename, outname)

	outf, err := os.OpenFile("../htdocs/data/upload/"+outname+".png", os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		Logger.Error("open out file err:\n", err)
		return
	}
	defer outf.Close()

	n, err := io.Copy(outf, f)
	if err != nil {
		Logger.Error("write out file err:\n", err)
		return
	}

	info := &ProtoFileUploadInfo{
		Id:       outname,
		Uri:      "/data/upload/" + outname + ".png",
		FileSize: n,
	}

	// save upload info
	user.UploadList = append(user.UploadList, info)
	io.WriteString(w, "1201")
}

func HandleGetUploadList(w http.ResponseWriter, req *http.Request) {
	fn := req.FormValue("fn")
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		Logger.Error("restore userinfo err:\n", err)
		return
	}

	if fn == "getUploadFile" {
		start, _ := strconv.Atoi(req.FormValue("startPage"))
		start = start - 1
		pagesize, _ := strconv.Atoi(req.FormValue("pageSize"))
		// no more data
		if len(user.UploadList) <= start*pagesize {
			io.WriteString(w, "1222")
			return
		}
		offset := len(user.UploadList) % pagesize
		b, _ := json.Marshal(user.UploadList[start*pagesize : offset])
		w.Write(b)
	}
}

func HandleMapper(w http.ResponseWriter, req *http.Request) {
	img := req.FormValue("img")
	if len(img) == 0 {
		return
	}
	if strings.HasPrefix(img, "http") {
		http.Redirect(w, req, img, http.StatusFound)
		return
	}
	f, err := os.Open("../htdocs/" + img)
	if err != nil {
		Logger.Logf(log4go.ERROR, "open %s error %v\n", img, err)
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
	return "http://" + serverconf.Domain + path[len(prefix):]
}

func caseInfoFromCaseData(data *ProtoCaseData) *ProtoCaseInfo {
	c := &ProtoCaseInfo{
		CaseID:     data.ID,
		UserID:     data.UID,
		CreateTime: data.CreateTime,
		// TODO
		ItemOption: data.ItemType,
		UnitPrice:  "39.5",
		// TODO
		ItemName:   data.ItemType,
		PreviewURL: make(map[string]string),
	}
	c.PreviewURL["S"] = LocalPath2URL(data.Preview)
	c.PreviewURL["M"] = LocalPath2URL(data.Preview)
	c.PreviewURL["L"] = LocalPath2URL(data.Preview)
	return c
}

func HandleSaveImage(w http.ResponseWriter, req *http.Request) {
	defer req.Body.Close()

	israw := req.FormValue("is_raw")
	id := req.FormValue("id")
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		Logger.Error("read user info err:\n", err)
		return
	}
	if user.CurrentCase == nil {
		Logger.Error("no case data but try to save case image!\n")
		return
	}
	if id != user.CurrentCase.ID {
		Logger.Logf(log4go.ERROR, "invalid case id, expect %s but %s\n", user.CurrentCase.ID, id)
		return
	}

	header := []byte("data:image/png;base64,")
	b := make([]byte, len(header))
	// ignore header
	req.Body.Read(b)

	// save image to disk
	decoder := base64.NewDecoder(base64.StdEncoding, req.Body)
	if decoder == nil {
		Logger.Error("base64 decoder err\n")
		return
	}
	israw_str := ""
	if israw == "Y" {
		israw_str = "_raw"
	}
	path := "../htdocs/data/preview/" + id + israw_str + ".png"
	f, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		Logger.Logf(log4go.ERROR, "save file %s err %v\n", id, err)
		return
	}
	defer f.Close()
	io.Copy(f, decoder)

	cc := user.CurrentCase
	if israw != "Y" {
		cc.Preview = path
		return
	}

	cc.PreviewRaw = path
	// Save user.CurrentCase to db
	Logger.Debug("Save case data to db:\n%v\n", *cc)
	if err = CaseDB.SetCase2(cc.ID, cc); err != nil {
		Logger.Error("Case save to db err:\n", err)
		return
	}
	// Save CurrentCase to Cart
	user.Cart = append(user.Cart, user.CurrentCase)
	// clear CurrentCase
	user.CurrentCase = nil

	ci := caseInfoFromCaseData(cc)
	out, err := json.Marshal(ci)
	if err != nil {
		Logger.Error("marshal caseinfo err:\n", err)
		return
	}
	w.Write(out)
}

// HandleSaveData
// Save user custom case info
func HandleSaveData(w http.ResponseWriter, req *http.Request) {
	// fmt.Println(req)
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		Logger.Error("read user info err:\n", err)
		return
	}

	// TODO: need email!!
	if user.Email == "" {
		return
	}

	savestr := req.FormValue("saveString")
	if len(savestr) == 0 {
		Logger.Error("no saveString?\n")
		return
	}

	a, _ := url.QueryUnescape(savestr)
	p := &ProtoCaseData{
		CreateTime: time.Now(),
		ID:         bson.NewObjectId().Hex(),
		UID:        user.Email,
	}
	if err = json.Unmarshal([]byte(a), p); err != nil {
		Logger.Error("Umarshal case data err:\n", err)
		return
	}

	Logger.Debug("client send CaseData: %v", *p)
	user.CurrentCase = p

	// resp case id
	io.WriteString(w, user.CurrentCase.ID)
}
