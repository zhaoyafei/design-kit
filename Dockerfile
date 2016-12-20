FROM ruby:alpine

RUN apk add --update nodejs python build-base libffi-dev

RUN gem install bundler --no-document

COPY . /code

WORKDIR /code
RUN npm install -g grunt-cli

WORKDIR /code/bootstrap
RUN npm install
RUN npm rebuild node-sass
RUN bundle install

EXPOSE 9001

CMD ['grunt', 'dist']
