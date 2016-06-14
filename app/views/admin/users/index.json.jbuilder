json.array!(@users) do |user|
  json.extract! user, :id, :name, :osm_id, :email
  json.url user_url(user, format: :json)
end
