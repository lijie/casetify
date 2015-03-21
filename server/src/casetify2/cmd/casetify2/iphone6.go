package main

import (
	"fmt"
	"net/http"
	"strings"
	"text/template"
)

var ip6SubTemplates = []SubTemplate{
	SubTemplate{
		Name: "header.html",
	},
	SubTemplate{
		Name: "nav.html",
	},
	SubTemplate{
		Name: "footer.html",
	},
}

func HandleiPhone6(w http.ResponseWriter, req *http.Request) {
	// user, err := RestoreUserInfoFromCookie(w, req)
	sub := strings.Split(req.RequestURI, "/")
	fmt.Println(sub)

	t, err := template.New("iphone6.html").ParseFiles(defaultTemplatePath + "iphone6.html")
	if err != nil {
		Logger.Error(err)
		return
	}

	if err = ParseSubTemplate(t, ip6SubTemplates); err != nil {
		Logger.Error(err)
		return
	}

	err = t.Execute(w, nil)
	if err != nil {
		Logger.Error(err)
		return
	}
}
