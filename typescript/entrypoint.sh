#!/bin/sh -l

git config --global --add safe.directory $PWD
cat inga_git_diff | inga --root-path $1 --exclude "$2"
