---
title: Bloomfilter RS
date: 2015-04-20
tags: rust, bloomfilter
---

I spend the vast majority of programming time working with Ruby these days. I've gotten to know it pretty well and it is honestly a joy to use, but I want to make sure that I don't just limit myself to a single language or even a single type of language (the occasional Python project doesn't quite count as adventurous). Out of curiosity and a desire to work with a more low level language I've started playing around with [Rust](http://www.rust-lang.org/).

Rust is a systems level language created by Mozilla that might be used in similar situations as C++. I haven't done anything this low level since I had to use C++ for a data structures class my sophmore year of college, which was a surprisingly long time ago.

I needed a small project to build if I was going to learn anything about the language so I decided to build a [Bloom filter](http://en.wikipedia.org/wiki/Bloom_filter). A Bloom filter is a probabilistic data structure that is designed to be really space efficient and allows you to determine if something is "probably in the set" or "definitely not in the set". For example, web browsers use Bloom filters to store lists of dangerous websites, which is why you sometime get a warning for an obviously safe site.

The end result of this little project was [Bloomfilter-RS](https://github.com/dorkrawk/bloomfilter-rs), a small Rust library that implements a Bloom filter. It can be used like this to create a Bloom filter with 100 buckets and 5 hash functions:

{% highlight rust %}
let mut bf = BloomFilter::new(100, 5);

bf.insert("hamster");
bf.insert("coffee");

bf.check("hamster");
// (probably) true

bf.check("oatmeal");
// false
{% endhighlight %}

It was pretty interesting working with a lower level language coming from Ruby. I had to think about passing pointers and dealing with a much more robust type system. Fortunately working with Scala in the past prepared me a bit for dealing with generics and default immutability, but it really felt MUCH slower than working with a high level language like Ruby (which I suppose should be obvious).

I don't really have a major project in mind that needs a language like Rust right now, but I'd like to keep tinkering around with it just to expose myself to other types of langues. It's also just fun to follow a language as it's being built (as of this post Rust is still a few weeks away from it's official 1.0 release and some of the API still isn't quite stable).

Feel free to dig through my [Bloomfilter-RS](https://github.com/dorkrawk/bloomfilter-rs) code and give me any feedback about style or a better way to use language features. It was certainly built as a learning experience.