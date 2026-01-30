---
title: Thing A Week 35 - RecLaboratory Record Track From Song
date: 2014-09-22
tags: thingaweek, reclab, ruby
---

Last week was a pretty busy week so I didn't get too many "projects" done outside of some [RecLaboratory](http://www.reclaboratory.com) work and even most of that was done in between sessions at the [Golden Gate Ruby Conference](http://gogaruco.com/). The major piece of work I finished up, apart from some UI cleanup, was a modal to create (and record!) a new track from a song's page. I think this will be a very common use case, so I wanted it working before we did the friendly release.

<img src="../blog_media/reclab_recfromsong.png" class="inline_right" />
After getting the in-browser track recording to a working place the previous week, I wanted to reuse most of that functionality in this new modal. Building this new feature on top of that existing code caused me to refactor a few things, which was great. I also had to add the ability to use multiple tracks as a "backing track" for the recording because I imagine that users won't want to bounce the song after every recorded track. This takes advantage of the track pre-loading I had already built into the song page and a little bit of html5 audio object abuse.

This is one of the last functional pieces of the site that needed to be built before we start soliciting alpha testers. Originally we had wanted to open RecLaboratory to early users on September 8th (almost exactly 6 months after Bobby and I first started talking about the idea) but we really wanted to get the last features in so that we could offer users a compelling reason to interact with the service. I think we're getting REALLY close now!