# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  name         :string
#  description  :text
#  image        :string
#  url          :string
#  date         :date
#  location     :string
#  instructions :text
#  contact      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord
  belongs_to :user
end
