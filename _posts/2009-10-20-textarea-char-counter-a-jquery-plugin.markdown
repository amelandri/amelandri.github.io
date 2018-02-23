---
author: amelandri
date: '2009-10-20 18:08:34'
layout: post
title: Textarea char counter, a jQuery plugin
tags:
- Tech
- Javascript
---

Some weeks ago I received a customer request to add a character counter to a textarea field and I made it using "classic" Javascript. Now that I'm learning [jQuery][1] and have some spare time, I tryed to transform my custom function to a jQuery plugin.

This is my first attempt to build a jQuery plugin and maybe there's already another plugin that does the same thing but it have been a really nice exercise.

This plugin will give you the method <code>setCounter([maxLength])</code>. If you call it on a textarea field you will get a counter that gets updated every time the user write a character.

The <code>maxLength</code> parameter is not mandatory so if it's undefined you will get a simple character counter like this:

{% highlight html %}
<div id="textareaId_counter">
  <span class="length">27</span>
</div>
{% endhighlight %}

while if you pass an integer to the method the user won't be able to write a number of character greater than <code>maxLength</code> and you will get a counter like this:

{% highlight html %}
<div id="textareaId_counter">
  <span class="length">27</span>
  <span class="sep">/</span>
  <span class="maxLength">500</span>
</div>
{% endhighlight %}

This is the code. Save it in a text file named something like <code>jquery.textareaCharacterCounter.js</code> and include it in your page:

{% highlight javascript %}
jQuery.fn.setCounter = function(maxLength){
 
  return this.each(function(){
 
    var jqthis = jQuery(this);
 
    if (jqthis.is('textarea')){
 
      var counterId = jqthis.attr('id') + "_counter";
 
      var htmlCounter = '<div id="' + counterId + '">';
      htmlCounter += '<span class="length">' + jqthis.val().length + '</span>';
 
      if (maxLength){
        htmlCounter += '<span class="sep">/</span>';
        htmlCounter += '<span class="maxLength">' + maxLength + '</span>';
      }
 
      htmlCounter += '</div>';
 
      jqthis.after(htmlCounter);
 
      jQuery('#'+counterId).width(jqthis.width()).css({
        'text-align':'right',
        'margin-top':'10px'
      });
 
      jqthis.bind("keyup",function(){
 
        var content = jqthis.val();
 
        if (maxLength && content.length > maxLength){
          content = content.substring(0,maxLength)
          jqthis.val( content );
        }
 
        jQuery('#' + counterId + " > span.length").text(content.length);        
 
      });
 
    } else {
      alert("Not applicable to element: " + jqthis);
    }
  });
}
{% endhighlight %}

## How to use it



{% highlight javascript %}
// Add a simple counter
$('#textarea1').setCounter();

// Add a counter and set maximum length to 500 characters
$('#textarea2').setCounter(500);
{% endhighlight %}

[1]: http://www.jquery.com