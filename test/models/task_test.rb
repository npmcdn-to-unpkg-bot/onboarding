# == Schema Information
#
# Table name: tasks
#
#  id                 :integer          not null, primary key
#  name               :string
#  task_manager_url   :string
#  task_type          :integer
#  description        :text
#  image              :string
#  status             :integer
#  location           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
