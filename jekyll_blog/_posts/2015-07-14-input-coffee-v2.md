---
layout: post
title: Input Coffee (v2)
date: 2015-07-14
categories: code gtd
published: true
---

So back when I was working at Berkeley (and had more free time) I decided to formalize the tracking of some of my skill improvements. These were mainly things like drawing, playing guitar, playing piano, vocals, comptuer science theory, etc. I set up a small WordPress blog called **Input Coffee** and just made posts for every session in order to keep track of what I had been working on. I liked seeing all the posts every month and having a record of what I was doing, but a blog wasn't the perfect solution. I wanted better ways to add up time per week or month for each type of task.

I decided to start tracking this sort of thing again, partially in response to reading [Make It Stick](http://www.amazon.com/Make-It-Stick-Successful-Learning/dp/0674729013), and I wanted a simple way to track my practice sessions for things like guitar, chess, drawing, and other stuff I'm working on these days.

I started by just creating Google Docs for each session, which worked fine and helped me not avoid doing real practice by spending a bunch of time building a complex system to track my practice. But then I gave in and built a system to track my practice. Like the original WordPress blog, it's called [Input Coffee](https://github.com/dorkrawk/input-coffee).

This system is pretty simplistic, just a Sinatra app that reads some Markdown files and turns them into CoffeePost objects so I can examine them based on tags, subject, date, and a few other fields. The Markdown files use a format very similar to Jekyll's posts and I just parse out meta data from the little header. 
Here's an example post:

<pre>
---
date: 2015-07-14
subject: guitar
tags: acoustic electric
hours: 1.0
---

Spent most of this session doing acoustic stuff...
</pre>

I don't even have this hosted anywhere, I just run a local server when I want to see stats about my practice. Right now I just show total posts/hours (since May 25th, 2015), some breakdowns by subject (guitar, vocals, chess, drawing, etc.), and some numbers for the current and past week

Obviously, I'd like build out some more metrics and it might be fun to make a nicer interface, but for now this works for me and I've avoided overly-over engineering the solution.  Being able to track this sort of stuff really helps keep me in good habits.