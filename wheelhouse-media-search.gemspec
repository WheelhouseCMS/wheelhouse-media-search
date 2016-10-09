Gem::Specification.new do |s|
  s.name        = "wheelhouse-media-search"
  s.platform    = Gem::Platform::RUBY
  s.version     = "0.1"

  s.summary     = "Media Library search plugin for Wheelhouse CMS"
  s.description = "Allows the Wheelhouse CMS Media Library to be searched."
  s.author      = "Sam Pohlenz"
  s.email       = "sam@wheelhousecms.com"
  s.homepage    = "https://www.wheelhousecms.com"

  s.files        = Dir["{app,lib}/**/*"]
  s.require_path = "lib"

  s.add_dependency("wheelhouse", "~> 1.1.13")
end
