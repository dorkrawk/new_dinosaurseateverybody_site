---
layout: post
title: Building A Programming Language In Crystal
date: 2025-07-30
categories: 
published: true
---

After doing a rotation on GitHub's "Ruby Architecture" team a few years ago and learning more about how programming languages really work (and getting a [few](https://github.com/ruby/ruby/pull/6078) [commits](https://github.com/ruby/ruby/pull/6079) into the Ruby language myself) I've been trying to learn more about building languages. For the last year or so I've been very slowly working my way through the first half of [Crafting Interpreters](https://craftinginterpreters.com/) by Robert Nystrom, which has been a fantastic book on the topic. It starts by walking you step by step through the implementation of a language designed for the book called Lox. The book builds the language in Java, but I chose to implement it in [Crystal](https://crystal-lang.org/).

Why Crystal? I like it. It's syntax looks very Ruby-like but it has static (and sometimes explicit) typing. It's reasonably fast when compiled. Plus, by implementing all the examples in a different language it forced me to understand what I was doing enough to translate from Java to Crystal. I'm not the first person to implement a Lox interpreter in Crystal, but it is a less common project.

For a "toy" language built as a learning tool, Lox implements some nontrivial things. A simple "Hello world" looks as expected:

```
print "Hello world!";
```

It has loops! While loops and for loops (which are turned into while loops by the interpreter):

```
var k = 30;
while(k < 40) {
  print k;
  k = k + 1;
}

for(var j = 30; j < 40; j = j + 1) {
    print j;
}
```

And it has objects and inheritance!

```
class Animal {
  init(name) {
    this.name = name;
  }
}

class Cat < Animal {
  meow() {
    print "meow";
  }
}

var kitten = Cat("Mochi");
kitten.meow();
```

While this all feels like pretty standard stuff for any programming language you might use, it was really cool to build everything up from scratch. The parser was written from scratch in less than 500 lines of code, no using any big libraries like Bison or Yacc. The scanner handles a little over 40 tokens in less than 200 lines of code. It has a resolver to handle some scope ambiguities and static analysis. This is just been a really cool project. 

In addition to all the cool programming language stuff I learned working on this I also used this project as an excuse to develop in Neovim on the Ubuntu laptop I set up a while ago (using DHH's [Omakub](https://omakub.org/)).

Despite the code being a little messy in parts (sometimes I got impatient trying to handle Nils in Crystal) and containing some bugs, I'm sure, it's still really cool have this project in a "done" state. I might come back later and clean up the code or add some features (this implementation of Lox lacks a way to take user input...) but for now I'm going to move on to the next section of the book where I'll build Lox again, this time as a more optimized, compiled language implemented in C (I probably haven't touched C since college...).

If you're interested, check out my implementation of [crlox](https://github.com/dorkrawk/crlox).



