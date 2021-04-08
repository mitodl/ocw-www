#!/bin/bash

set -euo pipefail

ENV_FILE=.env

if test -f "$ENV_FILE"; then
    export $(cat .env | xargs)
fi

cd site
rm -rf _vendor
hugo mod get -u
hugo mod vendor
cd _vendor/github.com/mitodl/ocw-hugo-theme
yarn install
npm run build
