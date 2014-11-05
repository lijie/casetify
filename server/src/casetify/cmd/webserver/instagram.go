package main

import (
	"code.google.com/p/goauth2/oauth"
	"fmt"
	"github.com/gedex/go-instagram/instagram"
	"net/http"
)

var InstagramClientID = "98961ff07b1e4974b0f88f561ba2b18d"
var InstagramSecret = "PUT CLIENT SECRET HERE"

type Instagram struct {
	ClientID     string
	ClientSecret string
	AccessToken  string

	client *instagram.Client
}

func (ig *Instagram) RecentMedia(count int) error {
	if ig.client == nil {
		ig.client = instagram.NewClient(nil)
		ig.client.ClientID = ig.ClientID
		ig.client.ClientSecret = ig.ClientSecret
		ig.client.AccessToken = ig.AccessToken
	}

	opt := &instagram.Parameters{
		Count: uint64(count),
	}
	media, _, err := ig.client.Users.RecentMedia("", opt)
	if err != nil {
		fmt.Println(err)
		return err
	}
	fmt.Println(media)

	// TODO(lijie)
	// convert to json and send to client
	return nil
}

func HandleInstagramRedirect(w http.ResponseWriter, req *http.Request) {
	fmt.Println(req)
	config := &oauth.Config{
		ClientId:     InstagramClientID,
		ClientSecret: InstagramSecret,
		Scope:        "basic",
		AuthURL:      "https://api.instagram.com/oauth/authorize/",
		TokenURL:     "https://api.instagram.com/oauth/access_token",
		RedirectURL:  "http://www.jayhome.com:8082/instagram_redirect_uri",
	}

	fmt.Printf("exchange code %s\n", req.FormValue("code"))

	t := &oauth.Transport{Config: config}
	token, err := t.Exchange(req.FormValue("code"))
	fmt.Println(token)
	fmt.Println(err)

	if err != nil {
		return
	}

	// test code
	ig := Instagram{
		ClientID:     InstagramClientID,
		ClientSecret: InstagramSecret,
		AccessToken:  token.AccessToken,
	}
	ig.RecentMedia(10)
}
