---
layout: post
title: Thing A Week 10 - RecLab Site
date: 2014-03-17
categories: thingaweek reclab
published: true
---

Once again I feel like I'm stretching the rules of A Thing a Week (which is ok because I sort of just made them up). This week I focused on starting the website for a new larger project I've started working on with a friend. We're trying to build a good way for musicians to collaborate online. There are a few things out there trying to address something similar to this, but none of them seem to have serious traction and it looks like there's a lot of room for refinement.

<img src="../blog_media/reclab1.png" class="inline_right" />
This week we did a lot of planning and architecture for the project and I started building the Rails application for the site. This is my first non-trivial Rails 4 project and it's been interesting to see some of the little differences. The biggest one I've come across so far is the removal of `attr_accessible` and moving that functionality into the controller. I need to learn a bit more about how that totally works but so far I've been able to use a lot of what I learned building Rails 3.2 stuff.

I've been really impressed with the Rails 4 gem compatibility, as well. Major stuff I like to use such as [Devise](https://github.com/plataformatec/devise), [Active Admin](https://github.com/gregbell/active_admin), and [Paperclip](https://github.com/thoughtbot/paperclip) are all working just fine. Python could [learn a lot](http://python3wos.appspot.com/) here!

This week I was able to get the basic site together, make it look nice enough to work in for a while, build basic user/user profile and login functionality, and start building out some of the core business logic for working with recorded tracks. I also started putting together some survey questions so, musician friends, expect to be bugged to be asked questions soon. It might be a little while before we have an actual site for people to try but I'm always interested in talking with people about the idea.

Now I need to balance working on this with doing a couple other single-week projects, especially the stuff that is needed for the wedding.