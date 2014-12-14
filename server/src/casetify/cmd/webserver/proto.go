package main

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
	ID string `json:"id"`
	Name string `json:"name"`
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
type ProtoCaseData struct {
	Img        []string             `json:"img"`
	LowResImg  []string             `json:"lowResImg"`
	Transform  []ProtoCaseTransform `json:"transform"`
	HldrSize   []ProtoCaseHldrSize  `json:"hldrSize"`
	Text       []string             `json:"text"`
	ID         string               `json:"id"`
	ImgCount   int                  `json:"imgCount"`
	DeviceType string               `json:"deviceType"`
	ItemType   string               `json:"itemType"`
	Template   string               `json:"template"`
	Version    int                  `json:"version"`
	Filter     string               `json:"filter"`
	Aqua       bool                 `json:"aqua"`
}

// S -> C
// 用于描述用户上传的文件
type ProtoFileUploadInfo struct {
	Id       string `json:"id"`
	Uri      string `json:"uri"`
	FileSize int64  `json:"file_size", string`
}
