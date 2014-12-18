package main

import (
	"casetify/facebook"
	"casetify/instagram"
	myoauth "casetify/oauth"
	"code.google.com/p/goauth2/oauth"
	"code.google.com/p/log4go"
	"crypto/sha1"
	"encoding/hex"
	"encoding/json"
	_ "github.com/gorilla/sessions"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"time"
)

type PhotoPage struct {
	NextID string
	Page   int
}

type UserInfo struct {
	// random user id
	Rid            string
	Email          string
	InstagramToken *oauth.Token
	FacebookToken  *oauth.Token
	InstagramApi   *instagram.Instagram
	FacebookApi    *facebook.Facebook
	IsLogin        bool
	UploadList     []*ProtoFileUploadInfo
	CurrentCase    *ProtoCaseData
	PhotoPos       []PhotoPage
	Cart           []*ProtoCaseData
}

type CaseInfo struct {
	CaseID                 string            `json:"id"`
	UserID                 string            `json:"user_id"`
	CreateTime             time.Time         `json:"create_time"`
	ItemOption             string            `json:"item_option"`
	UnitPrice              string            `json:"unit_price"`
	ItemName               string            `json:"item_name"`
	DeviceTypeID           string            `json:"device_type_id"`
	DeviceShortName        string            `json:"device_short_name"`
	DeviceShortDescription string            `json:"device_short_description"`
	PreviewURL             map[string]string `json:"preview_url"`

	// not export to json
	localPreviewPath    string
	localPreviewRawPath string
}

// TODO(lijie): need lock

// 全局用户信息
// RID是其检索key
// 保存的是最近/正在访问当前网站的用户信息
// 因为RID是随机生成的key
// 所以该map包含了注册和非注册用户
var usermap map[string]*UserInfo

// casemap 保存了用户save design后, 写入数据库之前
// 生成的case信息, 一旦写入数据库, 对应的case信息则可以删掉
var casemap map[string]*CaseInfo

func init() {
	usermap = make(map[string]*UserInfo)
	casemap = make(map[string]*CaseInfo)
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
		Logger.Logf(log4go.ERROR, "open %s.json err %v\n", apiname, err)
		return err
	}
	defer f.Close()
	b, err := ioutil.ReadAll(f)
	if err != nil {
		Logger.Logf(log4go.ERROR, "read %s.json err %v\n", apiname, err)
		return err
	}
	// fmt.Println(b)
	conf := &myoauth.Config{}
	if err = json.Unmarshal(b, conf); err != nil {
		Logger.Logf(log4go.ERROR, "unmarshal %s.json err %v\n", apiname, err)
		return err
	}
	// fmt.Printf("%s conf %v\n", apiname, conf)
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
		Rid:      rid,
		PhotoPos: make([]PhotoPage, 2),
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
	// fmt.Println(session)

	rid, ok := session.Values["rid"]
	if ok && len(rid.(string)) > 8 {
		// log.Printf("Get rid from cookie: %s\n", rid.(string))
		return rid.(string), nil
	}

	ridstr, err := CreateRid(req)
	if err != nil {
		return "", err
	}
	// fmt.Printf("new RID %s\n", ridstr)

	session.Values["rid"] = ridstr
	session.Save(req, w)
	return ridstr, nil
}

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

func GenerateCaseID(userid string) string {
	return "11223344"
}

func FindCaseInfo(caseid string) *CaseInfo {
	if c, ok := casemap[caseid]; ok {
		return c
	}
	return nil
}

func NewCaseInfo(userid string, itemopt string) *CaseInfo {
	c := &CaseInfo{
		CaseID:     GenerateCaseID(userid),
		UserID:     userid,
		CreateTime: time.Now(),
		// TODO
		ItemOption: itemopt,
		UnitPrice:  "39.5",
		// TODO
		ItemName:   "itemname",
		PreviewURL: make(map[string]string),
	}
	casemap[c.CaseID] = c
	return c
}
