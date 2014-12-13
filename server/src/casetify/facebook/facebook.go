package facebook

import (
	myoauth "casetify/oauth"
	"code.google.com/p/goauth2/oauth"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"errors"
)

var ErrorNotFound = errors.New("resource not found")

type Facebook struct {
	token *oauth.Token
	conf  *myoauth.Config
	oconf oauth.Config
}

func NewFacebook(conf *myoauth.Config) *Facebook {
	fb := &Facebook{
		conf: conf,
	}
	fb.oconf = oauth.Config{
		ClientId:     fb.conf.ClientID,
		ClientSecret: fb.conf.ClientSecret,
		Scope:        "user_photos,public_profile",
		AuthURL:      "https://www.facebook.com/dialog/oauth",
		TokenURL:     "https://graph.facebook.com/oauth/access_token",
		RedirectURL:  fb.conf.RedirectURL,
	}
	return fb
}

func (fb *Facebook) AuthCodeURL(code string) string {
	return fb.oconf.AuthCodeURL(code)
}

type AlbumsData struct {
	ID         string `json:"id"`
	Name       string `json:"name"`
	CoverPhoto string `json:"cover_photo"`
	Count      int    `json:"count"`
}

type AlbumPicture struct {
	Data map[string]string `json:"data"`
}

type Albums struct {
	Data []AlbumsData `json:"data"`
}

func (fb *Facebook) GetAlbums() ([]AlbumsData, error) {
	url := fmt.Sprintf("https://graph.facebook.com/v2.2/me/albums?access_token=%s&format=json&method=get&pretty=0&suppress_http_code=1", fb.token.AccessToken)
	albums := &Albums{}
	fb.Do(url, albums)
	fmt.Println(albums)
	return albums.Data, nil
}

type Photos struct {
	Data []PhotosData `json:"data"`
}

type PhotoImage struct {
	Height int    `json:"height"`
	Width  int    `json:"width"`
	Source string `json:"source"`
}

type PhotosData struct {
	ID      string       `json:"id"`
	Icon    string       `json:"icon"`
	Images  []PhotoImage `json:"images"`
	Link    string       `json:"link"`
	Name    string       `json:"name"`
	Picture string       `json:"picture"`
	Source  string       `json:"source"`
	Height  int          `json:"height"`
	Width   int          `json:"width"`
}

func (fb *Facebook) GetAlbumPhotos(albumid string) ([]PhotosData, error) {
	url := fmt.Sprintf("https://graph.facebook.com/v2.2/%s/photos?access_token=%s&format=json&method=get&pretty=0&suppress_http_code=1", albumid, fb.token.AccessToken)
	photos := &Photos{}
	fb.Do(url, photos)
	fmt.Println(photos)
	return photos.Data, nil
}

func (fb *Facebook) GetPhoto(photoid string) (*PhotosData, error) {
	url := fmt.Sprintf("https://graph.facebook.com/v2.2/%s?access_token=%s&format=json&method=get&pretty=0&suppress_http_code=1", photoid, fb.token.AccessToken)
	photo := &PhotosData{}
	fb.Do(url, photo)
	fmt.Println(photo)
	return photo, nil
}

func (fb *Facebook) GetAlbumCoverURL(albumid string) (string, error) {
	url := fmt.Sprintf("https://graph.facebook.com/v2.2/%s/picture?redirect=false&access_token=%s&format=json&method=get&pretty=0&suppress_http_code=1", albumid, fb.token.AccessToken)
	pic := &AlbumPicture{
		Data: make(map[string]string),
	}
	fb.Do(url, pic)
	fmt.Println(pic)
	if url, ok := pic.Data["url"]; ok {
		return url, nil
	}
	return "", ErrorNotFound
	
}

func (fb *Facebook) Do(url string, data interface{}) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return err
	}
	return json.Unmarshal(body, data)
}

func (fb *Facebook) GetAccessToken(w http.ResponseWriter, req *http.Request) (*oauth.Token, error) {
	fmt.Printf("exchange code %s\n", req.FormValue("code"))
	fmt.Println(fb.oconf)
	t := &oauth.Transport{Config: &fb.oconf}
	token, err := t.Exchange(req.FormValue("code"))
	if err != nil {
		fmt.Printf("get token err %v\n", err)
		return nil, err
	}
	fb.token = token
	return token, nil
}
