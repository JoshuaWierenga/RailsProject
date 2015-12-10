class AddEmailToBookmark < ActiveRecord::Migration
  def change
    add_column :bookmarks, :email, :string
  end
end
