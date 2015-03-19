package main

import (
	"fmt"
	"net/http"
	"strings"
	"text/template"
)

type SubTemplate struct {
	Name string
}

var defaultTemplatePath = "../htdocs/test/template/"

var mainSubTemplates = []SubTemplate{
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

func ParseSubTemplate(t *template.Template, sub []SubTemplate) error {
	var err error
	for i := range mainSubTemplates {
		_, err = t.New(sub[i].Name).ParseFiles(defaultTemplatePath + sub[i].Name)
		if err != nil {
			return err
		}
	}
	return nil
}

func HandleMain(w http.ResponseWriter, req *http.Request) {
	// user, err := RestoreUserInfoFromCookie(w, req)
	sub := strings.Split(req.RequestURI, "/")
	fmt.Println(sub)

	t, err := template.New("main.html").ParseFiles(defaultTemplatePath + "main.html")
	if err != nil {
		Logger.Error(err)
		return
	}

	if err = ParseSubTemplate(t, mainSubTemplates); err != nil {
		Logger.Error(err)
		return
	}

	err = t.Execute(w, nil)
	if err != nil {
		Logger.Error(err)
		return
	}
}
