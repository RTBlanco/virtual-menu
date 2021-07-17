Rails.application.routes.draw do
  
  resources :resturants do
    resources :admins 
    resources :categories do 
      resources :foods
    end 
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
