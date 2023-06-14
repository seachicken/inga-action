#!/bin/sh -l

cat reports/report.json | /inga-ui/entrypoint.sh $1
