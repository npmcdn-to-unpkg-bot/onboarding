json.array!(@countries) do |country|
  json.extract! country, :id, :name, :iso, :shp_url, :geojson_url
  json.url country_url(country, format: :json)
end
