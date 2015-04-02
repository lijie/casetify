package main

import (
	"crypto/sha1"
	"encoding/hex"
	"io"
	"net/http"
	"sync"
	"time"
)

type UserCart struct {
}

type UserInfo struct {
	// random user id
	Rid   string
	Email string
	// InstagramToken *oauth.Token
	// FacebookToken  *oauth.Token
	// InstagramApi   *instagram.Instagram
	// FacebookApi    *facebook.Facebook
	IsLogin bool
	// UploadList     []*ProtoFileUploadInfo
	// CurrentCase    *ProtoCaseData
	// PhotoPos       []PhotoPage
	Cart   []*UserCart
	DbUser *DbUser
}

var usermap map[string]*UserInfo
var userlock sync.Mutex

func createRid(req *http.Request) (string, error) {
	sha := sha1.New()
	io.WriteString(sha, req.RemoteAddr)
	io.WriteString(sha, time.Now().Format("Mon Jan 2 15:04:05 -0700 MST 2006"))
	return hex.EncodeToString(sha.Sum(nil)), nil
}

func getCreateRid(w http.ResponseWriter, req *http.Request) (string, error) {
	session, _ := CookieStore.Get(req, "session-name")
	// fmt.Println(session)

	rid, ok := session.Values["rid"]
	if ok && len(rid.(string)) > 8 {
		// log.Printf("Get rid from cookie: %s\n", rid.(string))
		return rid.(string), nil
	}

	ridstr, err := createRid(req)
	if err != nil {
		return "", err
	}
	// fmt.Printf("new RID %s\n", ridstr)

	session.Values["rid"] = ridstr
	session.Save(req, w)
	return ridstr, nil
}

func findCreateUser(rid string) (*UserInfo, error) {
	userlock.Lock()
	defer userlock.Unlock()

	if info, ok := usermap[rid]; ok {
		return info, nil
	}
	info := &UserInfo{
		Rid: rid,
		// PhotoPos: make([]PhotoPage, 2),
	}
	// initAPI("instagram", info)
	// initAPI("facebook", info)
	usermap[rid] = info
	return info, nil
}

func RestoreUserInfoFromCookie(w http.ResponseWriter, req *http.Request) (*UserInfo, error) {
	rid, err := getCreateRid(w, req)
	if err != nil {
		return nil, err
	}

	info, err := findCreateUser(rid)
	if err != nil {
		return nil, err
	}

	if len(info.Email) == 0 {
		session, _ := CookieStore.Get(req, "session-name")
		email, ok := session.Values["email"]
		if ok && len(email.(string)) > 5 {
			info.Email = email.(string)
		}
	}
	return info, nil
}
