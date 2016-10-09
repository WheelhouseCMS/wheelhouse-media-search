unless defined?(MediaSearch::MediaControllerExtension)
  module MediaSearch::MediaControllerExtension
    def index
      if params[:q].present?
        respond_with(@folder = Wheelhouse::Media.search(params[:q]).decorate(:context => { :children => true }))
      else
        super
      end
    end
  end
end

Wheelhouse::Media::MediaController.class_eval do
  prepend MediaSearch::MediaControllerExtension
end
