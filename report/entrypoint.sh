#!/bin/sh -l

ls -lsa
cat reports/report.json
cat reports/report.json | /inga-ui/entrypoint.sh
