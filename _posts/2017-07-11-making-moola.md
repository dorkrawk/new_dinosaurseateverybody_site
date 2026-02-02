---
title: Making Moola
date: 2017-07-11
tags: crystal, programming
---

If one listens to enough Ruby related blogs and talks and podcasts they are likely to run in to [Crystal](https://crystal-lang.org/). Have you every thought, "I like Ruby, but I wish is were fast and compiled on LLVM"? Well, that's Crystal. It's a **fast language with Ruby inspired syntax**. If the performance benchmarks shown on the Crystal site are even remotely accurate, it's worth checking out.

I enjoy writing Ruby and I like things that are fast, so I've been trying it out. While it is still pre-1.0 it's been pretty nice to work with. And since it's a new language, there's an opportunity to write new libraries (known as "[Shards](http://crystalshards.xyz/)" in Crystal).

My first Crystal Shard has been a money handling library, inspired by [Ruby Money](https://github.com/RubyMoney/money), that I call [Moola](https://github.com/dorkrawk/moola). It gives uses the ability to define Money objects and do basic operations and conversions with them.  Here are a few examples:

```ruby
money = Moola.new(42_00) # creates a new Moola::Money object
money.format # "$42.00"
money.cents  # 4200
money.zero?  # false
money.to_f # 42.0

Moola::Money.new(5_00) == Moola::Money.new(5_00) # true
Moola::Money.new(5_00, "USD") == Moola::Money.new(5_00, "EUR") # false

Moola::Exchange.add_conversion(Moola::Currency.find("usd"), Moola::Currency.find("cad"), 1.3)
money = Moola.new(1_00, "USD")
money.convert_to(Moola::Currency.find("cad")) # Moola::Money(1_30, "cad")
```

I don't have much to say other than it seems like a great language if you like writing Ruby. For a newer language it's been a joy to work with and it's fun to build some basic libraries.

If you every find yourself writing Ruby and dealing with money, I encourage you to try out [Moola](https://github.com/dorkrawk/moola).
