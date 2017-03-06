#! /bin/bash
# deploy.sh

# Get first 7 characters of commit hash
SHA1=${CIRCLE_SHA1:0:7}

# Copy output CSS to CircleCI artifacts directory
mv css $CIRCLE_ARTIFACTS

# Check branch and deploy to correct target
if [ "$CIRCLE_BRANCH" = "master" ]; then

  # Master Builds
  aws s3 sync $CIRCLE_ARTIFACTS/css/adk.css s3://design-kit.arc.ht/css/adk.css --delete
  aws s3 sync js s3://design-kit.arc.ht/js/ --delete
  aws s3 sync fonts s3://design-kit.arc.ht/fonts/ --delete
  aws s3 sync assets s3://design-kit.arc.ht/assets/ --delete
  aws s3 sync docs s3://design-kit.arc.ht/docs/ --exclude "*" --include "*.css" --include "*.js" --delete
  aws s3 sync . s3://design-kit.arc.ht/ --exclude "*" --include "*.html"

else

  # Development Builds
  mv $CIRCLE_ARTIFACTS/css/adk.css $CIRCLE_ARTIFACTS/css/$SHA1.css
  aws s3 cp $CIRCLE_ARTIFACTS/css/$SHA1.css s3://design-kit.arc.ht/css/dev/$SHA1.css

fi