#!/bin/sh -l

cat reports/report.json | ./inga-ui $1
