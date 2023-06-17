#!/bin/bash

git config --global --add safe.directory $PWD
inga --base-commit $1 --root-path $2 --exclude "$3"

