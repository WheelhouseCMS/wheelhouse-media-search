unless defined?(Wheelhouse::Media::Search)
  class Wheelhouse::Media::Search < Wheelhouse::Media::Folder::Root
    def initialize(results)
      @results = results
    end

    def children
      @results
    end

    def root?
      false
    end
  end
end

Wheelhouse::Media.class_eval do
  def self.search(query)
    results = Wheelhouse::Media::Item.where("lowercase_name" => /#{query}/).order(*Wheelhouse::Media::Folder::SORT_ORDER)
    Wheelhouse::Media::Search.new(results)
  end
end
