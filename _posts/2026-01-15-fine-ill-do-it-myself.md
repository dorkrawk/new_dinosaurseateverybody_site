---
title: Fine, I'll Do It Myself
date: 2026-01-15
tags: 
---

**I recently moved all my small project sites over to a self-hosted solution using [Coolify](https://coolify.io/). It was pretty easy and really rewarding!**

I miss Heroku.

I know Heroku still exists, but I miss the generous free tier they offered. This was the perfect solution for spinning up relatively simple, low traffic, Ruby sites, which are what a lot of my projects are.

When Heroku decided to kick out freeloaders (like me) I started looking around for other hosting options I could mooch from. I ended up moving most of my small sites/projects to [Fly.io](https://fly.io/). When I needed a small database, [Supabase](https://supabase.com/) had a pretty good free tier and I ended up using [Umami](https://umami.is/) for some simple site analytics.

Honestly, this all worked pretty well. Fly.io had a good free tier. I only started incurring costs once I was hosting too many sites on my account. Umami worked fine, but the free tier only supported 3 sites and 6 months of data. I did run into a few issues with Fly.io deployments when they changed some configurations, but nothing major. I *probably* could have finagled a mostly workable, almost free hosting solution. But near the end of last year, I was fixing the deployment configs for one of my sites and I started thinking, **"Why don't I do this all myself and have it work exactly the way I want!?"**.

Always a dangerous thought.

I've had a small Digital Ocean droplet for a while, just to play around with, but I wasn't doing much with it, so I figured I could use that.  I started looking into "Heroku-like" self-hosting systems and landed on [Coolify](https://coolify.io/). I'm ok with a little DYI, but I didn't really want to do a lot of serious Linux server maintenance and this seemed to fit the bill.  Setting up Coolify on a Digital Ocean droplet was pretty straightforward:


Open up some ports:
```
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 8000/tcp
ufw enable
ufw status
```

Install Coolify:
```
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

And then I had a web UI to start setting things up.

Each site in Coolify is an application and applications are contained in projects. I ended up setting up two different projects "site" for all the applications that would be normal public facing websites and "tools" for things like analytics.

To handle deploys, Coolify creates a GitHub app that you install on your account and then you give it read permissions on the repos you want to deploy from. This works with both public and private repos. Whenever I push to the `main` branch of the sites repo, Coolify gets a webhook and deploys.

All of the sites I was trying to move over were pretty simple Sinatra sites and after a little bit of wresting with the configs (an a lot of asking ChatGPT questions), I got a pretty good pattern down for all the sites I wanted to deploy:
- create an application that pulls from my GitHub app as a source and launches from a simple Dockerfle
- once the site is deployed, Coolify provides a temporary url to test it out at
- if everything looks good, just change the A record of the domain over to my Digital Ocean droplet's IP
- add the domain name to the Coolfiy application's config (Coolify handles getting the https certificate!)

I wanted to keep using Umami for site tracking, but just run my own instance, which ended up being pretty easy.  Coolify lets you create a new application from a public git repo (`https://github.com/umami-software/umami` in this case) and sets up the app from that. Coolify also has a simple flow for setting up a new database, so spinning up a Postgres instance for Umami was pretty easy. After getting that set up I moved all my sites over to my own instance of Umami, free of site and data retention limits!

One other thing I wanted now that I was self hosting was a little sftp server where I could upload files and have a publicly accessible url for them. To do this I set up an sftp server and then a standalone Nginx server, both pointed as the same persistent storage. Now I don't need to rely on a 3rd party service if I just want to share a [small file](https://stuff.toomuchcoffee.dev/dave_sketchy_100.png)! Not necessary but I did it because it's my server and I can!

Now I'm happy to say I'm self-hosting the sites I run:
- [dinosaurseateverybody.com](https://dinosaurseateverybody.com/) (the site you're looking at right now!)
- [dontbreakprod.com](https://dontbreakprod.com/)
- [postwave.blog](https://postwave.blog/)
- [evilbrain.band](https://evilbrain.band/)
- and a few small personal projects and the analytics for those sites

I'm not really a big fan of doing dev ops stuff. I have a limited amount of time to spend on personal projects and I'd rather spend that time building and not messing with servers. But there's something pretty satisfying about hosting your own sites. For me, Coolify was a pretty good paved path to get things up and running with a nice UI.


