#!/bin/sh -l

git config --global --add safe.directory $PWD
inga --root-path $1 --exclude "$2" --github-token $3
