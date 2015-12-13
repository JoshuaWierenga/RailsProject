class SiteController < ApplicationController
  def index
    @bookmarks = Bookmark.last(10)
    @comments = Comment.last(10)
    @picturespageone = Picture.last(4)
  end
end
