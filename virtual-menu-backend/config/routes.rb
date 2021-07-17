Rails.application.routes.draw do
  resources :admins
  resources :foods
  resources :categories
  resources :resturants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
