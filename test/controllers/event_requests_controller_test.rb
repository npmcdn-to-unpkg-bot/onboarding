require 'test_helper'

class EventRequestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event_request = event_requests(:one)
  end

  test "should get index" do
    get event_requests_url
    assert_response :success
  end

  test "should get new" do
    get new_event_request_url
    assert_response :success
  end

  test "should create event_request" do
    assert_difference('EventRequest.count') do
      post event_requests_url, params: { event_request: { description: @event_request.description, email: @event_request.email, experience_level: @event_request.experience_level, location: @event_request.location, name: @event_request.name, potential_date: @event_request.potential_date } }
    end

    assert_redirected_to event_request_path(EventRequest.last)
  end

  test "should show event_request" do
    get event_request_url(@event_request)
    assert_response :success
  end

  test "should get edit" do
    get edit_event_request_url(@event_request)
    assert_response :success
  end

  test "should update event_request" do
    patch event_request_url(@event_request), params: { event_request: { description: @event_request.description, email: @event_request.email, experience_level: @event_request.experience_level, location: @event_request.location, name: @event_request.name, potential_date: @event_request.potential_date } }
    assert_redirected_to event_request_path(@event_request)
  end

  test "should destroy event_request" do
    assert_difference('EventRequest.count', -1) do
      delete event_request_url(@event_request)
    end

    assert_redirected_to event_requests_path
  end
end
