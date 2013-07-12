require 'sinatra/base'
require 'sass'
require 'redcarpet'

class SassHandler < Sinatra::Base   
  set :views, File.dirname(__FILE__) + '/templates/sass'
  
  get '/stylesheets/*.css' do
      filename = params[:splat].first
      sass filename.to_sym
  end  
end

class DinosaursEatEverybody < Sinatra::Base
  use SassHandler

  # routes
  get '/' do
    erb :index
  end

  get '/post/:id' do
    @body = "hi everybody!"
    erb :post
  end

  run! if app_file == $0
end
