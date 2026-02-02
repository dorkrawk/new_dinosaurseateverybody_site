---
title: Darwinning Updates
date: 2015-09-27
tags: ruby, darwinning
---

One of the [first posts](http://dinosaurseateverybody.com/blog/darwinning-my-ruby-gem-for-genetic-algorithms) I wrote on the new version of this blog was about my genetic algorithm Ruby gem, **Darwinning**. I actually started building the library back in December of 2012 when I was first learning Ruby and it's gone through several updates and periods of inactivity. Usually I'll just add some tests or make a small update when I have some free time. It's been a pretty casual project. I just didn't think that there was that much of a need for a Ruby GA library, I just thought it would be fun to make.

Recently I've seen a steady stream of people starring and forking the [Darwinning repo](https://github.com/dorkrawk/darwinning) on Github and I've received some really thoughtful and helpful pull requests from people, so I wanted to give the library a bit more attention. I had some free time this weekend and used it to finish off a major feature that I had been working on and finally published the [0.1.0 version of the gem](https://rubygems.org/gems/darwinning)!

The major feature I added was the ability to use Darwinning in existing Ruby models via `include`. This lets you utilize the library in projects that might not be specifically about genetic algorithms.

Here's my dumb, contrived example:

```ruby
require 'darwinning'

class Triple
  include Darwinning

  GENE_RANGES = {
    first_number: (0..100),
    second_number: (0..100),
    third_number: (0..100)
  }

  attr_accessor :first_number, :second_number, :third_number

  def fitness
    # Try to get the sum of the 3 digits to add up to 100
    (first_number + second_number + third_number - 100).abs
  end
end
```

Then you can use some nice built in methods to generate a population of these objects and evolve them towards a fitness goal:

```ruby
if Triple.is_evolveable?
  triple_pop = Triple.build_population(0, 10, 100)
  triple_pop.evolve! # evolve until fitness goal is or generations limit is met

  pp "Best member: #{triple_pop.best_member}"
end
```

I've been having fun working on this project and it's really cool to see some other people contribute to the project. If you want to play around with the library or have an interest in [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm) just `gem install darwinning` or check out the [Darwinning Github repo](https://github.com/dorkrawk/darwinning). There are always more updates to do, but it felt good to make some progress on this project.
