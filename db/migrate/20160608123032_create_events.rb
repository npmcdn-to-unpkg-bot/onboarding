class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.belongs_to :user, index: true

      t.string :name
      t.text :description
      t.string :image
      t.string :url
      t.date :date
      t.string :location
      t.text :instructions
      t.string :contact

      t.timestamps
    end
  end
end
