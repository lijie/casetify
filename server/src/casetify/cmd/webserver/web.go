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

	// run for jayhome
	if *rootDir == "" {
		// serve static under an alternate URL
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../html"))))
		// http.HandleFunc("/b", BlogServer)
		// http.HandleFunc("/b/", BlogServer)
		// http.HandleFunc("/r/", ReaderServer)
		http.HandleFunc("/hello", HelloServer)
		http.HandleFunc("/design/", HandleDesign)
	} else {
		// run for SimpleHttpd
		http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir(*rootDir))))
	}

	err := http.ListenAndServe(fmt.Sprintf(":%d", *port), nil)
	if err != nil {
		log.Fatal("fatal %p", err)
	}
}
