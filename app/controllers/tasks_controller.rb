class TasksController < ApplicationController
  before_action only: [:show]

  def index
    if params[:campaign_id]
      @tasks = Campaign.find(params[:campaign_id]).tasks
    else
      @tasks = Task.all
    end
    @tasks = @tasks.search(params[:search_tasks]).order(sort_column + " " + sort_direction).
      paginate(page: params[:page], per_page: 9).where(status: TaskStatus::LIVE)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @task = Task.find(params[:id])
  end
end
