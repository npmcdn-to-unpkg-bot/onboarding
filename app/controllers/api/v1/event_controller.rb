class Api::V1::EventController < ApiController
  def index
    render json: Event.all
  end
end

