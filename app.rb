require 'sinatra/base'
require 'sass'
require 'redcarpet'
require 'nokogiri'
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

    # routes
    get '/' do
      redirect '/blog'
    end

    get '/blog/?*' do
      jekyll_blog(request.path)
    end

    get '/about' do
      @page_title = "about"
      erb :about
    end

    get '/music' do
      @page_title = "music"
      erb :music
    end

    get '/links' do
      @page_title = "links"
      erb :links
    end

    get '/projects' do
      @page_title = "projects"
      erb :projects
    end

    helpers do
      def dave_fact
        the_facts = Facts.new
        fact_id = (0..the_facts.count-1).to_a.sample
        the_facts.get_fact(fact_id)
      end
    end

    def is_integer?(str)
      str.to_i.to_s == str
    end

    def jekyll_blog(path)
      @page_title = "blog"

      file_name = path.split(File::SEPARATOR).last

      file_path = File.join(File.dirname(__FILE__), 'jekyll_blog/_site',  path.gsub('/blog',''))
      if file_path[-1] == "/" || is_integer?(File.split(file_path).last)
        file_path = File.join(file_path, 'index.html') unless file_path =~ /\.[a-z]+$/i
      else
        file_path += '.html' unless file_path =~ /\.[a-z]+$/i
      end

      if File.exist?(file_path)
        file = File.open(file_path, "rb")
        contents = file.read
        file.close

        blog_parse = Nokogiri::XML.parse( open( file_path ))
        blog_title = blog_parse.xpath("//h2[@class='post_title']/text()")[0]

        @page_title = blog_title.nil? ? "blog" : blog_title
        @page_title = "archives" if file_name == "archives"
        
        if file_path.include? "rss.xml"
          content_type 'text/xml'
          erb contents, :layout => false
        else
          erb contents
        end
      end
    end

    run! if app_file == $0
  end
end
