---
title: Thing A Week 22 - Reclab Routing
date: 2014-06-10
tags: thingaweek, reclab
---

This was a pretty busy week. I ended up flying back to Chicago on Thursday for my bachelor party, which was really awesome! These good times didn't leave a lot of time for building things but I managed to get some interesting routing work done on the Reclab site.

I want Reclab to namespace songs and tracks by username, similar to the way Github namespaces [repos](https://github.com/dorkrawk/darwinning). Obviously I also want to use nice identifiers for the resources rather than just id numbers, so I started by setting up [FriendlyId](https://github.com/norman/friendly_id), which is a great gem for this sort of thing.

What's really cool about FriendlyId is that it can generate a slug that is unique across multiple fields in the object. For example, I want to allow user1 and user2 to both be able to have a song name "My Song One" so I want the path to each song to be something like `user1/songs/my-song-one` and `user2/songs/my-song-one`. Note that the song identifier "my-song-one" is only locally unique, not globally unique. To do this FriendlyId lets you scope slugs:

{% highlight ruby %}
extend FriendlyId
friendly_id :name, use: [:slugged, :finders, :scoped], scope: :user
{% endhighlight %}

Then, in order to get things to work with ActiveAdmin I had to make Songs "owned" by Users. If you don't do this, ActiveAdmin tries to use the FriendlyId slug as a globally unique identifier. This is an easy fix in the `/admin/song.rb`:

{% highlight ruby %}
ActiveAdmin.register Song do
  belongs_to :user
{% endhighlight %}

I still need to clean up the routing in the rest of the app but this was a big step forward to some nicer paths.