---
title: Thing A Week 36 - Theremino
date: 2014-10-20
tags: thingaweek, music, arduino
---

<img src="../blog_media/theremino2.jpg" class="inline_right" />
This last week I built something cool that was actually in the spirit of the Thing a Week project!

Last Christmas my mom got me a distance sensor that could be easily used with an Arduio (which is a totally normal gift) and I finally got around to playing with it. I had originally wanted to start working on some sort of robot but first I wanted to just play around with it and see what I could do.

After running through a few tutorials I decided it would be fun to make some sort of crude musical instrument using the distance sensor. I learned a bit about how to hook up a tiny speaker and then used the value of the distance sensor specify which tones to generate.

<img src="../blog_media/theremino1.jpg" class="inline_left" />
This created something that just constantly made steady sine wave sounding noise. I wanted to add the ability to do start and stop notes so I attached a small pressure sensor to the project. Then the tone would only play if you were pressing down on that sensor.

I also added a small LED light that turns on when a note is being played because lights are neat.

Because you control the instrument by moving one hand around, like you would on a theremin I decided to call my new creation a **theremino** (like theremin + Arduino... get it?). Unlike a theremin, the theremino plays discrete notes from a regular chromatic scale, changing notes every 4cm you move your hand from the sensor. It has a range from B2 to C6.

As you can see from the video below this instrument is actually kind of hard to play. It's tough to be accurate with your notes when moving around in mid air.

It had been a while since I had tinkered around with an Arduino, so this what a really fun little project. For those interested, I have the the Arduino code for this project available [here](https://gist.github.com/dorkrawk/d871b15ea69638be710f) and a wiring diagram for the Ardunio and breadboard [here](../blog_media/theremino_bb.png).
