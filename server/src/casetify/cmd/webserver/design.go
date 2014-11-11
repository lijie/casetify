package main

import (
	"net/http"
	"html/template"
	"fmt"
	"strings"
)

type DataSet struct {
	// 手机型号
	PhoneName string
	// 用于展示的手机型号名字
	PhoneDispName string
	// 手机壳宽度
	CaseWidth int
	// 手机壳高度
	CaseHeight int
	InstagramApiUrl string
	FacebookApiUrl string
	// 当前用户是否已经用instagram登录
	HasInstagramToken bool
	// 当前用户是否已经用facebook登陆
	HasFacebookToken bool
}

func fillDataWithUserInfo(data *DataSet, info *UserInfo) {
	// data.Uid = info.Uid
	if info.HasInstagramToken() {
		data.HasInstagramToken = true;
	}
	if info.HasFacebookToken() {
		data.HasFacebookToken = true;
	}

	data.InstagramApiUrl = info.InstagramApi.ApiURL(info.Uid)
	fmt.Printf("instagram api url:\n%s\n", data.InstagramApiUrl)
}

func handlePhoneName(w http.ResponseWriter, req *http.Request, phone_type string) {
	caseconf := GetCaseConf(phone_type)
	if caseconf == nil {
		caseconf = GetCaseConf("iphone6")
	}
	
	data := &DataSet{
		PhoneName: caseconf.Name,
		PhoneDispName: caseconf.DispName,
		CaseWidth: caseconf.CaseWidth,
		CaseHeight:  caseconf.CaseHeight,
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
