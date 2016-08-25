class ChangeLocationFormatInEvents < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :location, 'json USING CAST(location AS json)'
  end
end
