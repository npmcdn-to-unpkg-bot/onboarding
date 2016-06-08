# == Schema Information
#
# Table name: campaigns
#
#  id               :integer          not null, primary key
#  name             :string
#  htag             :string
#  description      :text
#  background_image :string
#  url              :string
#  status           :integer
#  order_sequence   :string
#  start_date       :date
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class CampaignTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
