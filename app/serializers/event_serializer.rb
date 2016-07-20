class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :url, :date, :location, :instructions, :contact, :campaign_id

end
