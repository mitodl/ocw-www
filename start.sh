#!/bin/bash

set -euo pipefail

ENV_FILE=.env

if test -f "$ENV_FILE"; then
    export $(cat .env | xargs)
fi

npm run start:hugo
npm run start:webpack
