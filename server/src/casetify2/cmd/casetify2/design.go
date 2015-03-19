package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
	"text/template"
)

type DesignCase struct {
	Name     string `json:"name"`
	FullName string `json:"fullname"`
	Price    string `json:"price"`
}

type DesignPhone struct {
	Name     string       `json:"name"`
	FullName string       `json:"fullname"`
	Cases    []DesignCase `json:"cases"`
}

type dsGetPhone struct {
	Name     string
	FullName string
	Image    string
}

type dsGetPhoneList struct {
	phones []dsGetPhone
}

var designSubTemplates = []SubTemplate{
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

var designPhone []DesignPhone

func init() {
	err := readJson("conf/design.json", &designPhone)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(designPhone)
}

func readJson(path string, obj interface{}) error {
	// read devices.json
	f, err := os.Open(path)
	if err != nil {
		Logger.Error("read err: %v\n", err)
		return err
	}
	defer f.Close()

	b, err := ioutil.ReadAll(f)
	if err != nil {
		Logger.Error("read err: %v\n", err)
		return err
	}
	return json.Unmarshal(b, obj)
}

func designGetPhoneList(w http.ResponseWriter, req *http.Request) {
	count := len(designPhone)
	ds := &dsGetPhoneList{}
	ds.phones = make([]dsGetPhone, count)
	for i := range ds.phones {
		ds.phones[i].Name = designPhone[i].Name
		ds.phones[i].FullName = designPhone[i].FullName
		ds.phones[i].Image = "../htdocs/test/img/" + designPhone[i].Name + "_thumb" + ".jpg"
	}

	t, err := template.New("panel_phonelist.html").ParseFiles(defaultTemplatePath + "panel_phonelist.html")
	if err != nil {
		Logger.Error(err)
		return
	}

	err = t.Execute(w, nil)
	if err != nil {
		Logger.Error(err)
		return
	}
}

func designGetCaseList() {
}

func HandleDesignFn(w http.ResponseWriter, req *http.Request) {
	fmt.Println("fn")
}

func HandleDesign(w http.ResponseWriter, req *http.Request) {
	// user, err := RestoreUserInfoFromCookie(w, req)
	sub := strings.Split(req.RequestURI, "/")
	phone_type := "iphone6"
	if len(sub) >= 3 {
		phone_type = sub[2]
	}
	fmt.Println(phone_type)

	t, err := template.New("design.html").ParseFiles(defaultTemplatePath + "design.html")
	if err != nil {
		Logger.Error(err)
		return
	}

	if err = ParseSubTemplate(t, designSubTemplates); err != nil {
		Logger.Error(err)
		return
	}

	err = t.Execute(w, nil)
	if err != nil {
		Logger.Error(err)
		return
	}
}
