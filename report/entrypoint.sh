#!/bin/sh -l

ls -lsa /

cd /inga-ui

case $1 in
  "send-pr" ) npm run send-pr ;;
  * ) echo "unsupported command: $1" ;;
esac
