---
title: Darwinning, My Ruby Gem for Genetic Algorithms
date: 2013-11-11
tags: ruby, tech
---

Well, this writeup is a bit late. I wanted to write about Darwinning right after I launched it but here we are.

__So, what is Darwinning?__

Darwinning is a Ruby Gem built to help people write [genetic algorithms](http://en.wikipedia.org/wiki/Genetic_algorithm).  I got into genetic algorithms while taking a machine learning course during my masters and I've had a casual interest in them ever since. I even wrote [a comic](http://mountsaintawesome.com/comic.php?id=30) about them! I have also been enjoying Ruby lately, so I wanted to learn how to build a Gem. This project was started to satisfy both of those interests.

I also played with the Ruby unit testing framework, RSpec, for the first time with this project.  The test coverage for Darwinning isn't great, but at least it's a start.

__So, how do I use Darwinning?__

Darwinning is totally available via [RubyGems](http://rubygems.org/gems/darwinning) so you can install it the same way you would install almost any Gem:

```bash
gem install darwinning
```

Once it's installed you can make use of the `Population`, `Organism`, and `Gene` classes to build your own genetic algorithm based programs.

Here's an dumb example of how you might use Darwinning to solve a pointless problem:

Let's say for some reason you need a set of 3 number that add up to 15.  This is a strange problem to have, but let's solve it anyway.

```ruby
class Triple < Darwinning::Organism

  @name = "Triple"
  @genes = [
      Darwinning::Gene.new("first digit", (0..9)),
      Darwinning::Gene.new("second digit", (0..9)),
      Darwinning::Gene.new("third digit", (0..9))
    ]

  def fitness
    # Try to get the sum of the 3 digits to add up to 15
    (genotypes.inject{ |sum, x| sum + x } - 15).abs
  end
end 

p = Darwinning::Population.new(Triple, 10, 0, 0.1, 100)
p.evolve!

p.best_member.nice_print # prints the member representing the solution
```

This code declares an organism class that inherits from Darwinning's Organism parent class to represent solutions.  Then we create a population of these solution organisms and evolve the population until a solution meets the fitness threshold or the generation limit is met.

__So, what else can I do with it?__

If any of this sounds remotely interesting to you, please check out the project on [Github](https://github.com/dorkrawk/darwinning). I'm always happy to take good pull requests if other people want to contribute. I haven't been very active lately because I've been spending a lot of time on [this website](http://dinosaurseateverybody.com) and my [wedding website](http://daveandeileen.com), but I do keep an eye on the project.