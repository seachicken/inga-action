#!/bin/sh -l

cat reports/report.json | /inga-ui/entrypoint $1
