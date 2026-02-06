---
title: Powered By Postwave
date: 2026-02-06 14:58
tags:
---

**This blog is now using my home-grown blogging library, [Postwave](https://postwave.blog/)!**

I [wrote about Postwave](../blog/postwave) a little while ago, but at the time this site was still using the hacked together Jekyll-based solution that I had been using since around [2013](../blog/sinatra-jekyll-prose). It seemed a bit silly to build a blogging library but not use it for my own blog, but I was a little daunted by the task of migrating all my posts over in a way that didn't break everything.  I had hit the point where I was writing posts for this site and wished I could be using Postwave so when I had a little bit of free time one night last week so I decided to give it a shot and it turned out to be...

Not that bad.

Postwave posts look very similar to Jekyll posts. They are Markdown files with a little bit of header information:

```markdown
---
title: Powered By Postwave
date: 2026-02-06 14:58
tags:
---

**This blog is now using my home-grown blogging library, [Postwave](https://postwave.blog/)!**
```

With a little help from Copilot, I wrote a basic script to migrate all the Jekyll posts over to the Postwave directories and make any formatting changes needed. I'm planning to use this script as the basis for a future `postwave migrate` command in the Postwave library.

After this I just added some of the basic post display and archive code needed to make use of all those new Postwave-shaped Markdown files. Much of this code was lifted from the [Postwave example blog](https://github.com/dorkrawk/postwave-site).

The whole process ended up being pretty easy and I was able to migrate things without really changing any of the urls for old posts. It's very likely (and intentional) that nobody else will notice the change, but I know and that's what matters. It's a really good feeling to use a tool that you made for yourself and works EXACTLY the way you want it to.
