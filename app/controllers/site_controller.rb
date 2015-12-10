class SiteController < ApplicationController
  def index
    @bookmarks = Bookmark.all
    @comments = Comment.all
  end
end
