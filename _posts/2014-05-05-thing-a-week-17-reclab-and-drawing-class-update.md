---
title: Thing A Week 17 - RecLab and Drawing Class Update
date: 2014-05-05
tags: thingaweek, reclab, art
---

This week, while I was busy with the first week of my new job, I did manage to get some RecLab work done. Also, I'm a few weeks into my drawing class, so I wanted to post an update from that.

While not the most productive RecLab week, I did finish the basic comment functionality for Users, Songs, and Tracks. I also learned about `seed.rb` and wrote some seed code for the Instruments data. The trick there was that I wanted to be able to run `rake db:seed` multiple times, so I needed seed code that would let me update or create records. I ended up with a nice solution that lets me break the instruments down into separate arrays by family and then loop through everything to create or update:

```ruby
instruments = [[strings, "strings"], [woodwinds, "woodwinds"], [brass, "brass"], [percussion, "percussion"], [keys, "keys"], [other, "other"]]

instruments.each do |f|
  f[0].each do |i|
    instr = Instrument.where(name: i).first_or_initialize
    instr.family = f[1]
    instr.save!
  end
end
```

Now I'll need to use a tagging system to attach both Instruments and general Tags to objects. I'm leaning toward [As Taggable On](https://github.com/mbleigh/acts-as-taggable-on), which apparently was written by an old childhood friend of mine. Awesome!

<img src="../blog_media/drawing02.jpg" class="inline_right" />
The art class is going well. Value and shading are still pretty tough for me because I've spent the last few years just doing line drawings for comics. I also have a tendency to draw pretty lightly (which is probably also a result of erasing pencil lines for comics). I don't think I'll leave this class a brilliant artist, but but I'm certainly learning things and getting better.