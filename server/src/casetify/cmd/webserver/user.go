package main

type UserInfo struct {
	// random user id
	Rid   string
	Email string
	// InstagramToken *oauth.Token
	// FacebookToken  *oauth.Token
	// InstagramApi   *instagram.Instagram
	// FacebookApi    *facebook.Facebook
	IsLogin bool
	// UploadList     []*ProtoFileUploadInfo
	// CurrentCase    *ProtoCaseData
	// PhotoPos       []PhotoPage
	// Cart           []*ProtoCaseData
	DbUser *DbUser
}
