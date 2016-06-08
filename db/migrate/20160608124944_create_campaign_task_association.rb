class CreateCampaignTaskAssociation < ActiveRecord::Migration[5.0]
  def change
    create_table :campaign_task do |t|
      t.belongs_to :campaign, index: true
      t.belongs_to :task, index: true
    end
  end
end
