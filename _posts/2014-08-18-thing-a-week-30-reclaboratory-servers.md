---
title: Thing A Week 30 - RecLaboratory Servers
date: 2014-08-18
tags: thingaweek, reclab
---

So as of last week I have the RecLab Rails site up and running on Heroku and the audio processing API, Roctopus, up and running on my own server. Amazingly they are able to talk to each other and work pretty much as expected.

There are still quite a few things to fix up, particularly with Rocktopus, but it's nice to see the full application working together on remote servers. While the Rails/Heroku setup was pretty straight forward, Rocktopus was uncharted territory for me.

I had never "launched" a Flask application before so this was all a bit new. As a (*temporary, I swear!*) measure I moved the files to my server over SFTP and started up a [Gunicorn](http://gunicorn.org/) server to run the application. I still need to put Nginx in front of all of this but for now it works as expected (though I can't imagine it would handle much traffic). I'd also like to learn more about [Fabric](http://www.fabfile.org/) for Python deployments. I've never been much of a sysadmin, so this was all a bit new to me.

The only really new thing I did for the Rails/Heroku app was add [Unicorn](http://unicorn.bogomips.org/) as a server. Heroku has a [great article](https://devcenter.heroku.com/articles/rails-unicorn) that held my hand through this setup.

Also, as part of this setup I've been playing around with [Slack](https://slack.com/) and it's wonderful integrations for monitoring the app. So far I have it working with Heroku, PaperTrail, and Pingdom. Nothing's gone wrong yet, but I suppose that is to be expected when there are no users...

As I mentioned, there are still quite a few rough edges to be worked out, a bunch of minor features, and at least one major feature that still needs to be built but this feels like a big step in getting [RecLaboratory](http://reclaboratory.com) launched and letting people try it out. We have some people in mind for VERY early alpha testers, but please let me know if you're interested in trying it out when it's ready!