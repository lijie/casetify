package main

import (
	"net/http"
	"code.google.com/p/goauth2/oauth"
	"fmt"
	"time"
	"io"
	"errors"
	"log"
	_ "github.com/gorilla/sessions"
	"casetify/instagram"
	"crypto/sha1"
	"encoding/hex"
)

type UserInfo struct {
	// random user id
	Rid string
	Email string
	Password string
	InstagramToken *oauth.Token
	FacebookToken *oauth.Token
	InstagramApi *instagram.Instagram
	isLogin bool
	UploadList []*FileUploadInfo
}

// TODO(lijie): need lock
var usermap map[string]*UserInfo

func init() {
	usermap = make(map[string]*UserInfo)
}

func (info *UserInfo) IsLogin() bool {
	return info.isLogin
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

func FindCreateUser(rid string) *UserInfo {
	if info, ok := usermap[rid]; ok {
		return info
	}
	info := &UserInfo{
		Rid: rid,
	}
	// TODO(lijie): read from config file
	conf := &instagram.Config{
		ClientID: "46c08890f7ef4731b2b802d972c3d000",
		ClientSecret: "efd1320106d64d2e9ed581ae4196b62b",
		RedirectURL: "http://127.0.0.1:8082/instagram_redirect_uri",
	}
	info.InstagramApi = instagram.NewInstagram(conf)
	usermap[rid] = info
	return info
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
		log.Printf("Get rid from cookie: %s\n", rid.(string))
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

	info := FindCreateUser(rid)
	if info == nil {
		return nil, errors.New("Cannot create user info")
	}

	fmt.Printf("userinfo %v\n", info)
	return info, nil
}
