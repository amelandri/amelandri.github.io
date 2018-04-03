---
author: amelandri
date: '2009-08-05 09:06:41'
layout: post
slug: add-a-category-filter-to-wordpress-search-form
status: publish
title: Add a category filter to WordPress search
tags: [WordPress, PHP]
Category: Tech
---

WordPress has a simple function to build a search form for your blog and in this tutorial I'll show you how to add a category filter to it.

{% highlight php %}
<?php get_search_form(); ?>
{% endhighlight %}

This function will look for a file called <code>searchform.php</code> inside your template folder: if it doesn't exist it will output the standard search form. So, if it isn't already in place, create your custom <code>searchform.php</code> and copy into it the default search form output. It should look similar to this:

{% highlight html %}
<form role="search" method="get" id="searchform" action="<?php bloginfo('siteurl'); ?>">
  <div>
    <label class="screen-reader-text" for="s">Search for:</label>
    <input type="text" value="" name="s" id="s" />
    <input type="submit" id="searchsubmit" value="Search" />
  </div>
</form>
{% endhighlight %}

We want to add a select box to let the user search in a specific category or in all tags: to achive this we'll use another default WordPress
function.

The [wp_dropdown_tags][1] function will build for you a select box with all your tags. Take a look at the [documentation][1] for all the available options.

{% highlight php %}
<?php wp_dropdown_tags( 'show_option_all=All tags' ); ?>
{% endhighlight %}

{% highlight html %}<!-- This is a sample output of the function -->

<select name='cat' id='cat' class='postform' >
  <option value='0' selected='selected'>All tags</option>
  <option class="level-0" value="1">Uncategorized</option>
  <option class="level-0" value="3">HTML &amp; CSS</option>
  <option class="level-0" value="4">Java</option>
  <option class="level-0" value="5">Links</option>
  <option class="level-0" value="6">Linux</option>
  <option class="level-0" value="9">Javascript</option>
  <option class="level-0" value="32">XML</option>
</select>
{% endhighlight %}

Now add the category select box to the form modifying your _searchform.php_
like this:

{% highlight html %}
<form role="search" method="get" id="searchform" action="<?php bloginfo('siteurl'); ?>">
  <div>
    <label class="screen-reader-text" for="s">Search for:</label>
    <input type="text" value="" name="s" id="s" /> 
    in <?php wp_dropdown_tags( 'show_option_all=All tags' ); ?> 
    <input type="submit" id="searchsubmit" value="Search" />
  </div>
</form>
{% endhighlight %}

That's it. It just works out of the box.

## A finishing touch


Now that you have a nice category filter in your search form it would be great to modify the search result page and add something like _Search result for "foo" in category "bar"_. Well, it's quite easy: we need do add a simple function to the [function.php][2] file. Remember that every function in this file will be automatically available in your theme.

This is a simple function that gets the _cat_ parameter from the request and if it's not null it searches the category name. It has two input parameters so you can pass two strings to be displayed before and after the category name. If _cat_ is null or empty or "0" (All tags) it will return an empty string.


{% highlight php %}
function getCatSearchFilter($pre,$post){
  $category = "";
  $catId = htmlspecialchars($_GET["cat"]);

  if ($catId != null && $catId != '' && $catId != '0'){
    $category = $pre.get_cat_name($catId).$post;
  }

  return $category;

}
{% endhighlight %}

Now open you search.php, add the function call to the page and you are done:

{% highlight html %}
<h1>Search Results for <?php echo(get_search_query());?><?php echo(getCatSearchFilter(' in category ',''));?></h1>
{% endhighlight %}

## Update 31.12.2011


Finally I wrote a blog post on adding a [Multiple tags filter in WordPress search][3]. [Check it out][3]!

[1]: http://codex.wordpress.org/Template_Tags/wp_dropdown_tags (wp_dropdown_tags documentation)
[2]: http://codex.wordpress.org/Theme_Development#Theme_Functions_File (About function.php)
[3]: http://alessandro.melandri.net/2011/12/31/multiple-tags-filter-in-wordpress-search/ (Multiple tags filter in WordPress search)

