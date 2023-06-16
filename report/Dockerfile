FROM ghcr.io/seachicken/inga-ui:0.1.0-pre2

ENV PATH=/inga-ui:$PATH

COPY entrypoint.sh /

RUN echo $PATH
RUN ls -lsa /inga-ui

ENTRYPOINT ["/entrypoint.sh"]
