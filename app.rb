require 'sinatra/base'
require 'postwave/client'
require './models/facts'

module DinosaursEatEverybody
  class App < Sinatra::Base

    POSTS_PER_PAGE = 10

    configure do
      set :protection, except: :host_header
      postwave_config_path = File.join(settings.root, "postwave.yaml")
      set :postwave_client, Postwave::Client.new(postwave_config_path)
    end

    not_found do
      status 404
      erb :rawr_oh_rawr
    end

    # routes
    get '/' do
      redirect '/blog'
    end

    get '/blog' do
      @posts = settings.postwave_client.posts(offset: 0, limit: POSTS_PER_PAGE)
      @pagination = settings.postwave_client.pagination(current_page: 1, per_page: POSTS_PER_PAGE)

      erb :posts
    end

    get '/blog/:slug' do
      slug = params[:slug]

      if slug == "rss.xml"
        # handle RSS feed
        content_type 'text/xml'
        settings.postwave_client.rss
      elsif is_integer?(slug)
        # handle paginated blog pages
        @page = slug.to_i
        @page_title = "Posts"
        offset = (@page - 1) * POSTS_PER_PAGE

        @posts = settings.postwave_client.posts(offset: offset, limit: POSTS_PER_PAGE)
        @pagination = settings.postwave_client.pagination(current_page: @page, per_page: POSTS_PER_PAGE)

        erb :posts
      else
        begin
          @post = settings.postwave_client.post(slug)
        rescue Postwave::PostNotFoundError
          status 404
          return erb :rawr_oh_rawr
        end
        @page_title = @post.title

        erb :post
      end
    end

    get '/archives' do
      @page_title = "archives"
      @archives = settings.postwave_client.archive

      erb :archives
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

    get '/now' do
      @page_title = "now"
      erb :now
    end

    def is_integer?(str)
      str.to_i.to_s == str
    end

    helpers do
      def dave_fact
        the_facts = Facts.new
        fact_id = (0..the_facts.count-1).to_a.sample
        the_facts.get_fact(fact_id)
      end

      def now_updated_at
        # I guess just update this when the Now page is updated...
        "Sept 1, 2025"
      end
    end

    run! if app_file == $0
  end
end
