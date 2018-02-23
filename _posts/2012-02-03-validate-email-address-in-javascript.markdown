---
layout: post
title: "Validate email address in Javascript"
date: 2012-02-03 14:54
comments: true
description: Javascript email validation. Client side or server side?
keywords: javascript, email, validation, regular, expression, regexp
tags: 
- Tech
- Javascript
- Linklog
external-url: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
---

Every time I need to build a registration form I face the problem of email validation: should it be done client side, and how?  
This [StackOverflow] tread is the best resource on the argument I found whith a lot of examples, useful links and thoughts on why you shouldn't validate email addresses client side.

Finally, even in discouraged, I used this function and I'm pretty satisfied.

{% highlight  javascript %}
function validateEmail(email){
	
	var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)
	             |(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]
	             {1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regExp.test(email);
}
{% endhighlight %}

[StackOverflow]: http://stackoverflow.com/ (StackOverflow)