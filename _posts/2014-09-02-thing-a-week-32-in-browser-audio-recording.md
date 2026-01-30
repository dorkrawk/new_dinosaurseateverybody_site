---
title: Thing A Week 32 - In Browser Audio Recording
date: 2014-09-02
tags: thingaweek, reclab, html5
---

This week my major work was around building an in-browser audio recording system. I've been reading about using new HTML5 APIs to get access to the user's mic (and camera) for a while and I was finally able to sit down and start building something out. Because I feel the need to name everything I build, I had to name this as well. None of the bands I was in ever really practiced or recorded in a garage, they mostly worked out of basements. As a bit of a nod to (and departure from) Garageband, I decided to just call my recording stuff **Basement**.

The core technology for this whole process is [getUserMedia()](https://developer.mozilla.org/en-US/docs/NavigatorUserMedia.getUserMedia). This is what prompts the user to allow the page to access the mic (or camera or whatever) and then handle a `LocalMediaStream` object. From there you can work with whatever is being picked up by the mic.

Outputing the audio in real time was very easy (hey I built a monitor!) and after doing a bit of research I found a fantastic library to help with the recording aspect of this project: [Recorderjs](https://github.com/mattdiamond/Recorderjs). It provides a nice `Recorder` object to work with and, best of all, it's a VERY small, easy to understand library so I can go through every line of code and understand exactly what is being done. This is very important because all of this in-browser media work is very new and deep tutorials are rare. Plus I'm going to need to do a few things that haven't been done perfectly yet.

Right now I'm working on taking the recorded audio, which exists as a Blob tied to the page it was created on, and sending it back to the server to be uploaded in a way that works nicely with our existing [Paperclip](https://github.com/thoughtbot/paperclip) system. I'm really digging into some of the new HTML5 APIs for all this work and it's been really interesting.

The in-browser recording is the last new major feature we need to build before polishing up the [RecLaboratory](http://www.reclaboratory.com) site (which I updated this week, too!) for a very early, very small beta. I'm really excited to get people using this tool soon!