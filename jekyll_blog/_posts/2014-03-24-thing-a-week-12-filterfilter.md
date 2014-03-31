---
layout: post
title: Thing A Week 12 - FilterFilter
date: 2014-03-30
categories: thingaweek ruby wedding tech
published: true
---

So this week I actually made a thing. Back in week's [4](../blog/thing-a-week-4-bird-watcher) and [5](../blog/thing-a-week-5-bird-watcher-part-2) I was working on a project to listen to Twitter for pictures with a certain #hastag so I could display them at our wedding. I also wanted to build something similar for Instagram and have it feed into the same database. This became FilterFilter.

The [Instagram API](http://instagram.com/developer/) works differently than Twitter's. In order to get real-time information you have to register a callback endpoint with Instagram. This endpoint has to respont to a GET call with a validation code sent by Instgram and then respond to POST with whatever you want. Instagram only notifies you of an event (such as a photo being posted with a certain #hashtag), they don't actually provide the media info, so you have to find that yourself, which is a bit annoying and kind of clunky.

Here is the Sinatra code you might used to create the GET and POST endpoints to register and use the Instagram API:

{% highlight ruby %}
get '/instagram_stuff' do
  params['hub.challenge'] # for when you register your callback endpoint
end

post '/instagram_stuff' do
  # do stuff when Instagram tells you something 
  #    new has been posted
end
{% endhighlight %}

I was able to use a lot of the code I wrote for [BirdWatcher](https://github.com/dorkrawk/bird-watcher) (the Twitter listener) to store this info, so that was nice. I still need to write a front end to display all of these photos but that will be done some other week. It would be nice to bundle all of this together and create some sort of product for people where they provide a hashtag or keyword and I provide a nice display of photos from various services with those keywords. Maybe someday, when I have time to clean up this code a bit.

Of course I spent time this week working on RecLab, too. I got some S3 stuff set up and built out a few site forms. We were able to get a rough prototype of the basic track uploading and song creation functionality, which was fun to see. I also spent a bit of time working on our audio processing API. It's starting to come together and it's been very interesting designing something like this from the ground up.

To help us learn more about the types of people who might use RecLab I've put together a quick 10 question survey. If you are a musician, please take a minute and fill this out, it would be a big help! [RecLab Musician Survey](https://www.surveymonkey.com/s/DPLMSMV)