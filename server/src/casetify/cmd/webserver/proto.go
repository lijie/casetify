package main

type ProtoPhoto struct {
	ID string `json:"id`
	// low_resolution
	// thumbnail
	// raw_uri
	// standard_resolution
	// squared_thumbanil
	Images map[string]string
}

// 
type ProtoAlbum struct {
	ID string `json:"id"`
	Name string `json:"name"`
	CoverPhoto ProtoPhoto `json:cover_photo`
}
