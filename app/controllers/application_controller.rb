class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  
  helper_method :path_exists?
  
  def path_exists?(path)
      begin
          Rails.application.routes.recognize_path(path)
      rescue
          return false
      end
      
      true
  end
end
