---
author: amelandri
date: '2009-06-22 13:45:52'
layout: post
title: Compact font styles
description: How to compact CSS font styles definitions
tags: [Tech,CSS]
---

This is a simple tip that can help you reduce your style sheet size. Take a look at this CSS portion:

{% highlight css %}
.myClass{
	font-family: Arial, Verdana, Helvetica, sans-serif;
	font-size: 1.1em;
	font-weight: bold;
	font-style: italic;
	line-height: 1.5em;
	font-variant: uppercase;
}
{% endhighlight %}


All these properties can be condensed into a one row expression using this syntax:


{% highlight css %}
font: fontSize/lineHeight weight style variant family;
{% endhighlight %}


See the example below:


{% highlight css %}
.myClass{
	font: 1.1em/1.5em bold italic uppercase Arial,Verdana,Helvetica,sans-serif;
}
{% endhighlight %}


Just remember that this syntax will only function if you specify both <code>font-size</code> and <code>font-family</code>.