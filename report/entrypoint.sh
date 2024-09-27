#!/bin/bash

ls -lsa .inga

cat .inga/report.json | inga-ui $1 $2

