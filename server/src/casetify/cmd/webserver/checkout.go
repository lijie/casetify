package main

import (
	"bytes"
	"casetify/db"
	"encoding/json"
	"fmt"
	"gopkg.in/mgo.v2/bson"
	"html/template"
	"net/http"
	"time"
	"io"
)

type CheckoutItem struct {
	Name  string
	Price float64
}

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
	Items        []*CheckoutItem
	Subtotal     float64
	ShippingCost float64
	Total        float64
	ShowFormShip bool
	ShowDetail   bool
}

// paypal adaptive payment protocol
type APReceiver struct {
	Amount string `json:"amount"`
	Email  string `json:"email"`
}

type APReceiverList struct {
	Receiver []APReceiver `json:"receiver"`
}

type APRequestEnvelope struct {
	ErrorLanguage string `json:"errorLanguage"`
	DetailLevel   string `json:"detailLevel"`
}

type APReq struct {
	ActionType      string            `json:"actionType"`
	CurrencyCode    string            `json:"currencyCode"`
	ReceiverList    APReceiverList    `json:"receiverList"`
	ReturnUrl       string            `json:"returnUrl"`
	CancelUrl       string            `json:"cancelUrl"`
	RequestEnvelope APRequestEnvelope `json:"requestEnvelope"`
}

//{"responseEnvelope":{"timestamp":"2015-01-05T09:13:19.057-08:00","ack":"Success","correlationId":"d6fb3d714f32e","build":"13414382"},"payKey":"AP-62P93348YW074734G","paymentExecStatus":"CREATED"}

type APResponseEnvelope struct {
	Timestamp     string `json:"timestamp"`
	Ack           string `json:"ack"`
	CorrelationId string `json:"correlationId"`
	Build         string `json:"build"`
}

type APRsp struct {
	ResponseEnvelope  APResponseEnvelope `json:"responseEnvelope"`
	PayKey            string             `json:"payKey"`
	PaymentExecStatus string             `json:"paymentExecStatus"`
}

func sendAdaptivePayment(order *db.Order) (error, *APRsp) {
	ap := &APReq{
		ActionType:   "PAY",
		CurrencyCode: "USD",
		ReceiverList: APReceiverList{
			Receiver: []APReceiver{
				APReceiver{
					Amount: fmt.Sprintf("%f", order.Amount),
					Email:  "lijay-test-ad@126.com",
				},
			},
		},
		ReturnUrl: "http://" + serverconf.Domain + "/paypal/ap_return?orderid=" + order.OrderID,
		CancelUrl: "http://" + serverconf.Domain + "/paypal/ap_cancel?orderid=" + order.OrderID,
	}

	b, err := json.Marshal(ap)
	if err != nil {
		return err, nil
	}
	buf := bytes.NewReader(b)

	req, err := http.NewRequest("POST", "https://svcs.sandbox.paypal.com/AdaptivePayments/Pay", buf)
	if err != nil {
		return err, nil
	}
	h := &req.Header
	h.Set("X-PAYPAL-SECURITY-USERID", "lijay-test-ad_api1.126.com")
	h.Set("X-PAYPAL-SECURITY-PASSWORD", "A3REJ78UHM3XPKDS")
	h.Set("X-PAYPAL-SECURITY-SIGNATURE", "Ar-u-Pu7AEFtCfbvPUZ2TbFW3yJCAHLytFhI91naFPfFSc63wwnnW.v7")
	h.Set("X-PAYPAL-REQUEST-DATA-FORMAT", "JSON")
	h.Set("X-PAYPAL-RESPONSE-DATA-FORMAT", "JSON")
	h.Set("X-PAYPAL-APPLICATION-ID", "APP-80W284485P519543T")

	c := &http.Client{}
	rsp, err := c.Do(req)
	if err != nil {
		return err, nil
	}
	defer rsp.Body.Close()

	b2 := make([]byte, 1024)
	n, err := rsp.Body.Read(b2)
	aprsp := &APRsp{}
	err = json.Unmarshal(b2[0:n], aprsp)
	if err != nil {
		return err, nil
	}
	return nil, aprsp
}

func HandleAPSuccess(w http.ResponseWriter, req *http.Request) {
	orderid := req.FormValue("orderid")
	if len(orderid) == 0 {
		Logger.Error("invliad orderid")
		return
	}
	order, err := CaseDB.GetOrder(orderid)
	if err != nil {
		Logger.Error("get order %s error %v", orderid, err)
		return
	}
	order.Status = db.OrderPaid
	if err = CaseDB.SetOrder(order); err != nil {
		Logger.Error("save order %s error %v", orderid, err)
		return
	}
	io.WriteString(w, "pay success")
	return
}

func HandleAPCancell(w http.ResponseWriter, req *http.Request) {
	t, err := template.ParseFiles("../htdocs/pay_cancell.html")
	if err != nil {
		return
	}
	if err = t.Execute(w, nil); err != nil {
		return
	}
	return
}

func fillCheckoutDataSetWithUserInfo(user *UserInfo) *CheckoutDataSet {
	ds := &CheckoutDataSet{
		ItemCount: len(user.Cart),
		FirstName: user.DbUser.FirstName,
		LastName:  user.DbUser.LastName,
		Email:     user.DbUser.Email,
		Country:   user.DbUser.Addr.Country,
		City:      user.DbUser.Addr.City,
		State:     user.DbUser.Addr.State,
		Address:   user.DbUser.Addr.Addr,
		ZipCode:   user.DbUser.ZipCode,
	}
	amount := 0.0
	for i := range user.Cart {
		if user.Cart[i] == nil {
			continue
		}
		opt, ok := BaseCaseMap[user.Cart[i].ItemType]
		if !ok {
			continue
		}
		item := &CheckoutItem{
			Name: opt.Description,
			Price: opt.BasePrice + opt.AdditionalCost,
		}
		ds.Items = append(ds.Items, item)
		amount += opt.BasePrice + opt.AdditionalCost
	}
	ds.Subtotal = amount
	ds.Total = amount
	return ds
}

func fnHandleGetShipInfo(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	if len(user.Cart) == 0 {
		Logger.Error("Cart is empty!")
		return
	}
	t, err := template.ParseFiles("../htdocs/checkout.html")
	if err != nil {
		return
	}

	ds := fillCheckoutDataSetWithUserInfo(user)
	ds.ShowFormShip = true

	if err = t.Execute(w, ds); err != nil {
		return
	}
	return
}

func fnHandleShowDetail(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	if len(user.Cart) == 0 {
		Logger.Error("Cart is empty!")
		return
	}
	s := req.PostFormValue("firstname")
	if len(s) > 0 {
		user.DbUser.FirstName = s
	}
	s = req.PostFormValue("lastname")
	if len(s) > 0 {
		user.DbUser.LastName = s
	}
	s = req.PostFormValue("country")
	if len(s) > 0 {
		user.DbUser.Addr.Country = s
	}
	s = req.PostFormValue("address")
	if len(s) > 0 {
		user.DbUser.Addr.Addr = s
	}
	s = req.PostFormValue("city")
	if len(s) > 0 {
		user.DbUser.Addr.City = s
	}
	s = req.PostFormValue("zipcode")
	if len(s) > 0 {
		user.DbUser.ZipCode = s
	}
	s = req.PostFormValue("state")
	if len(s) > 0 {
		user.DbUser.Addr.State = s
	}
	t, err := template.ParseFiles("../htdocs/checkout.html")
	if err != nil {
		return
	}

	ds := fillCheckoutDataSetWithUserInfo(user)
	ds.ShowDetail = true

	if err = t.Execute(w, ds); err != nil {
		return
	}
	return
}

func fnHandlePay(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	if len(user.Cart) == 0 {
		Logger.Error("Cart is empty!")
		return
	}
	// 保存用户地址信息
	if err := CaseDB.SetUser(user.DbUser); err != nil {
		Logger.Error("Save user %v to db failed", user.DbUser)
		return
	}
	// 生成订单
	order := &db.Order{
		OrderID:     bson.NewObjectId().Hex(),
		UID:         user.Email,
		Time:        time.Now(),
		Status:      db.OrderWaitPay,
		CloseReason: db.ReasonNotClose,
	}
	fmt.Println(order)
	// 计算价格
	amount := 0.0
	for i := range user.Cart {
		c := user.Cart[i]
		if c == nil {
			continue
		}
		cd, ok := BaseCaseMap[c.ItemType]
		if !ok {
			continue
		}
		amount += cd.BasePrice + cd.AdditionalCost
		order.CaseList = append(order.CaseList, c.ID)
	}
	order.Amount = amount
	Logger.Debug("Total amount %f", amount)
	// 保存order到db
	if err := CaseDB.SetOrder(order); err != nil {
		Logger.Error("save order:\n%v\nerr: %v", order, err)
		return
	}
	// 发起支付请求
	err, aprsp := sendAdaptivePayment(order)
	if err != nil {
		Logger.Error("sendAdaptivePayment err %v", err)
		return
	}
	if aprsp.ResponseEnvelope.Ack != "Success" {
		Logger.Error("create adaptive pay failed:\n%v", *aprsp)
		return
	}
	// redirect to paypal
	url := "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey=" + aprsp.PayKey
	http.Redirect(w, req, url, http.StatusFound)
	return
}

func fnHandleMyOrder(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	orders, err := CaseDB.FindUserOrders(user.Email)
	if err != nil {
		io.WriteString(w, fmt.Sprintf("get order err %v", err))
		return
	}
	b, err := json.Marshal(orders)
	io.WriteString(w, string(b))
}


func fnHandleGallery(w http.ResponseWriter, req *http.Request, user *UserInfo) {
	var cases []ProtoCaseData
	err := CaseDB.FindUserCases(user.Email, &cases)
	if err != nil {
		io.WriteString(w, fmt.Sprintf("get cases err %v", err))
		return
	}
	b, err := json.Marshal(cases)
	io.WriteString(w, string(b))
}

func HandleCheckout(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		return
	}

	if len(user.Email) == 0 {
		Logger.Error("User not login!")
		return
	}

	// load user data
	if user.DbUser == nil {
		user.DbUser, err = CaseDB.GetUser(user.Email)
		if err != nil {
			Logger.Error("Get user %s error %v", user.Email, err)
			return
		}
	}

	fn := req.FormValue("fn")
	if len(fn) == 0 {
		return
	}

	switch fn {
	case "getshipinfo":
		fnHandleGetShipInfo(w, req, user)
	case "showdetail":
		fnHandleShowDetail(w, req, user)
	case "pay":
		fnHandlePay(w, req, user)
	case "myorder":
		fnHandleMyOrder(w, req, user)
	case "gallery":
		fnHandleGallery(w, req, user)
	}
}
