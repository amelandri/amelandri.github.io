---
layout: default
title: Archive
class: archive
---

# Archive

## Post Archive

{% assign posts = site.posts |  where_exp:"post", "post.category != microblog" %}

<ul>
  {% for post in posts %}
   <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%-d %B %Y"}} </li>
  {% endfor %}
</ul>


## Microblog Archive

{% assign posts = site.posts |  where_exp:"post", "post.category == microblog"%}
<ul>
  {% for post in posts %}
   <li><strong>{{ post.date | date: "%-d %B %Y" }}</strong>{{ post.content }}</li>
  {% endfor %}
</ul>