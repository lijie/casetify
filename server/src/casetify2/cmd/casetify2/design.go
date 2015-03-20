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

func findCaseByPhone(phone string) []DesignCase {
	for i := range designPhone {
		if designPhone[i].Name == phone {
			return designPhone[i].Cases
		}
	}
	return nil
}

type dsGetPhone struct {
	Name     string
	FullName string
	Image    string
}

type dsGetPhoneList struct {
	Phones []dsGetPhone
}

func designGetPhoneList(w http.ResponseWriter, req *http.Request) {
	count := len(designPhone)
	ds := &dsGetPhoneList{}
	ds.Phones = make([]dsGetPhone, count)
	for i := range ds.Phones {
		ds.Phones[i].Name = designPhone[i].Name
		ds.Phones[i].FullName = designPhone[i].FullName
		ds.Phones[i].Image = "/img/" + designPhone[i].Name + "_thumb" + ".jpg"
	}

	t, err := template.New("panel_phonelist.html").ParseFiles(defaultTemplatePath + "panel_phonelist.html")
	if err != nil {
		Logger.Error(err)
		return
	}

	err = t.Execute(w, ds)
	if err != nil {
		Logger.Error(err)
		return
	}
}

type dsGetCase struct {
	Name     string
	FullName string
	Image    string
	Price    string
}

type dsGetCaseList struct {
	Cases []dsGetCase
}

func designGetCaseList(w http.ResponseWriter, req *http.Request) {
	phone := req.FormValue("phone")
	if len(phone) == 0 {
		return
	}

	cases := findCaseByPhone(phone)
	if cases == nil {
		return
	}

	ds := &dsGetCaseList{}
	ds.Cases = make([]dsGetCase, len(cases))

	for i := range ds.Cases {
		ds.Cases[i].Name = cases[i].Name
		ds.Cases[i].FullName = cases[i].FullName
		ds.Cases[i].Price = cases[i].Price
		ds.Cases[i].Image = "/img/" + cases[i].Name + ".jpg"
	}

	t, err := template.New("panel_case.html").ParseFiles(defaultTemplatePath + "panel_case.html")
	if err != nil {
		Logger.Error(err)
		return
	}

	err = t.Execute(w, ds)
	if err != nil {
		Logger.Error(err)
		return
	}
}

func designEdit(w http.ResponseWriter, req *http.Request) {
	casename := req.FormValue("case")
	if len(casename) == 0 {
		return
	}
	t, err := template.New("panel_edit.html").ParseFiles(defaultTemplatePath + "panel_edit.html")
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

func HandleDesignFn(w http.ResponseWriter, req *http.Request) {
	fmt.Println("fn")
	fn := req.FormValue("fn")
	if len(fn) == 0 {
		http.Redirect(w, req, "/design/", http.StatusFound)
		return
	}

	if fn == "phonelist" {
		designGetPhoneList(w, req)
	} else if fn == "phonecase" {
		designGetCaseList(w, req)
	} else if fn == "edit" {
		designEdit(w, req)
	}
	return
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
