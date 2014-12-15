package main

import (
	"time"
)

// S -> C
// 图片列表
// 用于instargram的图片返回以及facebook的相册图片
type ProtoPhoto struct {
	ID string `json:"id"`
	// low_resolution
	// thumbnail
	// raw_uri
	// standard_resolution
	// squared_thumbanil
	Images map[string]string `json:"images"`
}

// S -> C
// 相册列表
// 用户facebook相册展示
type ProtoAlbum struct {
	ID         string     `json:"id"`
	Name       string     `json:"name"`
	CoverPhoto ProtoPhoto `json:"cover_photo"`
}

type ProtoCaseTransform struct {
	TransLeft float64 `json:"transLeft"`
	TransTop  float64 `json:"transTop"`
	Scale     float64 `json:"scale"`
}

type ProtoCaseHldrSize struct {
	Width  int    `json:"width"`
	Height int    `json:"Height"`
	Type   string `json:"type"`
}

// C -> S
// 用于表示用户设计的case
// 也是最终存储到DB到case信息
type ProtoCaseData struct {
	// from client
	Img        []string             `json:"img" bson:"img"`
	LowResImg  []string             `json:"lowResImg" bson:"-"`
	Transform  []ProtoCaseTransform `json:"transform" bson:"transform"`
	HldrSize   []ProtoCaseHldrSize  `json:"hldrSize" bson:"hldr_size"`
	Text       []string             `json:"text" bson:"text"`
	ImgCount   int                  `json:"imgCount" bson:"-"`
	DeviceType string               `json:"deviceType" bson:"device_type"`
	ItemType   string               `json:"itemType" bson:"item_type"`
	Template   string               `json:"template" bson:"template"`
	Version    int                  `json:"version" bson:"version"`
	Filter     string               `json:"filter" bson:"filter"`
	Aqua       bool                 `json:"aqua" bson:"aqua"`
	// add by server side
	ID         string    `json:"id" bson:"_id"`
	Preview    string    `json:"-" bson:"preview"`
	PreviewRaw string    `json:"-" bson:"preview_raw"`
	UID        string    `json:"-" bson:"uid"`
	CreateTime time.Time `json:"-" bson:"create_time"`
}

// S -> C
// casedata以及case image保存完毕后
// 即 SAVE DESIGN 操作完成后
// 服务器回给前端的response
type ProtoCaseInfo struct {
	CaseID                 string            `json:"id"`
	UserID                 string            `json:"user_id"`
	CreateTime             time.Time         `json:"create_time"`
	ItemOption             string            `json:"item_option"`
	UnitPrice              string            `json:"unit_price"`
	ItemName               string            `json:"item_name"`
	DeviceTypeID           string            `json:"device_type_id"`
	DeviceShortName        string            `json:"device_short_name"`
	DeviceShortDescription string            `json:"device_short_description"`
	PreviewURL             map[string]string `json:"preview_url"`

	// not export to json
	localPreviewPath    string
	localPreviewRawPath string
}

// S -> C
// 用于描述用户上传的文件
type ProtoFileUploadInfo struct {
	Id       string `json:"id"`
	Uri      string `json:"uri"`
	FileSize int64  `json:"file_size", string`
}
