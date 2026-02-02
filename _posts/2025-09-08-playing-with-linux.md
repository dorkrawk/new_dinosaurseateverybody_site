---
title: Playing With Linux
date: 2025-09-08
tags: 
---

This year I've been thinking more about making computers/the internet [fun again](../blog/pragmatic-divesting-from-enshitifcation). Part of this was trying to use more technology without an "agenda". And that has led me into the arms of Linux.

Last year I picked up a [Framework 13](https://frame.work/laptop13) laptop so I'd have a Windows machine to play Minecraft on with my kid. It's been useful to have around, but Windows 11 was just glaringly aggressive with how much it wanted me to sign up for various Microsoft services. I probably hadn't used a Windows computer for anything non-trivial since Windows 7 and the change was striking.

I got the urge to try dual booting Linux on my Framework so I installed Ubuntu and used DHH's [Omakub](https://omakub.org/) to get it set up quickly. It was kind of fun and I've been using as my primary dev machine for working on [Lox](../blog/building-a-programming-language-in-crystal). Having a project has been helpful for just exploring the system a bit and I found myself switching back and forth between Windows and Ubuntu pretty often on that computer. Omakub really did a good job of making things look nice and providing some good defaults so I didn't spend a ton of time getting things set up and usable. I dug in to using Neovim as my editor and Alacritty as my terminal.

**It's nice to have things both configured AND configurable.**

When I saw DHH posting about [Omarchy](https://omarchy.org/) I was interested. Arch always seemed a little intimidating and I wanted to spend my time using my computer, not fixing/configuring it so having some good defaults and a little hand-holding on the install seemed nice. Due to some disk encryption requirements you're not able to (easily) dual boot Omarchy right now, so I didn't think I could replace my Ubuntu setup but my curiosity got the best of me. I found an old 2012 MacBook Air, bought a USB-Ethernet adapter (so I could run the install without wifi working), and put the ISO on a thumb drive.

The installation was surprisingly easy. I expected to run into some wifi issues but everything worked out of the box. Having played around with the Omakub setup on my Ubuntu install, I felt pretty comfortable with a lot of the default applications like neovim and Alacritty as well as some shortcuts like Super-space for the app launcher so that helped a lot. 

[Hyprland](https://hypr.land/) felt like more of an adjustment. This was my first time really using a tiling window manager. I use Rectangle on my Macs for some basic window resizing and positioning but this was the first time I'd really working in a purely tiled desktop. I tend to have a chaotic pile of windows on my screen most of the time so in some ways using a tiled window manager helped me avoid that because if I kept too many things open, the new windows were uselessly small. If I needed more space I used additional desktops or even just closed windows. 

The focus on using built in (and configurable) keyboard shortcuts for launching common programs really helped (Super-Return for a terminal, Super-B for a browser, etc.). It made it feel more natural to quickly open things when I needed them and close them when I was done. I also really like the use of "web app windows", these are basically keyboard shortcuts to open up web apps (like email, Twitter, etc.) in chromeless browser windows via keyboard shortcut. Super-C to open a quick Google Calendar window is really nice and I've created and customized a few new shortcuts for myself.

So what about really hacking around with Arch? Well, I haven't done a bunch of power user stuff yet and honestly I don't plan on spending a lot of time futzing around with things. I still want to spend most of my time using my computer, not fixing/configuring it. I did put in a little time getting the display to rescale nicely when I plugged into a large monitor and closed the laptop to work in clamshell mode. It was fun to see how much control I had over things, if I wanted it. I might also look into some fun widgets that work with Waybar and Hyprland to display some useful into if I have the time and inclination.

**It's nice to have things both configured and REALLY configurable.**

So, am I going to cast off the oppressive shackles of MacOS and Windows so I can live exclusively in the land of the Free and Open Source? Eh, probably not. There are a few reasons I'll keep using my Mac and have at least a Windows partition somewhere:

- **My M1 MacBook Pro is one of the nicest feeling laptops I've ever used.** It's fast, it feels solid, and everything just works.
- **Logic** I use Logic for all my music recording. A lot of the people I make music with use Logic. I'm not going to switch.
- **I use iMessage on a laptop a lot.** I don't like typing long text messages on my phone, so I often switch to my laptop to send non-trivial things.
- **Occasionally I'll find a game I want to play that's only on Windows (and/or Mac)**. I'm not a big gamer, and gaming on Linux seems to be getting better, but there are certainly some interesting things that come out that just don't work in Linux.
- **Sometimes I want things to just work.** Maybe that's a fingerprint reader or my Plex server, but I don't have as much time to fiddle with things anymore so there are many situations where I'm going to use the tools that get (and keep) me up and running with the least amount of effort.

That said, I do think I'll use this Omarchy set up a fair amount. I replaced the battery in my Omarchy computer and it's turned this 15 year old laptop into a very usable machine. I like that my computing environment doesn't feel like it has an "agenda". It's not trying to sell me on any services, just "here's an OS, try not to get yourself killed." It feels more like a powerful tool than a product, which is nice these days. Also, it's just fun to learn something different. 

I'm enjoying using Linux and that kinda matters.

<img src="../blog_media/omarchy-air.png" title="I use Arch, by the way." />
