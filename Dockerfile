FROM ruby:3.3.0

RUN gem install bundler jekyll

ENTRYPOINT ["jekyll"]
CMD []
