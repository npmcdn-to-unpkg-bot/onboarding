class Api::V1::CountriesController < ApiController
  before_action :set_country, only: [:show]

  def index
    render json: Country.all
  end

  def show
    render json: @country
  end

  private

  def set_country
    @country = Country.find(params[:id])
  end
end
