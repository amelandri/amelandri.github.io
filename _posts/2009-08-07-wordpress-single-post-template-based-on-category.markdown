---
author: amelandri
date: '2009-08-07 17:28:06'
layout: post
title: 'Single post template based on category'
tags:
- Tech
- PHP
- WordPress
---

Today, while trying to customize the _single.php_ template for a specific category I found a pretty old article written by [Lorelle][1]:

[**Creating Multiple Single Posts for Different tags**][2].

Her tip is really simple and really useful: just rename your <code>single.php</code> to <code>single1.php</code> and create a new <code>single2.php</code> with your category specific layout; after that, create a new <code>single.php</code> file with this code:

{% highlight php %}
<?php
$post = $wp_query->post;
if ( in_category('1') ) {
  include(TEMPLATEPATH . '/single2.php');
} else {
  include(TEMPLATEPATH . '/single1.php');
}
?>
{% endhighlight %}

So, if the post is in category 1 WordPress will use the <code>single2.php</code> otherwise it will use <code>single1.php</code>.

## Updated

I wrote a more flexible solution: [check it out][3].

[1]: http://lorelle.wordpress.com
[2]: http://lorelle.wordpress.com/2005/09/22/creating-multiple-single-posts-for-different-tags/
[3]: http://alessandro.melandri.net/2009/08/09/wordpress-single-post-template-based-on-category-2/