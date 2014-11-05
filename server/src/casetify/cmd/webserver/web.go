package main

import "net/http"
import "io"
import "log"
import "fmt"
import "flag"

func HelloServer(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "hello, world!\n")
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
		http.HandleFunc("/instagram_redirect_uri", HandleInstagramRedirect)
	} else {
		// run for SimpleHttpd
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir(*rootDir))))
	}

	err := http.ListenAndServe(fmt.Sprintf(":%d", *port), nil)
	if err != nil {
		log.Fatal("fatal %p", err)
	}
}
