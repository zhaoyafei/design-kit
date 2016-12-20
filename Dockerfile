FROM ruby:alpine

RUN apk add --update nodejs python build-base libffi-dev

RUN gem install bundler --no-document

COPY . /code

WORKDIR /code
RUN npm install -g grunt-cli

WORKDIR /code/bootstrap
RUN npm install
RUN bundle install

RUN grunt dist

EXPOSE 9001
