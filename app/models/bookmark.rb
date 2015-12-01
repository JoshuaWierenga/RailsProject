class Bookmark < ActiveRecord::Base    
    validates :title, length: { minimum: 5 }, presence: true
    validates :url, length: { minimum: 5 }, presence: true
end
