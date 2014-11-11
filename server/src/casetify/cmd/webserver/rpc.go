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
	Uid string
	Email string
	Password string
	InstagramToken *oauth.Token
	FacebookToken *oauth.Token
	InstagramApi *instagram.Instagram

	isLogin bool
}

type CaseInfo struct {
	PhoneID int
	PhoneName string
	ImageUrl string
	X int
	Y int
	Scale float64
	Filter int
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

func FindUser(uid string) *UserInfo {
	if info, ok := usermap[uid]; ok {
		return info
	}
	return nil
}

func FindCreateUser(uid string) *UserInfo {
	if info, ok := usermap[uid]; ok {
		return info
	}
	info := &UserInfo{
		Uid: uid,
	}
	// TODO(lijie): read from config file
	conf := &instagram.Config{
		ClientID: "46c08890f7ef4731b2b802d972c3d000",
		ClientSecret: "efd1320106d64d2e9ed581ae4196b62b",
		RedirectURL: "http://127.0.0.1:8082/instagram_redirect_uri",
	}
	info.InstagramApi = instagram.NewInstagram(conf)
	usermap[uid] = info
	return info
}

func CreateUid(req *http.Request) (string, error) {
	sha := sha1.New()
	io.WriteString(sha, req.RemoteAddr)
	io.WriteString(sha, time.Now().Format("Mon Jan 2 15:04:05 -0700 MST 2006"))
	return hex.EncodeToString(sha.Sum(nil)), nil
}

func GetCreateUid(w http.ResponseWriter, req *http.Request) (string, error) {
	session, _ := CookieStore.Get(req, "session-name")
	fmt.Println(session)

	uid, ok := session.Values["uid"]
	if ok && len(uid.(string)) > 8 {
		log.Printf("Get uid from cookie: %s\n", uid.(string))
		return uid.(string), nil
	}

	uidstr, err := CreateUid(req)
	if err != nil {
		return "", err
	}
	fmt.Printf("new UID %s\n", uidstr)

	session.Values["uid"] = uidstr;
	session.Save(req, w);
	return uidstr, nil
}

//func readUidFromCookie(w http.ResponseWriter, req *http) (string, error) {
//	// read uid from cookie
//	session, err := CookieStore.Get(req, "session-name")
//	if err != nil {
//		return nil, err
//	}
//
//	uid, ok := session.Values["uid"]
//	if !ok || len(uid) < 8 {
//
//}
//
//func RestoreUserInfoFromCookie2(w http.ResponseWriter, req *http.Request) (*UserInfo, error) {
//	uid, err := readUidFromCookie(w, req)
//	if err != nil || len(uid) < 8 {
//		// no uid, create
//		uid = createUid(req)
//		// create userinfo
//		
//	}
//}

func RestoreUserInfoFromCookie(w http.ResponseWriter, req *http.Request) (*UserInfo, error) {
	uid, err := GetCreateUid(w, req)
	if err != nil {
		return nil, err
	}

	info := FindCreateUser(uid)
	if info == nil {
		return nil, errors.New("Cannot create user info")
	}

	fmt.Printf("userinfo %v\n", info)
	return info, nil
}

func GetUserInfoFromCookie(w http.ResponseWriter, req *http.Request) (*UserInfo, error) {
	return nil, nil
}
