---
title: Does Anyone Still Use RSS?
date: 2014-02-06
tags: ruby, tech
---

Since the death of Google Reader I feel like I've seen people use RSS less and less, but a quick informal survey of friends showed that some people still use it for some things so maybe this blog should have a feed, right?.

I was interested in how hard it would be to add RSS to this weird Jekyll/Sinatra hybrid I have running and had a few minutes tonight so I decided to give it a shot. It turned out to not be bad.  I just followed [this quick tutoral](http://blog.drewinglis.com/2013/03/18/adding-rss.html) and found [a nice template here](https://github.com/snaptortoise/jekyll-rss-feeds) and 90% of the work was done (basically I just add another template to my Jekyll project and a few lines in my config and an xml file gets generated along with everything else when I run `jekyll build`.

The only custom part was adding a few lines to my Jekyll handler method in my main Sinatra app to suppress the layout template and render the RSS file as XML: 

```ruby
if file_path.include? "rss.xml"
  content_type 'text/xml'
  erb contents, :layout => false
else 
  erb contents
end
```

Now you can subscribe to this blog via [RSS](http://dinosaurseateverybody.com/blog/rss.xml) is you so desire!