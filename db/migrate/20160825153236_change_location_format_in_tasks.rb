class ChangeLocationFormatInTasks < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :location
    add_column :tasks, :location, :json
  end
end
