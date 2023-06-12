#!/bin/sh -l

case $1 in
  "send-pr" ) npm run send-pr ;;
  * ) echo "unsupported command: $1" ;;
esac
