Rails.application.routes.draw do
  devise_for :users
  resources :event_requests
  resources :tasks
  resources :events
  resources :campaigns
  resources :users
end
