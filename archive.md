---
layout: default
title: Archive
class: archive
---

# Archive

## Posts Archive

{% assign posts = site.posts |  where_exp:"post", "post.category != microblog" %}

<ul class="archivelist">
  {% for post in posts %}
   <li><a href="{{ post.url }}">{{ post.title }}</a><span class="archivedate">{{ post.date | date: "%-d %B %Y"}}</span></li>
  {% endfor %}
</ul>

## Microblog Archive

{% assign posts = site.posts |  where_exp:"post", "post.category == microblog"%}

{% for post in posts %}

  <article class="post {% for category in post.categories %} {{ category }}{% endfor %}">
    <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date_to_string }}</time>
    {{ post.content }}
  </article>

{% endfor %}
