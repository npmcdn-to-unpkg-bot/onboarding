class StaticController < ApplicationController
  before_action :authenticate_user!, :only => :admin

  def home
  end

  def campaigns
    @page = params['page'] ? params['page'] : 1
    @sort_by = params['sort_by'] ? params['sort_by'] : 'position'
    @direction = params['direction'] ? params['direction'] : 'ASC'
    @campaigns = Campaign.paginate(:page => @page, :per_page => 3).order(@sort_by + ' ' + @direction)
  end

  def admin
    render layout: "admin"
  end
end
