#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

CONFIG_FILE="deploy.local.env"
if [ ! -f "$CONFIG_FILE" ]; then
  echo "Missing $CONFIG_FILE. Copy deploy.env.example to deploy.local.env and fill in your server details." >&2
  exit 1
fi
source "$CONFIG_FILE"

npm run build

rsync -avz --delete _site/ "${DEPLOY_HOST}:${DEPLOY_PATH}/"
