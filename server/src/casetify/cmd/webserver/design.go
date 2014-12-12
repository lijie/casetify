package main

import (
	"fmt"
	"text/template"
	"net/http"
	"strings"
	"os"
	"encoding/json"
	"io/ioutil"
	"log"
)

type ServerDevices struct {
	DeviceID               string `json: "device_id,string"`
	Description            string `json: "description"`
	ShortDescription       string `json: "short_description"`
	ShortName              string `json: "short_name"`
	Status                 string `json: "status"`
	ShowProductShot        string `json: "show_product_shot"`
	IsDefaultForCollection string `json: "is_default_for_collection"`
	SortSeq                string `json: "sort_seq"`
	DefaultItemOption      string `json: "default_item_option"`
	IsFeatured             string `json: "is_featured"`
}

type DataSet struct {
	// 手机型号
	PhoneName string
	// 用于展示的手机型号名字
	PhoneDispName string
	// 手机壳宽度
	CaseWidth int
	// 手机壳高度
	CaseHeight      int
	InstagramApiUrl string
	FacebookApiUrl  string
	// 当前用户是否已经用instagram登录
	HasInstagramToken bool
	// 当前用户是否已经用facebook登陆
	HasFacebookToken bool
}

type designDataSet struct {
	ServerDevices string
	ServerItemOption string
	ServerDeviceMap string
	DefaultDevice string
	DeviceName string
	IsLogin bool
	IsFacebookLogin bool
	IsInstagramLogin bool
	Email string
}

func fillDataWithUserInfo(data *designDataSet, info *UserInfo) {
	// data.Uid = info.Uid
	if info.HasInstagramToken() {
		data.IsInstagramLogin = true
	}
	if info.HasFacebookToken() {
		data.IsFacebookLogin = true
	}
	data.IsLogin = false
	data.Email = info.Email
}

func readJson(path string) []byte {
	// read devices.json
	f, err := os.Open(path)
	if err != nil {
		log.Printf("read err %v\n", err)
		return nil
	}
	defer f.Close()

	b, err := ioutil.ReadAll(f)
	if err != nil {
		log.Printf("read err %v\n", err)
		return nil
	}

	return b
}

func unmarshalDevices(phone_type string) []map[string]string {
	b := readJson("conf/devices.json")
	if b == nil {
		return nil
	}

	v := make([]map[string]string, 0)
	err := json.Unmarshal(b, &v)
	if err != nil {
		return nil
	}

	return v
}

func unmarshalDeviceMap() map[string]map[string]map[string]string {
	b := readJson("conf/devicemap.json")
	if b == nil {
		return nil
	}

	var v map[string]map[string]map[string]string
	err := json.Unmarshal(b, &v)
	if err != nil {
		log.Printf("Unmarshal device map err %v\n", err)
		return nil
	}

	return v
}

func unmarshalItemOption() map[string][]map[string]string {
	b := readJson("conf/itemoption.json")
	if b == nil {
		return nil
	}

	var v map[string][]map[string]string
	err := json.Unmarshal(b, &v)
	if err != nil {
		return nil
	}
	fmt.Println(v)
	return v
}

func HandleDesign(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req)
	if err == nil {
		fmt.Println(user.InstagramApi.ApiURL(user.Rid))
	}
	sub := strings.Split(req.RequestURI, "/")
	phone_type := "iphone6"
	if len(sub) >= 3 {
		phone_type = sub[2]
	}

	t, err := template.New("iphone6.htm").Delims("{{{", "}}}").ParseFiles("../htdocs/iphone6.htm")
	if err != nil {
		fmt.Println(err)
		return
	}

	data := &designDataSet{}
	
	b, _ := json.Marshal(unmarshalDevices(phone_type))
	data.ServerDevices = string(b)

	b, _ = json.Marshal(unmarshalItemOption())
	data.ServerItemOption = string(b)

	b, _ = json.Marshal(unmarshalDeviceMap())
	data.ServerDeviceMap = string(b)

	data.DefaultDevice = phone_type
	data.DeviceName = phone_type

	fillDataWithUserInfo(data, user)
	
	err = t.Execute(w, data)
	if err != nil {
		fmt.Println(err)
		return
	}
}
