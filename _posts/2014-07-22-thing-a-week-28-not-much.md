---
title: Thing A Week 28 - Not Much
date: 2014-07-22
tags: thingaweek, reclab
---

So most of this week I was traveling so I wasn't able to get very much work done on any projects. I did, however, attend an Indian wedding in Long Island which was really cool so the week was not a total loss.

The work I did get done earlier this week was mainly with the [RecLaboratory](http://reclaboratory.com) interface to Rocktopus, our audio processing API. I built the interface to the `bounce_song` functionality, which will take all the individual tracks of a song and combine them into a single (probably .mp3) file.

I also set up a sort of hacky but effective, for now, "loading screen" to let users know that their audio is being uploaded/processes. It seems like a little thing but letting the page just hangs after clicking submit is really bad UI. This is a very early version of the product and we haven't given UI the full focus it needs but this was one thing that would be too awkward to not address early. It was a bit of an awkward fix because we're not actually doing the audio processing or uploading as a background process. Eventually I'll build a queuing/callback system in Rocktopus that will work much nicer, but this gets us going now.

This next week is another busy week. It is the last week in SF before we fly back to Chicago for the wedding (which is less than 2 weeks away now...).  If I get anything Thing A Week thing done this week it will probably be something wedding related.