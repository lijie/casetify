package main

import (
	"gopkg.in/mgo.v2/bson"
)

type Address struct {
	Country string `bson:"country"`
	Addr    string `bson:"addr"`
	City    string `bson:"city"`
	State   string `bson:"state"`
}

type DbUser struct {
	Email      string    `bson: "email"`
	RegTime    time.Time `bson: "regtime"`
	IP         string    `bson: "ip"`
	LoginTime  time.Time `bson: "logintime"`
	FirstName  string    `bson: "firstname"`
	LastName   string    `bson: "lastname"`
	Addr       Address   `bson: "addr"`
	NativeAddr Address   `bson: "nativeaddr"`
	ZipCode    string    `bson: "zipcode"`
}
