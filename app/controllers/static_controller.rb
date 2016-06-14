class StaticController < ApplicationController
  before_action :authenticate_user!, :only => :admin

  def home
  end

  def admin


  render layout: "admin"
  end
end
