#!/bin/sh -l

git config --global --add safe.directory $PWD
echo $3 | inga --root-path $1 --exclude "$2"
