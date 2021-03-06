Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session, only: [:create, :new, :destroy]
  resources :users, only: [:create, :new]

  namespace :api, defaults: {format: :json} do
    resources :boards
    resources :lists
  end
end
