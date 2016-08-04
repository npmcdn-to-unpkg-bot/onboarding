Rails.application.routes.draw do
  devise_for :users, path: 'admin'
  namespace :admin do
    resources :event_requests
    resources :tasks
    resources :events
    resources :campaigns do
      member do
        post :move
      end
    end
    resources :users
  end

  resources :admin, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :events, only: [:show, :index]
      resources :campaigns, only: [:show, :index]
      resources :tasks, only: [:show, :index]
    end
  end

  resources :campaigns, only: [:show, :index]
  resources :events, only: [:show, :index]
  resources :tasks, only: [:show, :index]

  root 'home#index'
end
