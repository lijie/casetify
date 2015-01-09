package main

import (
	"fmt"
	"html/template"
	"net/http"
	"io"
)

type GalleryItem struct {
	PreviewURL string
}

type GalleryDataSet struct {
	Items []GalleryItem
}

func HandleGallery(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		Logger.Error("%v", err)
		return
	}
	var cases []ProtoCaseData
	err = CaseDB.FindUserCases(user.Email, &cases)
	if err != nil {
		io.WriteString(w, fmt.Sprintf("get cases err %v", err))
		return
	}
	var ds GalleryDataSet
	ds.Items = make([]GalleryItem, len(cases))
	for i := range cases {
		ds.Items[i].PreviewURL = LocalPath2URL(cases[i].Preview)
	}
	t, err := template.ParseFiles("../htdocs/gallery.html")
	if err != nil {
		Logger.Error("parse err %v", err)
		return
	}
	if err = t.Execute(w, &ds); err != nil {
		return
	}
	return
}
