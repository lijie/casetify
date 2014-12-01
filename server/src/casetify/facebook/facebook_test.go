package facebook

func ExampleFacebookGetAlbum() {
	fb := NewFacebook("CAACEdEose0cBALaTYCMCl2cUyUhetaZB3NZClbLJ5PXNfXDHbB16ZBU635tzvDXiq86SU8pRJXGQkX5C9ZA3J1lh3uvHw5Unds03HSdRC5wEZCXPbxhlNiWKdyUU7AmqoHeGyPI4SZCO7624jYnXDaN4LnWqtupGZAfhmWBbPiObBRcbfsRly3Lh5N22jOsFcw7ntrt79hMu46jInojDWC7YV3VureNxxgZD")
	fb.GetAlbums()
	fb.GetAlbumPhotos("1951896994726")
	// Output: xxx
}
