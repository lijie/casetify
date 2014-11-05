package main

import (
	"code.google.com/p/goauth2/oauth"
	"fmt"
	"net/http"
)

func HandleFacebookRedirect(w http.ResponseWriter, req *http.Request) {
	fmt.Println(req)
	config := &oauth.Config{
		ClientId:     "1515791822007784",
		ClientSecret: "",
		Scope:        "public_profile,user_photos",
		AuthURL:      "https://www.facebook.com/dialog/oauth",
		TokenURL:     "https://graph.facebook.com/oauth/access_token",
		RedirectURL:  "http://www.jayhome.com:8082/facebook_redirect_uri",
	}

	fmt.Printf("exchange code %s\n", req.FormValue("code"))

	t := &oauth.Transport{Config: config}
	token, err := t.Exchange(req.FormValue("code"))
	fmt.Println(token)
	fmt.Println(err)
}
