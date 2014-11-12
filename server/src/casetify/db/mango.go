package db

import (
	mgo "gopkg.in/mgo.v2"
	_ "log"
	"errors"
)

type User struct {
}

const (
	// 无效订单
	OrderInvaid = 0
	// 等待付款
	OrderWaitPay = 1
	// 已经付款
	OrderPaid = 2
	// 订单已经取消
	OrderCancel = 3
	// 订单已经取消需要退款
	OrderCancelNeedRefund = 4
	// 已经发货
	OrderShip = 5
	// 订单退货
	OrderReturn = 6
	// 订单关闭
	OrderClose = 7
)

const (
	ReasonNotClose   = 0
	ReasonSuccess    = 1
	ReasonUserCancel = 2
	ReasonTimeout    = 3
)

type Case struct {
	CaseID   string
	ImageURL string
	Scale    float64
	OffsetX  int
	OffsetY  int
	Filter   int
}

type Order struct {
	OrderID     uint64
	Time        uint64
	Status      int
	CloseReason int
	Owner       string
	CaseInfo    []string
}

type DB struct {
	session *mgo.Session
	db      *mgo.Database
	usertb  *mgo.Collection
	casetb  *mgo.Collection
	ordertb *mgo.Collection
}

func (db *DB) GetUser(uid string) (*User, error) {
	return nil, nil
}

func (db *DB) GetOrder(orderid uint64) (*Order, error) {
	return nil, nil
}

func (db *DB) GetOrdersByUser(uid string) ([]*Order, error) {
	return nil, nil
}

func (db *DB) SetOrder(order *Order) error {
	return nil
}

func (db *DB) SetUser(user *User) error {
	return nil
}

func NewDB(url string) (*DB, error) {
	var err error
	db := &DB{}
	db.session, err = mgo.Dial(url)
	if err != nil {
		return nil, err
	}
	db.db = db.session.DB("casetify")
	if db.db == nil {
		db.session.Close()
		return nil, errors.New("database not found")
	}
	db.usertb = db.db.C("user")
	if db.usertb == nil {
		db.session.Close()
		return nil, errors.New("table not found")
	}
	db.casetb = db.db.C("case")
	if db.casetb == nil {
		db.session.Close()
		return nil, errors.New("table not found")
	}
	db.ordertb = db.db.C("order")
	if db.ordertb == nil {
		db.session.Close()
		return nil, errors.New("table not found")
	}
	return db, nil
}
