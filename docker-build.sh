#!/bin/sh

# docker build -t <registry:dockerport>/<username>/<packagename>:<tag> .
docker build -t localhost:5000/shannons-shops:0.0.0 .

# docker push <registry:dockerport>/<username>/<packagename>:<tag>
docker push localhost:5000/shannons-shops:0.0.0
