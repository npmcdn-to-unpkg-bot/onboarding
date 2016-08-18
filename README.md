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

Set up sample database by copying `database.yml.sample` to `database.sample` in /config

To set up the database, run:

    bundle exec rake db:create
    bundle exec rake db:migrate
    bundle exec rake db:seed
    bundle exec rake db:sample

## Running

To run application:

    bundle exec rails server
