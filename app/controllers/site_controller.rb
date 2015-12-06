class SiteController < ApplicationController
  def index
  @bookmarks = Bookmark.last(5)
  @comments = Comment.last(5)
  end
end
