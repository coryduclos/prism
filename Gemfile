source 'http://rubygems.org'

gem 'rails', '~>3.2.0'
gem "devise", "~> 2.0.0"

# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  #gem 'compass', git: 'https://github.com/chriseppstein/compass.git' # beta until release
  gem 'compass-rails', '~> 1.0.0.rc.2'
  gem 'compass-susy-plugin', '~> 0.9'
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# To use ActiveModel has_secure_password
gem 'bcrypt-ruby', '~> 3.0.0'

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
#gem 'ruby-debug19', :require => 'ruby-debug'

group :development do
   #gem 'annotate', :git => 'git://github.com/ctran/annotate_models.git'
   gem 'annotate',"2.4.1.beta1"
   gem "ffaker", "~> 1.8.1"
   # gem "rails-footnotes", "~> 3.7.5"
   gem "rails_best_practices"
   gem "heroku", "~> 2.9.0"
   gem "nokogiri", "~> 1.5.0"
   # gem "eventmachine", "~> 1.0.0.beta.4.1", :platform => [:mswin, :mingw]   # gem 'rails-dev-tweaks', '~> 0.5.1'
   # gem "eventmachine", "~> 0.12.10"
   # gem 'rails-dev-tweaks', '~> 0.5.1'
end

group :development, :test do
  gem 'sqlite3', "~> 1.3.4"
  gem "rspec-rails", "~> 2.8.0"
  gem "simplecov", "~> 0.5.4"
  gem "factory_girl_rails", "~> 1.3.0"
  gem "nyan-cat-formatter", "~> 0.0.3"
  gem "guard"
  # gem 'guard-livereload'
  gem "guard-coffeescript"
  gem 'forgery', '0.3.12'
end

group :test do
  gem 'turn', :require => false # Pretty printed test output
  gem "capybara", "~> 1.1.1"
  gem "spork", "~> 1.0rc"
  gem 'rake'
  gem 'database_cleaner'
  gem 'minitest'
  gem 'ruby-prof'
  gem "cucumber-rails"
  gem "jasmine"
  gem 'jasmine-jquery-rails'
end

group :production do
  gem "heroku", "~>2.9.0"
  gem "pg"
 # gem "devise", "~> 2.0.0"
  gem "nokogiri", "~> 1.5.0"
  gem 'jasmine-jquery-rails'
end
