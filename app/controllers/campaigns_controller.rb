class CampaignsController < ApplicationController
  helper_method :sort_column, :sort_direction

  def index
    @campaigns = Campaign.search(params[:search]).order(sort_column + " " + sort_direction).paginate(page: params[:page], per_page: 9)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
  end
end
