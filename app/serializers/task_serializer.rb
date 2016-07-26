class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :task_manager_url, :task_type, :description,
    :image, :status, :location, :created_at


  belongs_to :campaign
  belongs_to :event
end
