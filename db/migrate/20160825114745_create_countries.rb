class CreateCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :iso
      t.string :shp_url
      t.string :geojson_url

      t.timestamps
    end
  end
end
