require 'wheelhouse'

module MediaSearch
  class Plugin < Wheelhouse::Plugin
    config.precompile << "media-search/admin.*" << "media-search/*.png"

    hook(:"media-library.sidebar.top", "media_search/search")

    hook(:global) { stylesheet_link_tag("media-search/admin") }
    hook(:global) { javascript_include_tag("media-search/admin") }
  end
end
