require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Superhero
  class Application < Rails::Application
    config.filepicker_rails.api_key = ENV['AbcULJyISSbKC6lt7j7p3z']
  end
end
