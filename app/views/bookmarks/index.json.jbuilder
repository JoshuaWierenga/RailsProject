json.array!(@bookmarks) do |bookmark|
  json.extract! bookmark, :id, :titile, :url
  json.url bookmark_url(bookmark, format: :json)
end
