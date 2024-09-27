#!/bin/bash

git config --global --add safe.directory $PWD
echo "$(cd $2 && git diff $1 --unified=0)" | inga --diff  --root-path $2 --exclude "$3" --diff -
