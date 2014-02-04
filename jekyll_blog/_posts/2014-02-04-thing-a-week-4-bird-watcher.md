---
layout: post
title: Thing A Week 4 - Bird Watcher
date: 2014-02-04
categories: thingaweek ruby tech wedding
published: true
---

This week might count as a partial failure plus I'm getting the post up pretty late, so that's probably not good either.

Once again I tackled a project for the wedding. I want to build a system that listens to Twitter and Instagram for photos that are tagged #daveandeileen then pulls them in and displays them somewhere at the wedding. This week I decided to finish up the Twitter listener.

This listener is basically just a small Sinatra app that uses [TweetStream](https://github.com/tweetstream/tweetstream) to listen for tagged tweets and then if it matches the criteria (has image and is properly tagged) it stores info about the tweet into a database. This same database will eventually hold Instagram (this was the whole reason I signed up for [Instragram](http://instagram.com/dorkrawk)) data and then I'll need to write a nice front end that pulls the photo data out and displays the pictures in some nice way.

I call this week a partial failure because I got the app working locally, but ran into some trouble getting it deployed properly. I am not a great sys admin, but I'm learning a few things. This is also the first time I've set up a database on my VPS. I've really been spoiled by always working with databases through a nice visual interface so doing some Postgres work while sshed into my server felt like pulling teeth. I was just running into some issues pretty late on Sunday night so I ended up admitting defeat and went to bed. You can check out the code for this project on [Github](https://github.com/dorkrawk/bird-watcher).

This next week (the week we are currently experiencing right now) is pretty busy. We're trying to finish up a bunch of other big wedding things (stuff that doesn't involve coding) and my parents are in town this weekend, so I know I'm going to be limited for "thing a week" time. I would like to use this week to finish off the deployment for Bird Watcher. I feel bad about letting a project spread over two weeks but I think it's best for my schedule and this project. 