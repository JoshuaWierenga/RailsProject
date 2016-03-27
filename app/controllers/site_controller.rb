class SiteController < ApplicationController
  def index
    @bookmarks = Bookmark.last(10)
    @comments = Comment.last(10)
    @picturespageone = Picture.last(2)
  end
  
    
  def path_exists?(path)
      begin
          Rails.application.routes.recognize_path(path)
      rescue
          return false
      end
      
      true
  end
end
