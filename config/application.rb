require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Onboarding
  class Application < Rails::Application
    config.site_name = "Roadless Forest"
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Configuring scaffold
    config.generators do |g|
      g.assets false
      g.helper false
    end
  end
end
