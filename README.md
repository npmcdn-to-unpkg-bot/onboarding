# Logging Roads Onboarding website
Helping people get involved in tagging roads.


## Dependencies

Ruby 2.3.1
Node 6.2

## Installation

Install global dependencies:

    gem install bundler

Install project dependencies:

    bundle install
    npm install

Set up environment variables by copying `.env.sample` to `.env` and filling up the necessary values accordingly

To set up the database, run:

    bundle exec rake db:create
    bundle exec rake db:migrate

## Running

To run application:

    bundle exec rails server
