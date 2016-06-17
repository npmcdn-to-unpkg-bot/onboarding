module EventBriteEventAdapter

  def event_id
    EventBriteEventAdapter.get_event_id_from_url(url)
  end

  def user_count
    id = event_id
    raise 'No event id provided' if id.blank?
    Eventbrite::Event.retrieve(self.event_id, ENV['EVENBRITE_TOKEN'])
    # Eventbrite::Attendee.all({ event_id: self.event_id }, ENV['EVENBRITE_TOKEN'])
  end

  def self.matches_url?(url)
    !get_event_id_from_url(url).nil?
  end

  private

  def self.get_event_id_from_url(url)
    begin
      parsed_uri = URI.parse(url)
    rescue
      nil
    end

    return nil unless parsed_uri.path and parsed_uri.host and parsed_uri.host.include? 'eventbrite.com'

    /(\d+)$/.match(parsed_uri.path).to_s
  end
end