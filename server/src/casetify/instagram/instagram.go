package instagram

import (
	"code.google.com/p/goauth2/oauth"
	"fmt"
	"github.com/gedex/go-instagram/instagram"
	"net/http"
)

var InstagramClientID = "98961ff07b1e4974b0f88f561ba2b18d"
var InstagramSecret = "PUT CLIENT SECRET HERE"

type Instagram struct {
	client *instagram.Client
	conf   *Config
}

type Config struct {
	ClientID     string
	ClientSecret string
	RedirectURL  string
}

type Medias struct {
	URL []string
}

func (ig *Instagram) RecentMedia(token *oauth.Token, count int) (*Medias, error) {
	ig.client.AccessToken = token.AccessToken

	opt := &instagram.Parameters{
		Count: uint64(count),
	}
	media, _, err := ig.client.Users.RecentMedia("", opt)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	if len(media) == 0 {
		return nil, nil
	}

	m := &Medias{
		URL: make([]string, len(media)),
	}
	for i := 0; i < len(media); i++ {
		m.URL[i] = media[i].Images.Thumbnail.URL
	}
	return m, nil
}

func (ig *Instagram) GetAccessToken(w http.ResponseWriter, req *http.Request) (*oauth.Token, error) {
	config := &oauth.Config{
		ClientId:     ig.conf.ClientID,
		ClientSecret: ig.conf.ClientSecret,
		Scope:        "basic",
		AuthURL:      "https://api.instagram.com/oauth/authorize/",
		TokenURL:     "https://api.instagram.com/oauth/access_token",
		RedirectURL:  ig.conf.RedirectURL,
	}

	fmt.Printf("exchange code %s\n", req.FormValue("code"))

	t := &oauth.Transport{Config: config}
	token, err := t.Exchange(req.FormValue("code"))
	fmt.Println(token)
	fmt.Println(err)

	if err != nil {
		return nil, err
	}

	return token, nil
}

func NewInstagram(conf *Config) *Instagram {
	ig := &Instagram{
		conf: conf,
	}
	ig.client = instagram.NewClient(nil)
	ig.client.ClientID = ig.conf.ClientID
	ig.client.ClientSecret = ig.conf.ClientSecret
	// ig.client.AccessToken = ig.AccessToken
	return ig
}
