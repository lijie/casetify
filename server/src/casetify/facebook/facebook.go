package facebook

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Facebook struct {
	token string
}

func NewFacebook(token string) *Facebook {
	return &Facebook{
		token: token,
	}
}

type AlbumsData struct {
	ID         string `json:"id"`
	Name       string `json:"name"`
	CoverPhoto string `json:"conver_photo"`
	Count      int    `json:"count"`
}

type Albums struct {
	Data []AlbumsData `json:"data"`
}

func (fb *Facebook) GetAlbums() ([]AlbumsData, error) {
	url := fmt.Sprintf("https://graph.facebook.com/v2.2/me/albums?access_token=%s&format=json&method=get&pretty=0&suppress_http_code=1", fb.token)
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
	ID      int          `json:"id"`
	Icon    string       `json:"icon"`
	Images  []PhotoImage `json:"images"`
	Link    string       `json:"link"`
	Name    string       `json:"name"`
	Picture string       `json:"picture"`
	Source  string       `json:"source"`
	Height  int          `json:"height"`
	Width   int          `json:"width"`
}

func (fb *Facebook) GetAlbumPhotos(albumid string) ([]PhotosData, error){
	url := fmt.Sprintf("https://graph.facebook.com/v2.2/1951896994726/photos?access_token=%s&format=json&method=get&pretty=0&suppress_http_code=1", fb.token)
	photos := &Photos{}
	fb.Do(url, photos)
	fmt.Println(photos)
	return photos.Data, nil
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

