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

  get '/admin', to: 'static#admin'

  namespace :api do
    namespace :v1 do
      get 'events', to: 'events#index'
      get 'campaigns', to: 'campaigns#index'
    end
  end

  get '/campaigns', to: 'static#campaigns'
  root 'static#home'
end
