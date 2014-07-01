---
layout: post
title: Thing A Week 25 - Sauropod and Wedding Stuff
date: 2014-06-30
categories: thingaweek reclab javascript wedding
published: true
---

As seems to be the trend lately, last week was **very** busy. Between work stuff, wedding stuff, seeing a [musical](http://triassicparq.com/), and going to a [show](http://verucasalt.com/) it was hard to find time to get extra things done.

Almost all of the weekend was devoted to knocking off extra wedding things, like designing take-home gifts for guests and buying a bunch of ties. There is a big list of things that we apparently need to do, but we're making good progress on it.

We had a really productive [RecLab](http://reclaboratory.com) meeting on Tuesday where we worked out some good layout stuff and got the feed stuff into a good place. With the basic feed working, I am now able to move on to the audio player component: **Sauropod**.

Why is called Sauropod? Well a while ago I had to build an HTML5 based mp3 player for a job interview and I decided to call it 5auropod because 'sauropod' kind of sounded like 'iPod" and the '5' because of HTML5. Also [sauropods](http://en.wikipedia.org/wiki/Sauropoda) are cool, enormous dinosaurs. When I started working on a player for RecLab I wanted to use the same name, but I was worried about starting JavaScript variables with a number so I just used "Sauropod". Convoluted, I know, but it makes sense to me.

Right now Sauropod is in it's VERY early stages, mainly just building out method names to architect the system. The basic idea is to build a library to work with songs and tracks that contain metadata and possibly multiple audio tracks that need to be played simultaneously or adjusted individually. I'm using [Howler.js](https://github.com/goldfire/howler.js) to handle most of the audio heavy lifting. It's been pretty awesome so far. I'm also trying out [Underscore.js](http://underscorejs.org/) to give me a bit of functional programming in JavaScript. This is mainly to make working with arrays nicer, which I will have to do quite a bit with the arrays of Howler.js Sounds that make up songs.

Sauropod is still in it's very early stages, but I have a pretty good architecture planned out and I'm excited to see it develop.