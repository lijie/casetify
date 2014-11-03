package main

import (
	"net/http"
	"html/template"
	"fmt"
	"strings"
)

type DataSet struct {
	PhoneName string
	ResPath string
}

func handlePhoneName(w http.ResponseWriter, req *http.Request, phone_type string) {
	data := &DataSet{
		PhoneName: phone_type,
		ResPath: "/res/" + phone_type,
	}
	
	t, err := template.ParseFiles("../html/design.html")
	if err != nil {
		fmt.Println(err)
		return
	}
	t.Execute(w, data);
}

func HandleDesign(w http.ResponseWriter, req *http.Request) {
	sub := strings.Split(req.RequestURI, "/")
	fmt.Println(sub)
	fmt.Println(len(sub))

	phone_type := "iphone6"
	if len(sub) >= 3 {
		phone_type = sub[2]
	}
	
	handlePhoneName(w, req, phone_type)
}
