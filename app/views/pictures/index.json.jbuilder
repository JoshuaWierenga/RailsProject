json.array!(@pictures) do |picture|
  json.extract! picture, :id, :url, :desc, :alt
  json.url picture_url(picture, format: :json)
end
