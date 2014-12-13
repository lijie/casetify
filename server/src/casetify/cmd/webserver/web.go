package main

import (
	"casetify/db"
	"flag"
	"fmt"
	"github.com/gorilla/sessions"
	"html/template"
	"io"
	"log"
	"net/http"
	"strings"
	"time"
	"io/ioutil"
	"encoding/json"
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
	userfnmap["getUserInfo"] = fnGetUserInfo
	userfnmap["registerNewUser"] = fnRegisterNewUser
	userfnmap["getNextDefaultArtworkName"] = fnGetNextDefaultArtworkName
}

func HandleTestCookie2(w http.ResponseWriter, req *http.Request) {
	session, _ := CookieStore.Get(req, "session-name")
	fmt.Println(session)

	session.Values["uid"] = "andrewli"
	session.Save(req, w)
	io.WriteString(w, "hello, world!\n")
}

// not work, why ?
func HandleTestCookie(w http.ResponseWriter, req *http.Request) {
	fmt.Printf("print cookie:\n")
	fmt.Println(req.Cookies())

	fmt.Printf("set cookie:\n")
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
	values := req.URL.Query()
	fmt.Println(values["param"])
}

func HandleFacebookRedirect(w http.ResponseWriter, req *http.Request) {
	fmt.Printf("HandleFacebookRedirect %v\n", req)

	// get uid from request
	state := strings.Split(req.FormValue("state"), "|")
	if len(state) < 2 {
		fmt.Printf("no state\n")
		return
	}

	info := FindUser(state[1])
	if info == nil {
		return
	}

	token, err := info.FacebookApi.GetAccessToken(w, req)
	if err != nil {
		fmt.Printf("GetAccessToken err %v\n", err)
		return
	}

	// save token
	info.FacebookToken = token
	fmt.Printf("Get facebook token %v for user %s\n", token, info.Rid)

	t, err := template.New("auth_success.htm").Delims("{{{", "}}}").ParseFiles("../htdocs/auth_success.htm")
	if err != nil {
		fmt.Println(err)
		return
	}
	t.Execute(w, nil)
}

// HandleInstagramRedirect 处理instagram的授权应答
// 失败, 输出失败页面
// 成功, 主动拉取用户最新的N张照片并展示供用户选择
func HandleInstagramRedirect(w http.ResponseWriter, req *http.Request) {
	fmt.Printf("HandleInstagramRedirect %v\n", req)
	// get uid from request
	state := strings.Split(req.FormValue("state"), "|")
	if len(state) < 2 {
		fmt.Printf("no state\n")
		return
	}

	info := FindUser(state[1])
	if info == nil {
		return
	}

	token, err := info.InstagramApi.GetAccessToken(w, req)
	if err != nil {
		fmt.Printf("GetAccessToken err %v\n", err)
		return
	}

	// save token
	info.InstagramToken = token
	fmt.Printf("Get instagram token %v for user %s\n", token, info.Rid)

	// TODO(lijie): output html template
//	medias, err := info.InstagramApi.RecentMedia(token, 10)
//	if err != nil {
//		fmt.Printf("ERR: RecentMedia %v\n", err)
//		return
//	}

	t, err := template.New("auth_success.htm").Delims("{{{", "}}}").ParseFiles("../htdocs/auth_success.htm")
	if err != nil {
		fmt.Println(err)
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

func fnGetNextDefaultArtworkName(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	io.WriteString(w, "Design #1")
}

func fnGetUserAlbumPhoto(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	if !user.HasFacebookToken() {
		log.Printf("no facebook token\n")
		return
	}
	album, err := user.FacebookApi.GetAlbums()
	if err != nil {
		log.Printf("GetAlbums err %v\n", err)
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
	log.Printf("proto images:\n%v\n", pa)
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
		fmt.Println("read user.json err %v\n", err)
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
		fmt.Printf("register user %s err %v\n", email, err)
		return
	}
	user.Email = email
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
		fmt.Printf("read user info err %v\n", err)
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
		fmt.Printf("read user info err %v\n", err)
		return
	}
	fn := req.FormValue("fn")
	if fn == "checkValidAccessToken" {
		if user.HasFacebookToken() {
			io.WriteString(w, "1001")
		} else {
			io.WriteString(w, "1000")
		}
	}
}

var port = flag.Int("port", 80, "default port")
var rootDir = flag.String("rootdir", "", "default root dir")

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
		http.HandleFunc("/save_image", HandlePreview)
		http.HandleFunc("/save_data", HandlePreviewData)
		http.HandleFunc("/auth", HandleAuth)
		http.HandleFunc("/authentication", HandleAuthentication)
	} else {
		// run for SimpleHttpd
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir(*rootDir))))
	}
}

func initLogicServer() {
	b, err := ioutil.ReadFile("conf/server.json")
	if err != nil {
		fmt.Printf("read server.json err %v\n", err)
		return
	}
	if err := json.Unmarshal(b, &serverconf); err != nil {
		fmt.Printf("unmarshal server json err %v\n", err)
		return
	}
	
	CaseDB, err = db.NewDB(serverconf.Database)
	if err != nil {
		log.Fatal("Connect DB failed %v\n", err)
	}
	fmt.Printf("Connect database %s ok\n", serverconf.Database)
}

func main() {
	flag.Parse()

	ReadCaseConfig("conf/caseconf.json")

	initLogicServer()
	initWebService()

	// run webservice
	err := http.ListenAndServe(fmt.Sprintf(":%d", *port), nil)
	if err != nil {
		log.Fatal("fatal %p", err)
	}
}
