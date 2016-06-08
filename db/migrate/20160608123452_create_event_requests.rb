class CreateEventRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :event_requests do |t|
      t.string :name
      t.text :description
      t.string :location
      t.date :potential_date
      t.string :experience_level
      t.string :email

      t.timestamps
    end
  end
end
