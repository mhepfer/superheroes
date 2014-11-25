Superhero::Application.routes.draw do
  root to: 'root#root'
  namespace :api, defaults: { format: :json } do
    resources :heroes
    resources :sightings
  end
end
