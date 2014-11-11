package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

// TODO(lijie): need lock
var casemap map[string]*CaseConf
var casefile caseFile

type caseFile struct {
	Phone map[string]*CaseConf `json:"phone"`
}

type CaseConf struct {
	// 手机型号
	Name string `json:"name"`
	// 用于展示的手机型号名字
	DispName string `json:"dispname"`
	// 手机壳宽度
	CaseWidth int `json:"casewidth"`
	// 手机壳高度
	CaseHeight int `json:"caseheight"`
}

func init() {
}

func ReadCaseConfig(f string) {
	file, err := os.Open(f)
	if err != nil {
		fmt.Printf("open %s err %v\n", f, err)
		return
	}
	defer file.Close()

	if casefile.Phone == nil {
		casefile.Phone = make(map[string]*CaseConf)
	}

	b, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Printf("read %s err %v\n", f, err)
		return
	}

	err = json.Unmarshal(b, &casefile)
	if err != nil {
		fmt.Printf("json unmarshal %s err %v\n", f, err)
		return
	}
}

func GetCaseConf(name string) *CaseConf {
	if c, ok := casefile.Phone[name]; ok {
		return c
	}
	return nil
}
