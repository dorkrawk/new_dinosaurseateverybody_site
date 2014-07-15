---
layout: post
title: Thing A Week 27 - Even More Sauropod
date: 2014-07-15
categories: thingaweek reclab javascript
published: true
---

Once again, another busy week divided between wedding stuff and side projects.

I spent this week adding more features to the [RecLaboratory](http://reclaboratory.com) audio player and I feel like it's in a pretty good spot for now. Obviously, there's more I'd like it to do but it's certainly at a point where it will work for basic track and song playback.

Here's a list of new features that got added this week:

- Visual indicators on the in page play buttons to show what is playing in the global player
- Some basic layout polish and player styling
- Jump forward or back in the audio by clicking on the progress bar
- Play/pause using the space bar
- Some basic (if clunky) error checking to make sure files loaded

One really interesting thing I found this week that I didn't expect is that audio playback is not interrupted by navigating around the site. If I reload the page the `sauropod.audio` object is empty and playback stops, but not if I'm just clicking links on the site. I haven't had time to explore it completely yet but I suspect it has something to do with either the way Rails caches JavaScript or with [TurboLinks](https://github.com/rails/turbolinks).

I'm really happy that is "just works" that way, I was worried that I would have to go back and turn this whole project into a single page app eventually to get uninterrupted playback, so this is a nice win. I do need to spend some time testing things to make sure I understand ***WHY*** it works. It seems dangerous to accidentally get a nice feature like this.

Like I said, while Sauropod is still a little rough around the edges, it's good enough to use for the site. I'm now moving on to fixing up the interface to Rocktopus for audio compression and song bouncing.

This week I'll be traveling to New York for a friend's wedding, so my Thing A Week time may be limited. Also I need to eventually finish writing the ceremony script for my wedding or else some people are going to be mad at me...