FROM node:20-slim

ARG INGA_UI_VERSION=0.4.9
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
  apt-get install -y curl ca-certificates && \
  # https://github.com/cli/cli/blob/trunk/docs/install_linux.md#installing-gh-on-linux-and-bsd
  curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg && \
  chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg && \
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null && \
  apt-get update && \
  apt-get install -y gh jq && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

RUN git clone --depth 1 --branch v$INGA_UI_VERSION https://github.com/seachicken/inga-ui.git && \
  cd inga-ui && \
  npm install && \
  cp ./inga-ui /usr/local/bin/

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
