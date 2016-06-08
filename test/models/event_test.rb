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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
