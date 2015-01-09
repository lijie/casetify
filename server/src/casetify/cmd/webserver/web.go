package main

import (
	"casetify/db"
	"casetify/facebook"
	"flag"
	"github.com/gorilla/sessions"
	"html/template"
	"io"
	"net/http"
	"strings"
	"time"
	"io/ioutil"
	"encoding/json"
	"code.google.com/p/log4go"
	"fmt"
	"os"
	"github.com/gedex/go-instagram/instagram"
	"strconv"
)

func HelloServer(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "hello, world!\n")
}

// TODO(lijie):
// cookie encryption key cannot be set in source code
// just for test
var CookieStore = sessions.NewCookieStore([]byte("something-very-secert"))

var CaseDB *db.DB

type ServerConf struct {
	Domain string `json:"domain"`
	Database string `json:"database"`
}
var serverconf ServerConf

func init() {
	userfnmap = make(map[string]func(http.ResponseWriter, *http.Request, *UserInfo))
	userfnmap["getUserAlbumPhoto"] = fnGetUserAlbumPhoto
	userfnmap["getUserPhoto"] = fnGetUserPhoto
	userfnmap["getUserInfo"] = fnGetUserInfo
	userfnmap["registerNewUser"] = fnRegisterNewUser
	userfnmap["getNextDefaultArtworkName"] = fnGetNextDefaultArtworkName
}

func HandleTestCookie2(w http.ResponseWriter, req *http.Request) {
	session, _ := CookieStore.Get(req, "session-name")
	session.Values["uid"] = "andrewli"
	session.Save(req, w)
	io.WriteString(w, "hello, world!\n")
}

// not work, why ?
func HandleTestCookie(w http.ResponseWriter, req *http.Request) {
	expires := time.Now().AddDate(0, 0, 1)
	cookie := &http.Cookie{
		Name:       "uid",
		Value:      "andrewli",
		Path:       "/",
		Domain:     "127.0.0.1",
		Expires:    expires,
		RawExpires: expires.Format(time.UnixDate),
		MaxAge:     86400,
		Secure:     true,
		HttpOnly:   true,
		Raw:        "uid=andrewli",
		Unparsed:   []string{"uid=andrewli"},
	}
	http.SetCookie(w, cookie)
	io.WriteString(w, "hello, world!\n")
}

func HandleTestGet(w http.ResponseWriter, req *http.Request) {
	// values := req.URL.Query()
}

func HandleFacebookRedirect(w http.ResponseWriter, req *http.Request) {
	Logger.Debug("HandleFacebookRedirect")

	// get uid from request
	state := strings.Split(req.FormValue("state"), "|")
	if len(state) < 2 {
		Logger.Error("no state\n")
		return
	}

	info := FindUser(state[1])
	if info == nil {
		return
	}

	token, err := info.FacebookApi.GetAccessToken(w, req)
	if err != nil {
		Logger.Error("GetAccessToken err:\n", err)
		return
	}

	// save token
	info.FacebookToken = token
	Logger.Debug("Get facebook token %v for user %s\n", token, info.Rid)

	t, err := template.New("auth_success.htm").Delims("{{{", "}}}").ParseFiles("../htdocs/auth_success.htm")
	if err != nil {
		Logger.Error(err)
		return
	}
	t.Execute(w, nil)
}

// HandleInstagramRedirect 处理instagram的授权应答
// 失败, 输出失败页面
// 成功, 主动拉取用户最新的N张照片并展示供用户选择
func HandleInstagramRedirect(w http.ResponseWriter, req *http.Request) {
	Logger.Debug("HandleInstagramRedirect")
	// get uid from request
	state := strings.Split(req.FormValue("state"), "|")
	if len(state) < 2 {
		Logger.Error("no state")
		return
	}

	info := FindUser(state[1])
	if info == nil {
		return
	}

	token, err := info.InstagramApi.GetAccessToken(w, req)
	if err != nil {
		Logger.Error("GetAccessToken err:%v\n", err)
		return
	}

	// save token
	info.InstagramToken = token
	Logger.Debug("Get instagram token %v for user %s\n", token, info.Rid)

	// TODO(lijie): output html template
//	medias, err := info.InstagramApi.RecentMedia(token, 10)
//	if err != nil {
//		fmt.Printf("ERR: RecentMedia %v\n", err)
//		return
//	}

	t, err := template.New("auth_success.htm").Delims("{{{", "}}}").ParseFiles("../htdocs/auth_success.htm")
	if err != nil {
		Logger.Error(err)
		return
	}
	t.Execute(w, nil)
}

func HandleBuy(w http.ResponseWriter, req *http.Request) {
}

func HandlePay(w http.ResponseWriter, req *http.Request) {
}

func HandleLogin(w http.ResponseWriter, req *http.Request) {
}

func HandleOrder(w http.ResponseWriter, req *http.Request) {
}

// TODO:
// need invalid artwork name
func fnGetNextDefaultArtworkName(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	io.WriteString(w, "Design #1")
}

func media2ProtoPhoto(medias []instagram.Media) []ProtoPhoto {
	p := make([]ProtoPhoto, len(medias))
	for i := range medias {
		p[i].ID = medias[i].ID
		p[i].Images = make(map[string]string)
		p[i].Images["low_resolution"] = medias[i].Images.LowResolution.URL
		p[i].Images["thumbnail"] = medias[i].Images.Thumbnail.URL
		p[i].Images["raw_uri"] = medias[i].Images.StandardResolution.URL
		p[i].Images["standard_resolution"] = medias[i].Images.StandardResolution.URL
		p[i].Images["squared_thumbnail"] = medias[i].Images.Thumbnail.URL
	}
	return p
}

func fb2ProtoPhoto(medias []facebook.PhotosData) []ProtoPhoto {
	p := make([]ProtoPhoto, len(medias))
	for i := range medias {
		p[i].ID = medias[i].ID
		p[i].Images = make(map[string]string)
		p[i].Images["low_resolution"] = medias[i].Images[1].Source
		p[i].Images["thumbnail"] = medias[i].Picture
		p[i].Images["raw_uri"] = medias[i].Source
		p[i].Images["standard_resolution"] = medias[i].Images[0].Source
		p[i].Images["squared_thumbnail"] = medias[i].Picture
	}
	return p
}

func fnGetUserPhoto(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	sign := req.FormValue("signInWith")
	if len(sign) == 0 {
		return
	}
	start := req.FormValue("pageStart")
	if len(start) == 0 {
		Logger.Error("getUserPhoto no start param\n")
		return
	}
	albumid := req.FormValue("photoAlbumId")
	idx, _ := strconv.Atoi(sign)
	page, _ := strconv.Atoi(start)
	idx--
	page--
	var p []ProtoPhoto
	// 获取当前页的起始ID
	// 为空则从第一页开始
	nextid := user.PhotoPos[idx].NextID
	// ID为空且不是第一页
	// 说明已经翻倒最后一页了
	if nextid == "" && user.PhotoPos[idx].Page != 0 {
		return
	}
	
	if idx == 1 {
		if len(albumid) == 0 {
			Logger.Error("get facebook photo but no albumid")
			return
		}
		// get facebook photo
		Logger.Debug("Get photo from facebook, album %s", albumid)
		api := user.FacebookApi
		media, err := api.GetAlbumPhotos(albumid, nextid, 10)
		if err != nil {
			Logger.Error("facebook GetAblumPhotos err %v\n", err)
			return
		}
		// Logger.Debug("facebook photo\n%v", media)
		user.PhotoPos[idx].NextID = media.Paging.Cursors.After
		user.PhotoPos[idx].Page++
		p = fb2ProtoPhoto(media.Data)
	} else if idx == 0 {
		// instagram的翻页并不支持跳转
		// 必须从第一页开始逐页往后翻
		// 所以这里的翻页也是假定前端是逐页发请求过来
		Logger.Debug("Get photo from instagram\n")
		// get instagram photo
		api := user.InstagramApi
		Logger.Debug("get photo from nextid %s", nextid)
		medias, pos, err := api.RecentMedia(10, nextid)
		if err != nil {
			Logger.Error("instagram get photo err %v\n", err)
			return
		}
		// 保存下一页的起始ID
		user.PhotoPos[idx].NextID = pos.NextMaxID
		user.PhotoPos[idx].Page++
		p = media2ProtoPhoto(medias)
	}
	b, err := json.Marshal(p)
	if err == nil {
		w.Write(b)
	}
}

// 获取用户相册
// 仅facebook
func fnGetUserAlbumPhoto(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	if !user.HasFacebookToken() {
		Logger.Error("no facebook token\n")
		return
	}
	sign := req.FormValue("signInWith")
	if len(sign) == 0 || sign != "2" {
		return
	}
	album, err := user.FacebookApi.GetAlbums()
	if err != nil {
		Logger.Error("GetAlbums err:\n%v\n", err)
		return
	}
	if album == nil || len(album) == 0 {
		// no albums
		io.WriteString(w, "1114")
		return
	}
	pa := make([]ProtoAlbum, len(album))
	for i := range album {
		p, _ := user.FacebookApi.GetAlbumCoverURL(album[i].ID)
		if len(p) == 0 {
			continue
		}
		pa[i].ID = album[i].ID
		pa[i].Name = album[i].Name
		pa[i].CoverPhoto.ID = album[i].CoverPhoto
		pa[i].CoverPhoto.Images = make(map[string]string)
		pa[i].CoverPhoto.Images["low_resolution"] = p
		pa[i].CoverPhoto.Images["thumbnail"] = p
		pa[i].CoverPhoto.Images["raw_uri"] = p
		pa[i].CoverPhoto.Images["standard_resolution"] = p
		pa[i].CoverPhoto.Images["squared_thumbanil"] = p
	}
	// log.Printf("proto images:\n%v\n", pa)
	b, err := json.Marshal(pa)
	if err == nil {
		w.Write(b)
	}
	return
}

func fnGetUserInfo(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	// if not login
	if len(user.Email) == 0 {
		io.WriteString(w, "1101")
		return
	}
	b, err := ioutil.ReadFile("conf/user.json")
	if err != nil {
		Logger.Error("read user.json err:\n", err)
		return
	}
	w.Write(b)
	return
}

func fnRegisterNewUser(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	email := req.FormValue("register-email")
	if len(email) == 0 {
		return
	}
	if err := CaseDB.RegisterUser(email); err != nil && err != db.ErrUserAlreadyRegisted {
		Logger.Error("register user: %s err %v", email, err)
		return
	}

	user.Email = email
	// save to cookie
	session, _ := CookieStore.Get(req, "session-name")
	session.Values["email"] = email
	session.Save(req, w)
	io.WriteString(w, "1120")
}

var userfnmap map[string]func(http.ResponseWriter, *http.Request, *UserInfo)

func HandleUser(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req);
	if err != nil {
		return
	}
	fn := req.FormValue("fn")
	if len(fn) == 0 {
		return
	}
	if f, ok := userfnmap[fn]; ok {
		f(w, req, user)
	}
	return
}

func HandleAuth(w http.ResponseWriter, req *http.Request) {
	ui, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		Logger.Error("read user info err:\n", err)
		return
	}

	fn := req.FormValue("fn")
	if fn == "instagram" {
		url := ui.InstagramApi.AuthCodeURL("getcode|" + ui.Rid)
		http.Redirect(w, req, url, http.StatusFound)
	} else if fn == "facebook" {
		url := ui.FacebookApi.AuthCodeURL("getcode|" + ui.Rid)
		http.Redirect(w, req, url, http.StatusFound)
	}
}

func HandleAuthentication(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		Logger.Error("read user info err:\n", err)
		return
	}
	fn := req.FormValue("fn")
	sign := req.FormValue("signInWith")
	if fn == "checkValidAccessToken" {
		if sign == "2" && user.HasFacebookToken() {
			io.WriteString(w, "1001")
			return
		}
		if sign == "1" && user.HasInstagramToken() {
			io.WriteString(w, "1001")
			return
		}
		io.WriteString(w, "1000")
	}
}

var port = flag.Int("port", 80, "default port")
var rootDir = flag.String("rootdir", "", "default root dir")
var testenv = flag.Bool("test", false, "use test env")

func initWebService() {
	if *rootDir == "" {
		// serve static under an alternate URL
		// http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../html"))))
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../htdocs"))))

		// test
		http.HandleFunc("/hello", HelloServer)
		http.HandleFunc("/cookie", HandleTestCookie)
		http.HandleFunc("/cookie2", HandleTestCookie2)
		http.HandleFunc("/get", HandleTestGet)
		http.HandleFunc("/login", HandleLogin)
		http.HandleFunc("/buy", HandleBuy)
		http.HandleFunc("/pay", HandlePay)
		http.HandleFunc("/order", HandleOrder)

		// for casetify
		http.HandleFunc("/design/", HandleDesign)
		http.HandleFunc("/facebook_redirect_uri", HandleFacebookRedirect)
		http.HandleFunc("/instagram_redirect_uri", HandleInstagramRedirect)
		http.HandleFunc("/upload", HandleUpload2)
		http.HandleFunc("/getuploadlist", HandleGetUploadList)
		http.HandleFunc("/controllers/mapper", HandleMapper)
		http.HandleFunc("/user", HandleUser)
		http.HandleFunc("/save_image", HandleSaveImage)
		http.HandleFunc("/save_data", HandleSaveData)
		http.HandleFunc("/auth", HandleAuth)
		http.HandleFunc("/authentication", HandleAuthentication)
		http.HandleFunc("/checkout", HandleCheckout)
		http.HandleFunc("/paypal/ap_return", HandleAPSuccess)
		http.HandleFunc("/paypal/ap_cancel", HandleAPCancell)
		http.HandleFunc("/gallery", HandleGallery)
	} else {
		// run for SimpleHttpd
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir(*rootDir))))
	}
}

var DeviceArray []ProtoDeviceOption
var BaseCaseArray []ProtoCaseOption
var DeviceMap map[string]*ProtoDeviceOption
var BaseCaseMap map[string]*ProtoCaseOption

func initLogicServer() {
	file := "conf/server.json"
	if *testenv {
		file = "conf/server_test.json"
	}
	b, err := ioutil.ReadFile(file)
	if err != nil {
		Logger.Error("read server.json err:\n", err)
		return
	}
	if err := json.Unmarshal(b, &serverconf); err != nil {
		Logger.Error("unmarshal server json err:\n", err)
		return
	}
	
	CaseDB, err = db.NewDB(serverconf.Database)
	if err != nil {
		Logger.Error("Connect DB failed\n", err)
		os.Exit(255)
	}
	Logger.Info("Connect database %s ok", serverconf.Database)

	// 读取支持的手机和手机壳信息
	err = UnmarshalJsonFile("conf/devices.json", &DeviceArray)
	if err != nil {
		Logger.Error("load devices.json failed %v", err)
	}
	fmt.Println(DeviceArray)
	DeviceMap = make(map[string]*ProtoDeviceOption)
	for i := range DeviceArray {
		DeviceMap[DeviceArray[i].DeviceID] = &DeviceArray[i]
	}

	err = UnmarshalJsonFile("conf/cases.json", &BaseCaseArray)
	if err != nil {
		Logger.Error("load cases.json failed %v", err)
	}
	fmt.Println(BaseCaseArray)
	BaseCaseMap = make(map[string]*ProtoCaseOption)
	for i := range BaseCaseArray {
		BaseCaseMap[BaseCaseArray[i].TypeID] = &BaseCaseArray[i]
	}
}

var Logger log4go.Logger

func main() {
	Logger = log4go.NewDefaultLogger(log4go.DEBUG)
	Logger.AddFilter("log", log4go.FINE, log4go.NewFileLogWriter("log/casetify.log", true).SetRotateDaily(true))
	Logger.Info("Server starting...")
	flag.Parse()

	ReadCaseConfig("conf/caseconf.json")

	initLogicServer()
	initWebService()

	// run webservice
	err := http.ListenAndServe(fmt.Sprintf(":%d", *port), nil)
	if err != nil {
		Logger.Error("fatal", err)
	}
}
