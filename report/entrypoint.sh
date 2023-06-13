#!/bin/sh -l

echo $1
cat reports/report.json | /inga-ui/entrypoint.sh $1
