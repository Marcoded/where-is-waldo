Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'scenes/index'
      get '/show/:id', to: 'scenes#show'
      post "/:id/check_position", to: 'scenes#check_position'
      post "/:id/reset_found", to: "scenes#reset_found"
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
