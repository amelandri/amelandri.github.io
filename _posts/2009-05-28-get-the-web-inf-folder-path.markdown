---
date: '2009-05-28 09:15:00'
layout: post
title: Get the WEB-INF folder path
description: This is a simple example on how to get the WEB-INF directory path in a J2EE web application
tags: [Java]
Category: Tech
---

This is a simple example on how to get the WEB-INF directory path in a J2EE web application.

{% highlight java %}
public class MyClassName {

  private static final String WEBINF = "WEB-INF";

  public String getWebInfPath(){

    String filePath = "";

    URL url = MyClassName.class.getResource("MyClassName.class");

    String className = url.getFile();

    filePath = className.substring(0,className.indexOf(WEBINF) + WEBINF.length());

    return filePath;

  }
}
{% endhighlight %}