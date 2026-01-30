---
title: Thing A Week 23 - Bird Watcher Display
date: 2014-06-17
tags: thingaweek, wedding, ruby
---

This weekend Eileen was out of the house for her bachelorette party so I tried to knock out a few outstanding wedding related projects (apparently that is coming up pretty quickly). The [Bird Watcher](../blog/thing-a-week-4-bird-watcher) project had been dragging on for a while so I thought this would be a good time to wrap it up, too.

For those who don't remember, Bird Watcher is a system that listens for photos with certain #hashtags and displays them to a live page. I plan to use it to let people take pictures during our wedding and show them on a projector during the reception.

This project has spanned a few [Thing](../blog/thing-a-week-4-bird-watcher) [A](../blog/thing-a-week-5-bird-watcher-part-2) [Week](../blog/thing-a-week-12-filterfilter) posts and involved playing with the [Twitter](https://dev.twitter.com/) and [Instagram](http://instagram.com/developer/) APIs, as well as learning a bit more about Postgresql and the Sequel gem.

At this point most of the hard work had been done. I have Twitter and Instagram listeners (which both work in very different ways) that store info about photo posts in a database. I just needed to write something to pull them out and display them.

Originally I had written some nice code for prioritizing new photos and minimizing database calls but that ended up being a scoping pain in the ass in Sinatra. I would have had to build some sort of session object persistence system and honestly, the scale of this project just wasn't worth it.

I ended up with a simple AJAX loop on a timer that pulls a random "photo card" with the image and some information about it, and displays it on a page that should work nicely full screened on a projector. I still need to run some tests to make sure I don't get any weird image sizes but it's working well right now.

I'm a little worried that I'll spend part of my own wedding reception tweaking code or sshing into my server to restart some service, but I think everything should run pretty smoothly. This was a fun little project and made me play with some new technologies. Hopefully lots of people use it at the wedding.