class Admin::EventRequestsController < AdminController
  before_action :set_event_request, only: [:show, :edit, :update, :destroy]
  helper_method :sort_column, :sort_direction
  # GET /event_requests
  # GET /event_requests.json
  def index
    @event_requests = EventRequest.search(params[:search]).order(sort_column + " " + sort_direction).paginate(page: params[:page], per_page: 9)
    respond_to do |format|
      format.html
      format.js
    end
  end

  # GET /event_requests/1
  # GET /event_requests/1.json
  def show
  end

  # GET /event_requests/new
  def new
    @event_request = EventRequest.new
  end

  # GET /event_requests/1/edit
  def edit
  end

  # POST /event_requests
  # POST /event_requests.json
  def create
    @event_request = EventRequest.new(event_request_params)

    respond_to do |format|
      if @event_request.save
        format.html { redirect_to admin_events_request_path, notice: 'Event request was successfully created.' }
        format.json { render :show, status: :created, location: @event_request }
      else
        format.html { render :new }
        format.json { render json: @event_request.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /event_requests/1
  # PATCH/PUT /event_requests/1.json
  def update
    respond_to do |format|
      if @event_request.update(event_request_params)
        format.html { redirect_to admin_events_request_path, notice: 'Event request was successfully updated.' }
        format.json { render :show, status: :ok, location: @event_request }
      else
        format.html { render :edit }
        format.json { render json: @event_request.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /event_requests/1
  # DELETE /event_requests/1.json
  def destroy
    @event_request.destroy
    respond_to do |format|
      format.html { redirect_to admin_event_requests_url, notice: 'Event request was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_event_request
    @event_request = EventRequest.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def event_request_params
    params.require(:event_request).permit(:name, :description, :location, :potential_date, :experience_level, :email)
  end

  private
    def sort_column
      EventRequest.column_names.include?(params[:sort]) ? params[:sort] : "name"
    end

    def sort_direction
      %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
    end
end
