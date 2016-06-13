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

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
