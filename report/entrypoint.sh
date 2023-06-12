#!/bin/sh -l

case $1 in
  "send-pr" ) send-pr ;;
  * ) echo "unsupported command: $1" ;;
esac
