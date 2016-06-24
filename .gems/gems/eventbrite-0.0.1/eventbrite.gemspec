# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'eventbrite/version'

Gem::Specification.new do |spec|
  spec.name          = "eventbrite"
  spec.version       = Eventbrite::VERSION
  spec.authors       = ["Teng Siong Ong"]
  spec.email         = ["hi@signwithenvoy.com"]
  spec.description   = %q{This gem provides access to the Eventbrite V3 api. We are not affiliated with Eventbrite.}
  spec.summary       = %q{API access to Eventbrite V3}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "rest-client", "~> 1.4"
  spec.add_dependency "hashie", "~> 3.0"

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "byebug"
  spec.add_development_dependency "rake"
end
