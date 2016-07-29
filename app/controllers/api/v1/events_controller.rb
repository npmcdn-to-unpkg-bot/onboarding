class Api::V1::EventsController < ApiController
  before_action :set_event, only: [:show]

  def index
    render json: Event.all
  end

  def show
    render json: @event
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end
end

