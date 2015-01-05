package main

import (
	"bytes"
	"encoding/json"
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

func sendAdaptivePayment(amount float64) (error, *APRsp) {
	ap := &APReq{
		ActionType:   "PAY",
		CurrencyCode: "USD",
		ReceiverList: APReceiverList{
			Receiver: []APReceiver{
				APReceiver{
					Amount: "39.90",
					Email:  "lijay-test-ad@126.com",
				},
			},
		},
		ReturnUrl: "http://127.0.0.1:8083/paypal/ap_return",
		CancelUrl: "http://127.0.0.1:8083/paypal/ap_cancel",
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

func HandleCheckoutStep1(w http.ResponseWriter, req *http.Request) {
}

func HandleCheckoutStep2(w http.ResponseWriter, req *http.Request) {
}

func HandleCheckout(w http.ResponseWriter, req *http.Request) {
	user, err := RestoreUserInfoFromCookie(w, req)
	if err != nil {
		return
	}
	//	if user.DbUser == nil {
	//		user.DbUser, err = CaseDB.GetUser(user.Email)
	//		if err != nil {
	//			Logger.Error("Get user %s error %v", user.Email, err)
	//			return
	//		}
	//	}

	fn := req.FormValue("fn")
	if len(fn) == 0 {
		return
	}

	if fn == "getshipinfo" {
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
		return
	}

	if fn == "showdetail" {
		return
	}

	if fn == "pay" {
		err, aprsp := sendAdaptivePayment(9.9)
		if err != nil {
			Logger.Error("sendAdaptivePayment err %v", err)
			return
		}
		if aprsp.ResponseEnvelope.Ack != "Success" {
			Logger.Error("create adaptive pay failed")
			return
		}
		// redirect to paypal
		url := "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey=" + aprsp.PayKey
		http.Redirect(w, req, url, http.StatusFound)
		return
	}
}
