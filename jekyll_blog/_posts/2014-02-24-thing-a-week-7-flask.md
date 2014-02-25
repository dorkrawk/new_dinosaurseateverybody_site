---
layout: post
title: Thing A Week 7 - Flask
date: 2014-02-24
categories: thingaweek python tech flask
published: true
---

Now, in my defense I was pretty sick for most of last week so I ended up not getting much done outside of work besides a lot of napping. I started with a vague plan to do *something* with [Flask](http://flask.pocoo.org/), the Python micro-webframework and to that end I succeeded in what I set out to do. It had been a while since I had done anything serious with Python and I've been feeling the urge to get back into it.

I ended up spending a lot of time just getting my Python development environment set up. Apparently it's been so long since I've done anything non-trivial in the language that I didn't even have basic tools set up well on this computer. I wanted to do things right and that took a bit of installing and uninstalling through various channels to get things just so. This meant Python installed threw Homebrew and then using that version of `pip` to install `virtualenv`. This way I didn't have to use `sudo` to install `virtualenv`. While this ended up being more frustrating than it should have been (and at one point led to me asking a [Stack Overflow question](http://stackoverflow.com/questions/21917619/error-with-installing-virtualenv-with-pip-and-homebrew) that I later answered for myself) I did get things set up nicely, which is a major win.

Once I got down to setting up Flask thing were pretty smooth. For the basic stuff I was doing it felt very similar to Sinatra, which I've worked with quite a bit. I finally got to use Python's method decorators in practice which was neat (they drive the routing around the functions related to the routes).

The end result was a pretty basic first test site. Nothing really worth putting up anywhere. I'd like to keep playing with Flask and get a bit more reacquainted with Python so unless I have another burning project come up, I might just stick with it this week too.