package main

import (
	"net/http"
	"code.google.com/p/goauth2/oauth"
	"fmt"
	"time"
	"io"
	_ "github.com/gorilla/sessions"
	"casetify/instagram"
	"casetify/facebook"
	myoauth "casetify/oauth"
	"crypto/sha1"
	"encoding/hex"
	"os"
	"io/ioutil"
	"encoding/json"
)

type UserInfo struct {
	// random user id
	Rid string
	Email string
	InstagramToken *oauth.Token
	FacebookToken *oauth.Token
	InstagramApi *instagram.Instagram
	FacebookApi *facebook.Facebook
	IsLogin bool
	UploadList []*FileUploadInfo
}

// TODO(lijie): need lock
var usermap map[string]*UserInfo

func init() {
	usermap = make(map[string]*UserInfo)
}

func (info *UserInfo) HasInstagramToken() bool {
	if info.InstagramToken == nil {
		return false
	}

	// chekc expire
	return true
}

func (info *UserInfo) HasFacebookToken() bool {
	if info.FacebookToken == nil {
		return false
	}

	// chekc expire
	return true
}

func FindUser(rid string) *UserInfo {
	if info, ok := usermap[rid]; ok {
		return info
	}
	return nil
}

func initAPI(apiname string, info *UserInfo) error {
	f, err := os.Open("conf/" + apiname + ".json")
	if err != nil {
		fmt.Printf("open %s.json err %v\n", apiname, err)
		return err
	}
	defer f.Close()
	b, err := ioutil.ReadAll(f)
	if err != nil {
		fmt.Printf("read %s.json err %v\n", apiname, err)
		return err
	}
	fmt.Println(b)
	conf := &myoauth.Config{}
	if err = json.Unmarshal(b, conf); err != nil {
		fmt.Printf("unmarshal %s.json err %v\n", apiname, err)
		return err
	}
	fmt.Printf("%s conf %v\n", apiname, conf)
	if apiname == "instagram" {
		info.InstagramApi = instagram.NewInstagram(conf)
	} else if apiname == "facebook" {
		info.FacebookApi = facebook.NewFacebook(conf)
	}
	return nil
}

func FindCreateUser(rid string) (*UserInfo, error) {
	if info, ok := usermap[rid]; ok {
		return info, nil
	}
	info := &UserInfo{
		Rid: rid,
	}
	initAPI("instagram", info)
	initAPI("facebook", info)
	usermap[rid] = info
	return info, nil
}

func CreateRid(req *http.Request) (string, error) {
	sha := sha1.New()
	io.WriteString(sha, req.RemoteAddr)
	io.WriteString(sha, time.Now().Format("Mon Jan 2 15:04:05 -0700 MST 2006"))
	return hex.EncodeToString(sha.Sum(nil)), nil
}

func GetCreateRid(w http.ResponseWriter, req *http.Request) (string, error) {
	session, _ := CookieStore.Get(req, "session-name")
	fmt.Println(session)

	rid, ok := session.Values["rid"]
	if ok && len(rid.(string)) > 8 {
		// log.Printf("Get rid from cookie: %s\n", rid.(string))
		return rid.(string), nil
	}

	ridstr, err := CreateRid(req)
	if err != nil {
		return "", err
	}
	fmt.Printf("new RID %s\n", ridstr)

	session.Values["rid"] = ridstr;
	session.Save(req, w);
	return ridstr, nil
}

//func readRidFromCookie(w http.ResponseWriter, req *http) (string, error) {
//	// read rid from cookie
//	session, err := CookieStore.Get(req, "session-name")
//	if err != nil {
//		return nil, err
//	}
//
//	rid, ok := session.Values["rid"]
//	if !ok || len(rid) < 8 {
//
//}
//
//func RestoreUserInfoFromCookie2(w http.ResponseWriter, req *http.Request) (*UserInfo, error) {
//	rid, err := readRidFromCookie(w, req)
//	if err != nil || len(rid) < 8 {
//		// no rid, create
//		rid = createRid(req)
//		// create userinfo
//		
//	}
//}

func RestoreUserInfoFromCookie(w http.ResponseWriter, req *http.Request) (*UserInfo, error) {
	rid, err := GetCreateRid(w, req)
	if err != nil {
		return nil, err
	}

	info, err := FindCreateUser(rid)
	if err != nil {
		return nil, err
	}

//	fmt.Printf("userinfo %v\n", info)
	return info, nil
}
