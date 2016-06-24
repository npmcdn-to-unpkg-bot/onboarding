# -*- encoding: utf-8 -*-
# stub: enumerate_it 1.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "enumerate_it"
  s.version = "1.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["C\u{e1}ssio Marques", "Lucas Caton"]
  s.date = "2016-06-01"
  s.description = "Enumerations for Ruby with some magic powers!"
  s.homepage = "https://github.com/lucascaton/enumerate_it"
  s.rubygems_version = "2.5.1"
  s.summary = "Ruby Enumerations"

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_development_dependency(%q<appraisal>, [">= 0"])
      s.add_development_dependency(%q<pry>, [">= 0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<rspec>, [">= 0"])
      s.add_development_dependency(%q<rubocop>, [">= 0"])
    else
      s.add_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_dependency(%q<appraisal>, [">= 0"])
      s.add_dependency(%q<pry>, [">= 0"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<rspec>, [">= 0"])
      s.add_dependency(%q<rubocop>, [">= 0"])
    end
  else
    s.add_dependency(%q<activesupport>, [">= 3.0.0"])
    s.add_dependency(%q<appraisal>, [">= 0"])
    s.add_dependency(%q<pry>, [">= 0"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<rspec>, [">= 0"])
    s.add_dependency(%q<rubocop>, [">= 0"])
  end
end
