FROM ghcr.io/seachicken/inga:0.22.2-java

RUN apt-get update && \
  apt-get install -y git && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
