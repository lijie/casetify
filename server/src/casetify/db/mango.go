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

type CaseImg struct {
	ImageURL string  `bson: "imsageurl"`
	Scale    float64 `bson: "scale"`
	Width    int     `bson: "width"`
	Height   int     `bson: "height"`
	X        int     `bson: "x"`
	Y        int     `bson: "y"`
}

type Case struct {
	// case 唯一标识
	CaseID string `bson: "_id"`
	// case 类型
	CaseType string `bson: "casetype"`
	// 手机类型
	PhoneType string `bson: "phonetype"`
	// 创建case的用户ID
	UID        string    `bson: "uid"`
	Images     []CaseImg `bson: "images"`
	CreateTime time.Time `bson: "createtime"`
	Filter     int       `bson: "filter"`
	Preview    string    `bson: "preview"`
}

type Order struct {
	OrderID     uint64   `bson: "_id"`
	UID         string   `bson: "uid"`
	Time        uint64   `bson: "time"`
	Status      int      `bson: "status"`
	CloseReason int      `bson: "closereason"`
	CaseList    []string `bson: "caselist"`
}

type User struct {
	Email           string    `bson: "email"`
	RegTime         time.Time `bson: "regtime"`
	IP              string    `bson: "ip"`
	LoginTime       time.Time `bson: "logintime"`
	RealName        string    `bson: "realname"`
	RealEnglishAddr string    `bson: "realenglishaddr"`
	RealLocalAddr   string    `bson: "reallocaladdr"`
	ZipCode         string    `bson: "zipcode"`
}

type DB struct {
	session *mgo.Session
	db      *mgo.Database
	usertb  *mgo.Collection
	casetb  *mgo.Collection
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

func (db *DB) GetOrder(orderid uint64) (*Order, error) {
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

func (db *DB) GetCase(caseid string) (*Case, error) {
	q := db.ordertb.Find(bson.M{"_id": caseid})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}
	var c Case
	err = q.One(&c)
	if err != nil {
		return nil, err
	}
	return &c, nil
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

func (db *DB) GetCasesByUser(uid string) ([]Case, error) {
	q := db.ordertb.Find(bson.M{"uid": uid})
	count, err := q.Count()
	if err != nil || count == 0 {
		return nil, ErrNotExist
	}

	var cases []Case
	err = q.All(&cases)
	if err != nil {
		return nil, err
	}
	return cases, nil
}

func (db *DB) SetOrder(order *Order) error {
	_, err := db.ordertb.Upsert(bson.M{"_id": order.OrderID}, order)
	return err
}

func (db *DB) SetUser(user *User) error {
	_, err := db.usertb.Upsert(bson.M{"email": user.Email}, user)
	return err
}

func (db *DB) SetCase(cs *Case) error {
	_, err := db.usertb.Upsert(bson.M{"_id": cs.CaseID}, cs)
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
	db.ordertb = db.db.C("order")
	if db.ordertb == nil {
		db.session.Close()
		return nil, errors.New("table not found")
	}
	return db, nil
}