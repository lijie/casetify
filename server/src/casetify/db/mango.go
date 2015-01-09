package db

import (
	"errors"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	_ "log"
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

type Order struct {
	OrderID     string    `bson:"_id"`
	UID         string    `bson:"uid"`
	Time        time.Time `bson:"time"`
	Status      int       `bson:"status"`
	CloseReason int       `bson:"closereason"`
	Amount      float64   `bson:"amount"`
	CaseList    []string  `bson:"caselist"`
}

type Address struct {
	Country string `bson:"country"`
	Addr    string `bson:"addr"`
	City    string `bson:"city"`
	State   string `bson:"state"`
}

type User struct {
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

type DB struct {
	session *mgo.Session
	db      *mgo.Database
	usertb  *mgo.Collection
	casetb  *mgo.Collection
	casetb2 *mgo.Collection
	ordertb *mgo.Collection
}

func (db *DB) GetUser(uid string) (*User, error) {
	q := db.usertb.Find(bson.M{"email": uid})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}
	var u User
	err = q.One(&u)
	if err != nil {
		return nil, err
	}
	return &u, nil
}

func (db *DB) GetOrder(orderid string) (*Order, error) {
	q := db.ordertb.Find(bson.M{"_id": orderid})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}
	var o Order
	err = q.One(&o)
	if err != nil {
		return nil, err
	}
	return &o, nil
}

func (db *DB) GetOrdersByUser(uid string) ([]Order, error) {
	q := db.ordertb.Find(bson.M{"uid": uid})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}

	var orders []Order
	err = q.All(&orders)
	if err != nil {
		return nil, err
	}
	return orders, nil
}

func (db *DB) SetOrder(order *Order) error {
	_, err := db.ordertb.Upsert(bson.M{"_id": order.OrderID}, order)
	return err
}

func (db *DB) SetUser(user *User) error {
	_, err := db.usertb.Upsert(bson.M{"email": user.Email}, user)
	return err
}

func (db *DB) FindUserOrders(uid string) ([]Order, error) {
	q := db.ordertb.Find(bson.M{"uid": uid})
	count, err := q.Count()
	if count == 0 || err != nil {
		return nil, ErrNotExist
	}
	res := make([]Order, count)
	err = q.All(&res)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func (db *DB) FindUserCases(uid string, data interface{})  error {
	q := db.casetb2.Find(bson.M{"uid": uid})
	count, err := q.Count()
	if count == 0 || err != nil {
		return ErrNotExist
	}
	err = q.All(data)
	if err != nil {
		return err
	}
	return nil
}

func (db *DB) RegisterUser(email string) error {
	u, err := db.GetUser(email)
	if u != nil {
		return ErrUserAlreadyRegisted
	}
	u = &User{
		Email:   email,
		RegTime: time.Now(),
	}
	if err = db.SetUser(u); err != nil {
		return err
	}
	return nil
}

// Save case info
func (db *DB) SetCase2(id string, cs interface{}) error {
	_, err := db.casetb2.Upsert(bson.M{"_id": id}, cs)
	return err
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
