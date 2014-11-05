package main

import (
	"net/http"
	"fmt"
	"log"
	_ "github.com/gorilla/sessions"
)

type UserInfo struct {
	Uid string
	InstagramToken string
	FacekbookToken string
}

func FindUser(uid string) (*UserInfo, error) {
	return &UserInfo{
		Uid: uid,
	}, nil
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

func GetImageFromInstagram(uid string) error {
	return nil
}
