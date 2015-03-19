#!/bin/sh

export GOPATH=`pwd`

go install -ldflags "-s -w" casetify2/cmd/casetify2
