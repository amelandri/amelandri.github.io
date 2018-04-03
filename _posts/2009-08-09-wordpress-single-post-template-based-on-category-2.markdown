---
author: amelandri
date: '2009-08-09 11:37:37'
layout: post
title: 'Single post template based on category #2'
tags: [PHP, WordPress]
category: Tech
---

In my [previous post][1] I talked about a [Lorelle][2] blog [post][3] on creating single post templates for different tags.

After using the code snippets "as is" I tryed to build a more flexible solution so I've come up with this little function:

{% highlight php %}
function getSingleTemplate(){
 
  $category = get_the_category();
  $templateName = TEMPLATEPATH . '/single_' . $category[0]-&gt;category_nicename .'.php';
 
  if (!file_exists($templateName)){
    $templateName = TEMPLATEPATH . '/single_default.php';
  }
  return $templateName;
}
{% endhighlight %}

This function must be called inside the _single.php_ template: it gets the first post's category, searches for a template named like <code>single__post_first_category_slug_.php</code> and returns its path; if the file doesn't exists it will return the _single_default.php_ template path.

[1]: http://alessandro.melandri.net/2009/08/07/wordpress-single-post-template-based-on-category/
[2]: http://lorelle.wordpress.com/
[3]: http://lorelle.wordpress.com/2005/09/22/creating-multiple-single-posts-for-different-tags/