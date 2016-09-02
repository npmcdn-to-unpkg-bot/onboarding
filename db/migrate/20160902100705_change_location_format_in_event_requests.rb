class ChangeLocationFormatInEventRequests < ActiveRecord::Migration[5.0]
  def change
    change_column :event_requests, :location, 'json USING CAST(location AS json)'
  end
end
