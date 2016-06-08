# == Schema Information
#
# Table name: tasks
#
#  id               :integer          not null, primary key
#  name             :string
#  task_manager_url :string
#  type             :integer
#  description      :text
#  image            :string
#  status           :integer
#  location         :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Task < ApplicationRecord
  has_and_belongs_to_many :campaigns
end
