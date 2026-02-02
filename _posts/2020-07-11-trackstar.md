---
title: Trackstar
date: 2020-07-11
tags: ruby, programming
---

Many good projects come from scratching your own itch. I like to track thing.

Over the past few years I've had on and off bursts of focus on practicing. Practicing guitar, drawing, chess, things like that. And I always find value in quantifying how often I'm practicing. I like to know how many hours per month, week, year, etc. I've spent on that skill. I feel like, as long as I'm practicing the right things, I can feel good about the progress if I can see a history of it. Plus wanting to see the numbers can help make sure I stick with things.

In the past I was just writing simple Markdown docs and then ran a small Sinatra app that pulled metadata out of that directory and gave me some historical stats. I called that system [Input Coffee](http://dinosaurseateverybody.com/blog/one-year-of-input-coffee).

I figured I could automate things a bit more and build something a bit more reusable, so I decided to build a small command line based tracking app, **Trackstar**.  I recognize that this type of interface only appeals to a very select group of people, but that group includes me, so I built it.

It's a pretty simple idea. You use the `trackstar -n` program to create a log directory, then (when you're in that directory) just use the `trackstar` command to make a new entry. It will prompt you for a few things; title, time, and some notes, then turn it into a Markdown file.  You can get some basic stats by running `trackstar -s` (again, in the log directory).

It's pretty bare bones right now and I'd like to iterate a bit on the interface (I do thing command line apps can have nice interfaces). I'd also like to do a lot more around the stats, maybe even pull in the Sinatra app/web based visualizations of the data to get a better history, we'll see. For now it's kind of fun to keep it as a purely terminal interface.

The whole thing is just built in Ruby and could probably stand to be optimized a bit, but it was fun to build a gem that was a pure executable thing, rather than a library. You can check out the code and full instructions for how to use it on the [GitHub repo](https://github.com/dorkrawk/trackstar).

I'm currently dog fooding it by tracking my guitar practice. So far it's working pretty well and I'm making tweaks as needed. If this scratches a specific itch you have, try it!

<img src="../blog_media/trackstar1.png">
