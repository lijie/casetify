package main

import (
	"net/http"
	"fmt"
	"errors"
	"log"
	"time"
	_ "github.com/gorilla/sessions"
)

type OAuthToken struct {
	Token string
	Expire time.Time
}

type UserInfo struct {
	Uid string
	InstagramToken OAuthToken
	FacekbookToken OAuthToken
}

func (info *UserInfo) HasInstagramToken() bool {
	if len(info.InstagramToken.Token) == 0 {
		return false
	}

	// chekc expire
	return true
}

func (info *UserInfo) HasFacebookToken() bool {
	if len(info.InstagramToken.Token) == 0 {
		return false
	}

	// chekc expire
	return true
}

func FindUser(uid string) *UserInfo {
	return &UserInfo{
		Uid: uid,
	}
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

	info := FindUser(uid)
	if info == nil {
		return nil, errors.New("Cannot create user info")
	}

	return info, nil
}
