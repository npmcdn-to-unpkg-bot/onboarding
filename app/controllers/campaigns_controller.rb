class CampaignsController < ApplicationController
  helper_method :sort_column, :sort_direction

  def index
    @campaigns = Campaign.search(params[:search]).order(sort_column + " " + sort_direction).
      paginate(page: params[:page], per_page: 9).where(status: CampaignStatus::LIVE)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
    @events = @campaign.events.search(params[:search_events]).order(sort_column + " " + sort_direction).
      paginate(page: params[:page], per_page: 9)
    @tasks = @campaign.tasks.search(params[:search_tasks]).order(sort_column + " " + sort_direction).
      paginate(page: params[:page], per_page: 9).where(status: TaskStatus::LIVE)
    respond_to do |format|
      format.html
      format.js
    end
  end
end
