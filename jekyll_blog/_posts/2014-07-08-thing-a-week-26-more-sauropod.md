---
layout: post
title: Thing A Week 26 - More Sauropod
date: 2014-07-08
categories: thingaweek reclab javascript
published: true
---

Another 7 days, another busy week. With the wedding growing ever closer I've been squeezing in time for other projects wherever I can.  This week I managed to make some good progress on Sauropod by putting in some work before I go to work and on the plane while traveling to Chicago for the 4th.

<img src="../blog_media/sauropod1.png" />

I got Sauropod hooked up into the asset pipeline of the [RecLab](http://reclaboratory.com) Rails site and started attaching it to the various audio controls on the site. While [Howler.js](https://github.com/goldfire/howler.js) handles loading the audio file and playing the sound in browser, I still needed to build all the hooks to control and monitor the audio.

At this point I am able to click a "play" button next to a track and have Sauropod load the song and update global play/pause button, display the name and owner of the track (with links), and display a progress bar and time progress. I also have a global mute/unmute working and started on global volume controls. Most of the controls and UI updates were just simple hooks into Howler and some jQuery for display manipulation, but the progress bar and timer were a little tricky. While a regular HTML5 audio player sends an `onprogress` event that you can listen for to control the progress display I had to write my own listener that starts an stops with the audio. It wasn't very hard, I just used a `setInterval()` function around my own `sauropod.updateProgress()` function:

{% highlight ruby %}

sauropod.play = function() {
  if (sauropod.audio.status != "playing") {
    _.each(sauropod.audio.tracks, function(s) {s.play()});
    sauropod.audio.status = "playing";
    sauropod.updatePlayer();
    sauropod.tid = setInterval(sauropod.updateProgress, 100);
  }
}

{% endhighlight %}

I still need to build all the hooks into playing a mutitrack song (though it should work based on how I've built the system) and then work on the track editing features (muting/level adjustments at a per-track level). I also need a bit more robust error handling and a cleaner UI, but all in all the audio player is coming along nicely.

**Thing A Week Progress Update**

So this week marks half a year of this "Thing A Week" project. It hasn't been exactly what I planned, one discrete project finished every week, but it has really keep me focused on building things and I've really enjoyed writing about my progress on all the things I've been working on.
