package main

import (
	"fmt"
	"os"
)

func ExampleCase() {
	ReadCaseConfig(os.Getenv("GOPATH") + "/conf/caseconf.json")
	cc := GetCaseConf("iphone6")
	if cc != nil {
		fmt.Println(cc.Name)
	}
	// Output: iphone6
}
