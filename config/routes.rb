Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
	resources :users, only: [:index, :show, :create]
	resource :session, only: [:show, :create, :destroy]
	resources :spots, only: [:index, :show]
	resources :bookings, only: [:index, :show, :create, :destroy, :update]
	resources :reviews, only: [:index, :show, :create, :destroy, :update]
  end

  get '*path', 
  	to: 'static_pages#frontend', 
  	constraints: lambda {|req| !req.xhr? && req.format.html? }

  root to: 'static_pages#frontend'
end
