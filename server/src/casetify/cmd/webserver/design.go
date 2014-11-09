package main

import (
	"net/http"
	"html/template"
	"fmt"
	"strings"
)

type DataSet struct {
	PhoneName string
	PhoneDispName string
	ResPath string
	InstagramApiUrl string
	IGName string
	FBName string
	Uid string
	HasIGToken bool
	HasFBToken bool
}

func fillDataWithUserInfo(data *DataSet, info *UserInfo) {
	data.Uid = info.Uid
	if info.HasInstagramToken() {
		data.HasIGToken = true;
	}
	if info.HasFacebookToken() {
		data.HasFBToken = true;
	}

	data.InstagramApiUrl = info.InstagramApi.ApiURL(info.Uid)
	fmt.Printf("instagram api url:\n%s\n", data.InstagramApiUrl)
}

func handlePhoneName(w http.ResponseWriter, req *http.Request, phone_type string) {
	data := &DataSet{
		PhoneName: phone_type,
		PhoneDispName: "iPhone 6",
		ResPath: "/res/" + phone_type,
	}

	info, err := RestoreUserInfoFromCookie(w, req)
	if err == nil {
		fillDataWithUserInfo(data, info);
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
