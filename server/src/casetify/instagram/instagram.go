package instagram

import (
	myoauth "casetify/oauth"
	"code.google.com/p/goauth2/oauth"
	"fmt"
	"github.com/gedex/go-instagram/instagram"
	"net/http"
)

var InstagramClientID = "98961ff07b1e4974b0f88f561ba2b18d"
var InstagramSecret = "PUT CLIENT SECRET HERE"

type Instagram struct {
	client *instagram.Client
	conf   *myoauth.Config
	oconf  oauth.Config
	token *oauth.Token
}

type Medias struct {
	URL []string
}

func (ig *Instagram) ApiURL(name string) string {
	return "https://api.instagram.com/oauth/authorize/?response_type=code&client_id=" + ig.conf.ClientID + "&state=getcode|" + name + "&redirect_uri=" + ig.conf.RedirectURL
}

func (ig *Instagram) RecentMedia(count int, maxid string) ([]instagram.Media, *instagram.ResponsePagination, error) {
	ig.client.AccessToken = ig.token.AccessToken

	opt := &instagram.Parameters{
		Count: uint64(count),
	}
	if len(maxid) > 0 {
		opt.MaxID = maxid
	}
	return ig.client.Users.RecentMedia("self", opt)
}

func (ig *Instagram) GetAccessToken(w http.ResponseWriter, req *http.Request) (*oauth.Token, error) {
	fmt.Printf("exchange code %s\n", req.FormValue("code"))

	t := &oauth.Transport{Config: &ig.oconf}
	token, err := t.Exchange(req.FormValue("code"))
	fmt.Println(token)
	fmt.Println(err)

	if err != nil {
		fmt.Printf("get token err %v\n", err)
		return nil, err
	}
	ig.token = token
	return token, nil
}

func (ig *Instagram) AuthCodeURL(code string) string {
	return ig.oconf.AuthCodeURL(code)
}

func NewInstagram(conf *myoauth.Config) *Instagram {
	ig := &Instagram{
		conf: conf,
	}
	ig.client = instagram.NewClient(nil)
	ig.client.ClientID = ig.conf.ClientID
	ig.client.ClientSecret = ig.conf.ClientSecret

	ig.oconf = oauth.Config{
		ClientId:     ig.conf.ClientID,
		ClientSecret: ig.conf.ClientSecret,
		Scope:        "basic",
		AuthURL:      "https://api.instagram.com/oauth/authorize/",
		TokenURL:     "https://api.instagram.com/oauth/access_token",
		RedirectURL:  ig.conf.RedirectURL,
	}

	// ig.client.AccessToken = ig.AccessToken
	return ig
}
