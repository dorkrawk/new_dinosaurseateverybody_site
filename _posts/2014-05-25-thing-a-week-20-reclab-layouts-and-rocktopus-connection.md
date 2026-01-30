---
title: Thing A Week 20 - RecLab Layouts and Rocutopus Connection
date: 2014-05-25
tags: thingaweek, reclab
---

<img src="../blog_media/reclab_screen2.png" class="inline_right" />
This week I ended up getting quite a bit of RecLab work done, especially for a shortened week.

The major breakthrough was getting the Rails site talking to Rocktopus, the audio processing API I've been writing. It's not perfect but it has some basic authentication and the Rails Track model gets updated based on the response from Rocktopus. This is all just working locally right now but it shouldn't be hard to set up a server to server connection once I have Rocktopus deployed somewhere.

The other large chunk of work I got done was due to being home alone this weekend. With Eileen hanging out with friends in Napa I decided to start working on the first real site layouts. I made great progress on the user profile pages and started doing some of the url rewriting work. I considered dropping [Bootstrap](http://getbootstrap.com/) in favor of [Bourbon/Neat/Bitters](http://bourbon.io/) after exploring the latter libraries at work but I think for what we're trying to build right now Bootstrap will get us up and running much faster.

As always, there's still a lot of work to be done but it felt good to make some serious progress this week. Again, if you are interested in this project head over to [reclaboratory.com](http://reclaboratory.com) and enter your email. We'll get in touch with you when we're ready to start letting people try the site.

