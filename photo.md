---
layout: page
title: Photography
class: photo
---

{% for post in site.categories.photo %}
  <article class="post {% for category in post.categories %} {{ category }}{% endfor %}">
    {{ post.content }}
  </article>
{% endfor %}
