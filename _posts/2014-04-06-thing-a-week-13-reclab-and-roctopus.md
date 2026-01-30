---
title: Thing A Week 13 - RecLab and Rocktopus
date: 2014-04-06
tags: thingaweek, python, reclab
---

<img src="../blog_media/reclab2.png" class="inline_right" />
This week was another mainly RecLab week. Actually I didn't get much done on the RecLab Rails site outside of updating the look and feel with the new logo we've settled on (shown here...). I spent most of my time on our audio processing API, Rocktopus.

The Rocktopus work has been going well. It's nice to get back into writing some Python again and I've been enjoying working with Flask. One of my favorite recent additions is the `require_auth` decorator. Python decorators are pretty awesome and make it really simple to roll some common functionality into several methods.

This allows me to write Flask endpoints like this:

{% highlight python %}
@app.route('/path_name', methods=['POST'])
@require_auth
def path_method():
  # do a bunch of stuff for this endpoint
  # but make sure the POST body contains the proper authentication
{% endhighlight %}

The decorator itself is pretty simple and works something like this:

{% highlight python %}
def require_auth(f):
    @wraps(f)
    def wrapped(*args, **kwargs):
        data = request.get_json(force=True)
        if not validate_auth(data):
            return response_arm.auth_fail() # return 401

        return f(*args, **kwargs)
    return wrapped
{% endhighlight %}

Rocktopus is really coming along nicely and I'm really close to getting it hooked up to the Rails site soon.

This week I start my drawing classes. I haven't had any formal art training since grade school and it seemed time to learn a bit more about drawing, given my interest in comics, so I signed up for a Drawing 101 course at a local art studio. Hopefully I'll have some cool work from the class over the next few weeks to show off in these posts.