class EventsController < ApplicationController
  before_action :set_event, only: [:show]

  def index
    if params[:campaign_id]
      @events = Campaign.find(params[:campaign_id]).events
    else
      @events = Event.all
    end
    @events = @events.search(params[:search_events]).order(sort_column + " " + sort_direction).
      paginate(page: params[:page], per_page: 9)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end
end
