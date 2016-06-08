# == Schema Information
#
# Table name: event_requests
#
#  id               :integer          not null, primary key
#  name             :string
#  description      :text
#  location         :string
#  potential_date   :date
#  experience_level :string
#  email            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class EventRequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
