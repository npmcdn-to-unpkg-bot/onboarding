# == Schema Information
#
# Table name: event_requests
#
#  id               :integer          not null, primary key
#  name             :string
#  description      :text
#  location_name    :string
#  location         :string
#  potential_date   :date
#  experience_level :string
#  email            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class EventRequest < ApplicationRecord
end
