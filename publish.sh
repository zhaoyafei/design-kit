#! /bin/bash
# publish.sh

# Check the version on the published npm repository
NPM_VERSION=$(npm search architizer-design-kit | awk '{ c=$10; gsub("\\|", "", c) ; print c }' | tail -n 1)

# Check the version defined by package.json (modified by the git tag)
LOCAL_VERSION=$(cat package.json  | jq '.version' | sed 's/\"//g')

# If they are different, we should run `npm publish`
if [ $NPM_VERSION != $LOCAL_VERSION ]; then
  npm publish
fi

# Cleanup
rm .latest_*
