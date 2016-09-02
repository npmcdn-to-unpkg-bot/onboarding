class AddLocationDescToLocationFields < ActiveRecord::Migration[5.0]
  def change
    add_column :event_requests, :location_name, :string
    add_column :events, :location_name, :string
  end
end
