Rails.application.routes.draw do
  resources :event_requests
  resources :tasks
  resources :events
  resources :campaigns
  resources :users
end
