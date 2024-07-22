#!/bin/bash

git config --global --add safe.directory $PWD
inga --diff "$(cd $2 && git diff $1 --unified=0)" --root-path $2 --exclude "$3" 
