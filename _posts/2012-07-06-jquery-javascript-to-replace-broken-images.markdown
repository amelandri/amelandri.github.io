---
layout: post
title: "jQuery/Javascript to replace broken images"
date: 2012-07-06 23:22
description: jQuery Javascript to replace broken images
category: Tech
tags: 
- Javascript
- Linklog
external-url: http://stackoverflow.com/questions/92720/jquery-javascript-to-replace-broken-images
---
A nice [StackOverflow] thread about using Javascript to manage missing images in web pages.  
Those are my favourites tecniques:

Simple Javacript function to be invoked on the img <code>onError</code> event

{% highlight javascript%}
function ImgError(source){
    source.src = "/images/noimage.gif";
    source.onerror = "";
    return true;
}
{% endhighlight %}

One line jQuery code to get the same result

{% highlight javascript%}
$('img').one('error', function() { this.src = 'broken.gif'; });
{% endhighlight %}

[StackOverflow]: http://stackoverflow.com/ 