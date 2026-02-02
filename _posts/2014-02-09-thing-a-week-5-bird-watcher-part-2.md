---
title: Thing A Week 5 - Bird Watcher (Part 2)
date: 2014-02-09
tags: thingaweek, ruby, tech, wedding
---

So I took this week to wrap up last week's project. I was having trouble getting the Twitter listener for my wedding photo project up and running on my server but I'm pleased to report that I managed to get things up and running.

I ended up changing the format of the project a bit. Instead of a full Sinatra application I put everything into a single Ruby file that I can just leave running whenever I want to fire up the listener. I didn't need this project to serve any content, only run Tweet Stream and write to a database, so Sinatra was probably overkill to begin with.

I had some trouble with [Sequel](http://sequel.jeremyevans.net/), the Gem I was using to interface with the Postgres database but eventually got things worked out. The weirdest issue was with trying to store the url of the photo.  For some reason this didn't work:

```ruby
def store_image(tweet_photo_url, tweet_user, tweet_text)
  ...
  @db[:photos].insert( :photo_url => tweet_photo_url, :service => "twitter", :username => screen_name, :name => name, :photo_text => tweet_text)
end
```

but this did:

```ruby
def store_image(tweet_photo_url, tweet_user, tweet_text)
  ...
  the_url = "#{tweet_photo_url}"
  
  @db[:photos].insert( :photo_url => the_url, :service => "twitter", :username => screen_name, :name => name, :photo_text => tweet_text)
end
```

It must have something to do with the way Ruby handles certain strings or how Sequel or Postgres handle certain strings in INSERTs.

You can see the final file I'm using `bird_watcher.rb` in the [Github repo](https://github.com/dorkrawk/bird-watcher) for the project.  

Next I'll need to write an Instragram listener. Hopefully that will be pretty quick as most of the mechanics will be identical to this listener. I might hold off on working on that for a bit, though. I'm thinking about tackling a musical project next week.