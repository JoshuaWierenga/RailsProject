class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :url
      t.string :desc
      t.string :alt

      t.timestamps null: false
    end
  end
end
