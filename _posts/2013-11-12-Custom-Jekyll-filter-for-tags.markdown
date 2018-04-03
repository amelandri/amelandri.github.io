---
layout: post
title: Custom Jekyll filter for tags
description: A simple Jekyll filter that uses Bootstrap's label objects to display post tags
tags: Jekyll, Bootstrap
category: Tech
---

This is a simple [Jekyll] filter that I wrote in order to use Bootstrap's label objects to display post tags.  
It's based on the original <code>array\_to\_sentence\_string</code> filter, part of the Jekyll core.

Just put it in your *_plugins* folder and use it in your layout:

{% highlight ruby %}
module Jekyll
  module CustomTagFilter
    def tag_array(array)
      connector = ","
      case array.length
        when 0
          ""
        when 1
          "<span class=\"label label-default\">#{ array[0].to_s}</span>"
        else
          "<span class=\"label label-default\">#{array.join('</span> <span class="label label-default">')}</span>"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomTagFilter)
{% endhighlight %}

**Usage**

{% highlight html %}
<span class="posttags">{ { page.tags | tag_array } } </span>
{% endhighlight %}

**Result**

{% highlight ruby %}
Tags: {{ page.tags | tag_array }}
{% endhighlight %}

[Jekyll]: http://www.jekyllrb.com
