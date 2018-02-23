---
layout: post
title: Acrobat Forms - Execute javascript on document open
published: True
tags: [Acrobat, Form, Javascript]
---

This is a simple trick to run a javascript code while opening an Acrobat Form. I use it very often in server side generated forms to change the _required_ flag based on fields value.

You need to add a new document level javascript with this code.

{% highlight javascript %}
var opened = false;

function onOpen() {

    if(!opened) {

        // Code to be executed on document open

        opened = true;
    }

}

onOpen();
{% endhighlight %}

You can add a document level javascript from _Advanced > Document Processing > Document JavaScripts_ in Acrobat 9 and from _Tools > JavaScript > Document JavaScript_ in Acrobat 10
