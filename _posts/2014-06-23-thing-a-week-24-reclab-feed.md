---
title: Thing A Week 24 - RecLab Feed
date: 2014-06-23
tags: thingaweek, reclab, ruby
---

This was another busy week but I manged to get some solid work done on [RecLaboratory](http://reclaboratory.com) stuff. 

First I took some pictures to use as a cover photo on our [Twitter](https://twitter.com/reclaboratory) and [Facebook](https://www.facebook.com/reclaboratory) pages. This ended up being a big project that involved moving a bunch of my music equipment around and finding a clear area in my small apartment. I am not a great photographer but I'm pleased with how it looks.  Feel free to follow/friend us on either. We're starting to post things.

Last Wednesday night I just couldn't sleep so I stayed up until 2:30 and knocked off a few bugs around comments but the major work I got done this week was around the event feed. I knew I couldn't just rig something together with a bunch of ugly table JOINs I ended up using the [public_activity](https://github.com/pokonski/public_activity) gem.  It listens for controller actions and makes an entry in a separate table for every event I want to show up in the feed. Most of our events are just the result of object creation and public_activity handles this really well right out of the box.

Right now I just have basic events around Users, Comments, Tracks, and Songs and I need to clean up how I'm using the public_activity `params` hash to avoid some n+1 database call issues but so far it's made it really easy to build feeds on User, Track, and Song pages. I'm working on building the main homepage feed now, which is proving a little trickier. Obviously I'd like to do this with a single call to the `Activities` model but because it's tracking polymorphic objects, the SQL is taking some work.

I'm hoping to have the feed stuff done by next week and start setting up a non-local version of the Rails site + Rocktopus soon. Then I have BUNCH of WebAudio stuff to work on around the player/audio tools. Oh, and I should probably be planning my wedding at some point too...

**bonus thing**

I actually drew a real comic this week, one where I penciled and inked and everything. [Check it out](http://mountsaintawesome.com/comic.php?id=87)!