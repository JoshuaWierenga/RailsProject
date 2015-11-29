class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.string :titile
      t.string :url

      t.timestamps null: false
    end
  end
end
