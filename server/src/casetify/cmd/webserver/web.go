package main

import "net/http"
import "io"
import "log"
import "fmt"
import "flag"
import "time"
import "github.com/gorilla/sessions"

func HelloServer(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "hello, world!\n")
}

// TODO(lijie):
// cookie encryption key cannot be set in source code
// just for test
var CookieStore = sessions.NewCookieStore([]byte("something-very-secert"))

func HandleTestCookie2(w http.ResponseWriter, req *http.Request) {
	session, _ := CookieStore.Get(req, "session-name")
	fmt.Println(session)

	session.Values["uid"] = "andrewli"
	session.Save(req, w);
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

var port = flag.Int("port", 80, "default port")
var rootDir = flag.String("rootdir", "", "default root dir")

func main() {
	flag.Parse()

	if *rootDir == "" {
		// serve static under an alternate URL
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../html"))))

		http.HandleFunc("/hello", HelloServer)
		http.HandleFunc("/upload", HandleUpload)
		http.HandleFunc("/design/", HandleDesign)
		http.HandleFunc("/cookie", HandleTestCookie)
		http.HandleFunc("/cookie2", HandleTestCookie2)
		http.HandleFunc("/get", HandleTestGet)
		http.HandleFunc("/instagram_redirect_uri", HandleInstagramRedirect2)
	} else {
		// run for SimpleHttpd
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir(*rootDir))))
	}

	err := http.ListenAndServe(fmt.Sprintf(":%d", *port), nil)
	if err != nil {
		log.Fatal("fatal %p", err)
	}
}
