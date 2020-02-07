Rails.application.routes.draw do

scope :api, defaults: {format: :json}  do
    resources :cities
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get "/client-assets/:name.:format", :to => redirect("/client/client-assets/%{name}.%{format}")
#  get "/", :to => redirect("/client/index.html")

get '/ui'  => 'ui#index'
get '/ui#' => 'ui#index'
root "ui#index"
end
