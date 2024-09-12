---
layout: post
title: Homeboard
date: 2024-09-11
categories: 
published: true
---

I always forget to move my car on street cleaning day.

On the 1st Wednesday of the month I was always scrambling to move my street-parked car in the hopes of avoiding a ticket. Often too late. So I wanted something I looked at every day to remind me of things like this, just a little dashboard in my kitchen to let me know what was going on during the day.

While this isn't a particularly novel idea and I'm sure there are a few out of the box products that will do this, I just though it would be fun to build something custom for what I wanted. It ended up being a small Sinatra app and I decided to play around with [htmx](https://htmx.org/) for most of the dynamic frontend stuff. The basic features I wanted were:

- a big clock (date and time)
- local weather
- a QR code to log on to our local wifi network
- events for today and tomorrow:
  - city events (street cleaning, garbage day, snow plowing, etc.)
  - birthdays (I don't look at Facebook enough anymore for it to be a reliable reminder)
  - our shared Google calendar

This is what it ended up looking like:

<img src="../blog_media/homeboard2.jpg" />

Some of these were pretty simple. The clock is just some plain old Javascript running client side. Birthdays come from a big hardcoded Hash that just looks up date. The city events came from some hardcoded logic based on the date, things like:

{% highlight ruby %}
# first Wednesday of the month
applicable = STREET_CLEANING_MONTH_RANGE.include?(timestamp.month) 
&& (timestamp.wednesday? || timestamp.tuesday?) && timestamp.mday <= 7
{% endhighlight %}

The QR code just seemed like a neat little feature. You can create QR codes that when scanned will allow you to join a local wifi network without manually entering the password. I just generated my code from something like [this site](https://www.qr-code-generator.com/solutions/wifi-qr-code/).

For local weather I ended up making use of the [OpenWeather API](https://openweathermap.org/api). It refreshes infrequently enough that I can use it for free.

The Google Calendar integration gave me the most trouble. For some reason it was WAY more of a pain in the ass to authenticate with Google and use the provided library to pull a list of calendar events than I figured it would be. It involved a lot of creating and refreshing access tokens and is still a little janky (but it work!).

While I started doing the dynamic front end stuff with vanilla Javascript I ended up rewriting almost everything in Htmx, mainly because it seemed interesting and I wanted to play around with it. For the VERY simple stuff I was doing (mainly periodically refreshing parts of the dashboard to get updated content) it was very clean.

For example, I want my weather to reload every hour so on the main dashboard page (the page that stays up all the time) there's a div that looks like this:

{% highlight html %}
<div class="content_box weather_box" hx-get="../api/weather_htmx" 
  hx-trigger="load, every 3600s">
</div>
{% endhighlight %}

It just pulls the contents of `/api/weather_htmx` (which is just some html, rendered with the updated weather info from an API call to OpenWeather) and puts it inside that div. Magic!

I bought a cheap refurbished tablet to use as a display and it's been a great addition to our kitchen!

<img src="../blog_media/homeboard1.jpg" />

