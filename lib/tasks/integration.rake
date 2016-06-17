desc "Create sample development data"
task :integration => :environment do
  url = 'https://www.eventbrite.com/e/my-first-test-event-tickets-26098930604'
  # url = 'https://www.eventbrite.com/e/my-short-asdasd2132-3123-test-event-tickets-26075222693?utm_source=eb_email&utm_medium=email&utm_campaign=new_event_email&utm_term=viewmyevent_button'


  foo = Event.new(:url => url);
  puts foo.user_count

end
