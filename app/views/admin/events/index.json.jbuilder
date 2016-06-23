json.array!(@events) do |event|
  json.extract! event, :id, :name, :description, :image, :url, :date, :location, :instructions, :contact
  json.url event_url(event, format: :json)
end
