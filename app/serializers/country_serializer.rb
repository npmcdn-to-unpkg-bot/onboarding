class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :iso, :shp_url, :geojson_url
end
