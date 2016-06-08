json.array!(@event_requests) do |event_request|
  json.extract! event_request, :id, :name, :description, :location, :potential_date, :experience_level, :email
  json.url event_request_url(event_request, format: :json)
end
