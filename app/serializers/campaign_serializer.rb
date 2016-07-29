class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :name, :htag, :description, :background_image, :url, :status, :start_date, :position

  has_many :events
  has_many :tasks
end
