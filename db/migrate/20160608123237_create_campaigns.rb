class CreateCampaigns < ActiveRecord::Migration[5.0]
  def change
    create_table :campaigns do |t|
      t.belongs_to :user, index: true

      t.string :name
      t.string :htag
      t.text :description
      t.string :background_image
      t.string :url
      t.integer :status
      t.string :order_sequence
      t.date :start_date

      t.timestamps
    end
  end
end
