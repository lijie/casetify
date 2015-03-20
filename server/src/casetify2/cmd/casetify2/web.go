package main

import (
	"casetify/db"
	"code.google.com/p/log4go"
	"flag"
	"fmt"
	"github.com/gorilla/sessions"
	"io"
	"net/http"
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

type ServerConf struct {
	Domain   string `json:"domain"`
	Database string `json:"database"`
}

var serverconf ServerConf

func init() {
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

var port = flag.Int("port", 80, "default port")
var rootDir = flag.String("rootdir", "", "default root dir")
var testenv = flag.Bool("test", false, "use test env")

func initWebService() {
	if *rootDir == "" {
		// serve static under an alternate URL
		// http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../html"))))
		http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("../htdocs/test/css/"))))
		http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("../htdocs/test/js/"))))
		http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("../htdocs/test/img/"))))
		http.Handle("/template/", http.StripPrefix("/template/", http.FileServer(http.Dir("../htdocs/test/template/"))))
		http.Handle("/tmp/", http.StripPrefix("/tmp/", http.FileServer(http.Dir("../server/tmp/"))))

		// for casetify
		http.HandleFunc("/", HandleMain)
		http.HandleFunc("/main", HandleMain)
		http.HandleFunc("/index", HandleMain)
		http.HandleFunc("/design/", HandleDesign)
		http.HandleFunc("/design", HandleDesignFn)
		http.HandleFunc("/upload", HandleUpload)
	} else {
		// run for SimpleHttpd
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir(*rootDir))))
	}
}

var Logger log4go.Logger

func main() {
	Logger = log4go.NewDefaultLogger(log4go.DEBUG)
	Logger.AddFilter("log", log4go.FINE, log4go.NewFileLogWriter("log/casetify.log", true).SetRotateDaily(true))
	Logger.Info("Server starting...")
	flag.Parse()

	initWebService()

	// run webservice
	err := http.ListenAndServe(fmt.Sprintf(":%d", *port), nil)
	if err != nil {
		fmt.Println(err)
		Logger.Error("fatal", err)
	}
}
