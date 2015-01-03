package main

import (
	"html/template"
	"net/http"
)

type CheckoutDataSet struct {
	ItemCount    int
	FirstName    string
	LastName     string
	Email        string
	Country      string
	Address      string
	City         string
	ZipCode      string
	State        string
	Subtotal     float64
	ShippingCost float64
	Total        float64
}

func HandleCheckoutStep1(w http.ResponseWriter, req *http.Request) {
}

func HandleCheckoutStep2(w http.ResponseWriter, req *http.Request) {
}

func HandleCheckout(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req);
	if err != nil {
		return
	}
	if user.DbUser == nil {
		user.DbUser, err = CaseDB.GetUser(user.Email)
		if err != nil {
			Logger.Error("Get user %s error %v", user.Email, err)
			return
		}
	}
	
	t, err := template.ParseFiles("../htdocs/checkout.html")
	if err != nil {
		return
	}

	ds := &CheckoutDataSet{
		ItemCount: len(user.Cart),
	}

	if err = t.Execute(w, ds); err != nil {
		return
	}
}
