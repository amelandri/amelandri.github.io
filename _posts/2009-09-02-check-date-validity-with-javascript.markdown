---
author: amelandri
date: '2009-09-02 22:16:29'
layout: post
title: Check date validity with Javascript
tags: Javascript
category: Tech
---

A simple JavaScript function to check date validity

{% highlight javascript %}
function checkDateValidity(day, month, year){

  month = month - 1;
  var message = '';

  var date = new Date(year,month,day);

  if (year != date.getFullYear())
    message = 'Year not valid';

  if (month != date.getMonth())
    message = 'Month not valid';

  if (day != date.getDate())
    message = 'Day not valid';

  return message;
}
{% endhighlight %}