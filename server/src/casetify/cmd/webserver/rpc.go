package main

import (
	"net/http"
	"code.google.com/p/goauth2/oauth"
	"fmt"
	"errors"
	"log"
	_ "github.com/gorilla/sessions"
	"casetify/instagram"
)

type UserInfo struct {
	Uid string
	Email string
	Password string
	InstagramToken *oauth.Token
	FacebookToken *oauth.Token
	InstagramApi *instagram.Instagram
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
		ClientSecret: "",
		RedirectURL: "http://127.0.0.1:8082/instagram_redirect_uri",
	}
	info.InstagramApi = instagram.NewInstagram(conf)
	usermap[uid] = info
	return info
}

func CreateUid(req *http.Request) (string, error) {
	return "", nil
}

func GetCreateUid(w http.ResponseWriter, req *http.Request) (string, error) {
	session, _ := CookieStore.Get(req, "session-name")
	fmt.Println(session)

	uid, ok := session.Values["uid"]
	if ok {
		log.Printf("Get uid from cookie: %s\n", uid.(string))
		return uid.(string), nil
	}

	uidstr, err := CreateUid(req)
	if err != nil {
		return "", err
	}

	session.Values["uid"] = uidstr;
	session.Save(req, w);
	return uidstr, nil
}

func GetUserInfo(uid string, info *UserInfo) error {
	return nil
}

func SaveUserInfo(uid string, info *UserInfo) error {
	return nil
}

func RestoreUserInfoFromCookie(w http.ResponseWriter, req *http.Request) (*UserInfo, error) {
	uid, err := GetCreateUid(w, req)
	if err != nil {
		return nil, err
	}

	info := FindCreateUser(uid)
	if info == nil {
		return nil, errors.New("Cannot create user info")
	}

	fmt.Println(info)
	return info, nil
}
