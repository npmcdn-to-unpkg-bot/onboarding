class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :task_manager_url
      t.integer :task_type
      t.text :description
      t.string :image
      t.integer :status
      t.string :location

      t.timestamps
    end
  end
end
