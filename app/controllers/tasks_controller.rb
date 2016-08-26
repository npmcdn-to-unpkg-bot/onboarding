class TasksController < ApplicationController
  before_action only: [:show]

  def index
  end

  def show
    @task = Task.find(params[:id])
  end
end
