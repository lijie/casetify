#!/bin/sh

export GOPATH=`pwd`

go install -ldflags "-s -w" casetify/cmd/webserver
