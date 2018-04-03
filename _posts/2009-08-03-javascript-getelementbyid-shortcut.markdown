---
author: amelandri
date: '2009-08-03 23:28:41'
layout: post
title: Javascript getElementById() shortcut
tags: Javascript
Category: Tech
---

Do you love the wonderful javascript dollar shortcut `$('myId')` but cannot use [jQuery][1] or [Prototype][2]? Don't worry, you can define your custom shortcut for the too long `document.getElementById()` function:


{% highlight javascript %}
function $(id) {
	return document.getElementById(id);
}
{% endhighlight %}

Now you can sobstitute this:

{% highlight javascript %}
var divContent = document.getElementById('myId').innerHTML;
{% endhighlight %}

with this:

{% highlight javascript %}
var divContent = $('myId').innerHTML;
{% endhighlight %}

Obviously you don't get all the bells and whistles that you would get using jQuery, but it's a start.

[1]: http://www.jquery.com
[2]: http://www.prototypejs.com