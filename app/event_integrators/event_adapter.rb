module EventAdapter
  def load_adapter
    return if url.blank?
    match_adapter = nil
    get_adapter_list.each do |adapter|
      next unless adapter.matches_url? url
      fail 'Multiple adapter matches for URL ' + url unless match_adapter.nil?
      match_adapter = adapter
    end
    include_adapter(match_adapter) unless match_adapter.nil?
  end

  def url=(url)
    write_attribute(:url, url)
    load_adapter
  end

  private

  def include_adapter(integrator)
    singleton_class = class << self;self;end;
    singleton_class.send(:include, integrator)
  end

  def get_adapter_list
    [EventBriteEventAdapter]
  end
end