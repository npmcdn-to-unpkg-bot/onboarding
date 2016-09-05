class TasksController < ApplicationController
  before_action only: [:show]

  def index
    @tasks = Task.search(params[:search]).order(sort_column + " " + sort_direction).paginate(page: params[:page], per_page: 9).where(status: 3)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @task = Task.find(params[:id])
  end
end
