require 'sinatra/base'
require 'sass'
require 'redcarpet'

class SassHandler < Sinatra::Base   
  set :views, File.dirname(__FILE__) + '/templates/sass'
  
  get '/stylesheets/*.css' do
      filename = params[:splat].first
      scss filename.to_sym
  end  
end

module DinosaursEatEverybody
  class App < Sinatra::Base
    use SassHandler

    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :autolink => true)

    # routes
    get '/' do
      @page_title = "index"
      erb :index
    end

    get '/post/:id' do
      @title = "This is post #{params[:id]}"
      @page_title = @title
      @body = markdown.render("How does *this* look? will this turn into a link? www.dinosaurseateverybody.com")
      erb :post
    end

    get '/about' do
      erb :about
    end

    get '/music' do
      erb :music
    end

    get '/links' do
      erb :links
    end

    get '/projects' do
      erb :projects
    end

    run! if app_file == $0
  end
end
