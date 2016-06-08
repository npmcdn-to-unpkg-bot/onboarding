# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string
#  osm_id     :integer
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  has_many :events
  has_many :campaigns
end
