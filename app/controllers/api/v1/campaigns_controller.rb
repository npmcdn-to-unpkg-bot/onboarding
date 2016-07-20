class Api::V1::CampaignsController < ApiController
  def index
    page = params[:page] ? params[:page] : 1
    sort_by = params[:sort_by] ? params[:sort_by] : 'position'
    direction = params[:direction] ? params[:direction] : 'ASC'
    campaigns = Campaign.paginate(:page => page, :per_page => 3).order(sort_by + ' ' + direction)

    render json: campaigns
  end
end

