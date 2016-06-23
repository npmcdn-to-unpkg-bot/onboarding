class CreateCampaignTaskAssociation < ActiveRecord::Migration[5.0]
  def change
    create_table :campaigns_tasks do |t|
      t.belongs_to :campaign, index: true
      t.belongs_to :task, index: true
    end
  end
end
