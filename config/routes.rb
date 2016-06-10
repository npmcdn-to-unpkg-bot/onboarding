Rails.application.routes.draw do
  scope(:path => '/admin') do
    devise_for :users

    resources :event_requests
    resources :tasks
    resources :events
    resources :campaigns
    resources :users

    root 'static#admin'
  end
end
