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
)

func HelloServer(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "hello, world!\n")
}

// TODO(lijie):
// cookie encryption key cannot be set in source code
// just for test
var CookieStore = sessions.NewCookieStore([]byte("something-very-secert"))

var CaseDB *db.DB

func init() {
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
	medias, err := info.InstagramApi.RecentMedia(token, 10)
	if err != nil {
		fmt.Printf("ERR: RecentMedia %v\n", err)
		return
	}

	t, err := template.ParseFiles("../html/instagram_photo_list.html")
	if err != nil {
		fmt.Println(err)
		return
	}
	t.Execute(w, medias)
}

func HandleBuy(w http.ResponseWriter, req *http.Request) {
}

func HandlePay(w http.ResponseWriter, req *http.Request) {
}

func HandleLogin(w http.ResponseWriter, req *http.Request) {
}

func HandleOrder(w http.ResponseWriter, req *http.Request) {
}

var port = flag.Int("port", 80, "default port")
var rootDir = flag.String("rootdir", "", "default root dir")

func initWebService() {
	if *rootDir == "" {
		// serve static under an alternate URL
		// http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../html"))))
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../htdocs"))))

		http.HandleFunc("/hello", HelloServer)
		// http.HandleFunc("/upload", HandleUpload)
		http.HandleFunc("/design/", HandleDesign)
		http.HandleFunc("/cookie", HandleTestCookie)
		http.HandleFunc("/cookie2", HandleTestCookie2)
		http.HandleFunc("/get", HandleTestGet)
		http.HandleFunc("/instagram_redirect_uri", HandleInstagramRedirect)
		http.HandleFunc("/facebook_redirect_uri", HandleFacebookRedirect)
		http.HandleFunc("/login", HandleLogin)
		http.HandleFunc("/buy", HandleBuy)
		http.HandleFunc("/pay", HandlePay)
		http.HandleFunc("/order", HandleOrder)
		http.HandleFunc("/upload", HandleUpload2)
		http.HandleFunc("/getuploadlist", HandleGetUploadList)
		http.HandleFunc("/controllers/mapper", HandleMapper)
	} else {
		// run for SimpleHttpd
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir(*rootDir))))
	}
}

func initLogicServer() {
	//var err error
	//CaseDB, err = db.NewDB("127.0.0.1:27017")
	//if err != nil {
	//	log.Fatal("Connect DB failed %v\n", err)
	//}
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
