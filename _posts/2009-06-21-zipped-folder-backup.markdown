---
author: amelandri
date: '2009-06-21 11:48:49'
layout: post
description: A simple bash script that zips a folder and sets the archive name to the current date
title: Zipped folder backup
tags: [Linux]
category: Tech
---

A simple bash script that zips a folder and sets the archive name to the current date.

{% highlight bash %}
#!/bin/bash

# Archive name structure: ddMMYYYY_HHmmss.zip

archiveName=`date +%d%m%Y_%H%M%S`.zip

folderName=MyFolder

zip -r $archiveName $folderName
{% endhighlight %}

