#!/usr/bin/env bash

rm -rf LANPartyPlanner

git clone https://github.com/PhoneBuster/LANPartyPlanner.git
cd LANPartyPlanner
git checkout main

cd app/lpguru

npm ci

npm run build

status=$?

if [ $status -ne 0 ];
  then echo "Build failed!!!"
  exit 128;
fi

if [ -d ".output" ]; then
  echo "Copying build directory..."
  cp -r .output /home/node/lpguru
  echo "new build copied!"
  echo "removing deployment build..."
  rm -rf /home/node/deployment/LANPartyPlanner
  echo "Build removed"
else
  echo "Build failed. No output directory available!!!"
  exit 128;
fi

exit 0