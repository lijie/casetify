package main

import (
	"errors"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"time"
)

const (
	// 无效订单
	OrderInvalid = 0
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
	// 订单有效
	ReasonNotClose = 0
	// 订单成功完成
	ReasonSuccess = 1
	// 用户取消订单
	ReasonUserCancel = 2
	// 订单超时未支付
	ReasonTimeout = 3
)

var ErrNotExist = errors.New("content not exist")
var ErrUserAlreadyRegisted = errors.New("user already registerd")

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

type DbOrder struct {
	OrderID     string    `bson:"_id"`
	UID         string    `bson:"uid"`
	Time        time.Time `bson:"time"`
	Status      int       `bson:"status"`
	CloseReason int       `bson:"closereason"`
	Amount      float64   `bson:"amount"`
	CaseList    []string  `bson:"caselist"`
}

type DbCase struct {
	ID         string    `bson:"_id"`
	Phone      string    `bson:"phone"`
	Image      string    `bson:"image"`
	Preview    string    `bson:"preview"`
	CreateTime time.Time `bson:"createtime"`
}

type DB struct {
	session *mgo.Session
	db      *mgo.Database
	usertb  *mgo.Collection
	casetb  *mgo.Collection
	casetb2 *mgo.Collection
	ordertb *mgo.Collection
}

func (db *DB) GetOrder(orderid string) (*DbOrder, error) {
	q := db.ordertb.Find(bson.M{"_id": orderid})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}
	var o DbOrder
	err = q.One(&o)
	if err != nil {
		return nil, err
	}
	return &o, nil
}

func (db *DB) SaveOrder(order *DbOrder) error {
	_, err := db.ordertb.Upsert(bson.M{"_id": order.OrderID}, order)
	return err
}

func (db *DB) GetUser(uid string) (*DbUser, error) {
	q := db.usertb.Find(bson.M{"email": uid})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}
	var u DbUser
	err = q.One(&u)
	if err != nil {
		return nil, err
	}
	return &u, nil
}

func (db *DB) SaveUser(user *DbUser) error {
	_, err := db.usertb.Upsert(bson.M{"email": user.Email}, user)
	return err
}

func (db *DB) GetCase(id string) (*DbCase, error) {
	q := db.casetb.Find(bson.M{"_id": id})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}
	var c DbCase
	err = q.One(&c)
	if err != nil {
		return nil, err
	}
	return &c, nil
}

func (db *DB) SaveCase(c *DbCase) error {
	_, err := db.casetb.Upsert(bson.M{"_id": c.ID}, c)
	return err
}

func (db *DB) FindUserOrders(uid string) ([]DbOrder, error) {
	q := db.ordertb.Find(bson.M{"uid": uid})
	count, err := q.Count()
	if count == 0 || err != nil {
		return nil, ErrNotExist
	}
	res := make([]DbOrder, count)
	err = q.All(&res)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func NewDB(url string) (*DB, error) {
	var err error
	db := &DB{}
	db.session, err = mgo.Dial(url)
	if err != nil {
		return nil, err
	}
	db.db = db.session.DB("casetify2")
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
	db.casetb2 = db.db.C("case2")
	if db.casetb2 == nil {
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

var CaseDB *DB

func InitDB(url string) error {
	var err error
	CaseDB, err = NewDB(url)
	return err
}
