FROM node:20-slim

ARG INGA_UI_VERSION=0.4.6

RUN apt-get update && \
  apt-get install -y git jq && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

RUN git clone --depth 1 --branch v$INGA_UI_VERSION https://github.com/seachicken/inga-ui.git && \
  cd inga-ui && \
  npm install && \
  cp ./inga-ui /usr/local/bin/

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
