class AdminController < ActionController::Base
  before_action :authenticate_user!

  def index
  end

  private

  def sort_column
    controller_name.classify.constantize.column_names.include?(params[:sort]) ? params[:sort] : "name"
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end
end
