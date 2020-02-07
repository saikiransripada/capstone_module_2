require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Assg2
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

        Mongoid.load!('./config/mongoid.yml')
        #which default ORM are we using with scaffold
        #add  --orm mongoid, or active_record
        #    to rails generate cmd line to be specific
        config.generators {|g| g.orm :active_record}
        #config.generators {|g| g.orm :mongoid}

        config.middleware.insert_before 0, Rack::Cors do
          allow do
            origins /https:\/\/\w+\.github\.io/

            resource '/api/*',
              :headers => :any,
              :methods => [:get, :post, :put, :delete, :options]
          end
        end
  end
end
