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

class Campaign < ApplicationRecord
  CAMPAIGN_STATUS_ARCHIVED = 0;
  CAMPAIGN_STATUS_DRAFT = 1;
  CAMPAIGN_STATUS_SOMETHING_ELSE_ENTIRELY = 2;

  belongs_to :user
  has_and_belongs_to_many :tasks

  def self.status
    {
        CAMPAIGN_STATUS_ARCHIVED => 'Archived',
        CAMPAIGN_STATUS_DRAFT => 'Draft',
        CAMPAIGN_STATUS_SOMETHING_ELSE_ENTIRELY => 'Something else entirely'
    }
  end
end
