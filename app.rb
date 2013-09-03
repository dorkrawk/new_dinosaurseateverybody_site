require 'sinatra/base'
require 'sass'
require 'redcarpet'
require './models/facts'

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

    the_facts = Facts.new
    fact_id = (0..the_facts.count-1).to_a.sample

    # routes
    get '/' do
      @page_title = "home"
      @fact = the_facts.get_fact(fact_id)
      erb :index
    end

    get '/post/:id' do
      @title = "This is post #{params[:id]}"
      @page_title = @title
      @body = markdown.render("How does *this* look? will this turn into a link? www.dinosaurseateverybody.com")
      @fact = the_facts.get_fact(fact_id)
      erb :post
    end

    get '/about' do
      @page_title = "about"
      @fact = the_facts.get_fact(fact_id)
      erb :about
    end

    get '/music' do
      @page_title = "music"
      @fact = the_facts.get_fact(fact_id)
      erb :music
    end

    get '/links' do
      @page_title = "links"
      @fact = the_facts.get_fact(fact_id)
      erb :links
    end

    get '/projects' do
      @page_title = "projects"
      @fact = the_facts.get_fact(fact_id)
      erb :projects
    end

    run! if app_file == $0
  end
end
