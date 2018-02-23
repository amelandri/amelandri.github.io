---
author: amelandri
date: '2011-12-31 13:26:24'
layout: post
title: Multiple tags filter in WordPress search
tags:
- Tech
- PHP
- WordPress
---

More than two years ago I wrote the post [Add a category filter to WordPress search form][1] to explain how I added a category filter to the WordPress search form using WordPress API and some custom code and one of the most asked question was how to add a multiple tags filter to the search form, so here it is, a tutorial that covers all the steps to add multiple category filter to WordPress search.

<!--more-->

If you are impatient and want to see the final result, this is a sceenshot of the search page.

<img src="{{ site.url }}/static/2011-12-31/wpsearchmultiplecategoryfilters.png" class="img-responsive"/>

## Getting the tags list

In the previous post I used the standard method [wp_dropdown_tags][2] to get the tags list, now we need to generate a checkbox list instead of a dropdown list so we are going to build a custom method in the functions.php file:

{% highlight php %}
function am_dropdown_tags($args){
 
  // Get all the tags using WP API
  $tags = get_tags( $args );
 
  // Build the select code
 
  $select = '<ul id="catSearchFilters">';
 
  foreach ($tags as $category) { 
    $select .= '<li><input id="filterCat_'.$category-&gt;cat_ID.'" type="checkbox" name="filterCat" value="'.$category->cat_ID.'"'; 
    $select .= '<span>'.$category-&gt;cat_name.'</span></li>';
  } 
 
  $select .= '</ul>';
 
  // Output the select code to the page
 
  echo($select);
}
{% endhighlight %}

This method generates a list of tags with a checkbox for every category. The value of the checkbox is the category ID. Now we need to customize the search.php template adding a call to the function <code>am_dropdown_tags</code>:

{% highlight html %}
<form id="adv_searchform" action="<?php echo home_url( '/' ); ?>" method="get" name="adv_searchform" onsubmit="return manageMultipletagsSearch()">
  Search: <input id="adv_s" class="input input_large" type="text" name="s" value="<?php the_search_query(); ?>" />
 
  <h3>Category filter:</h3>
 
  <div class="clear"></div>
  <input type="hidden" name="cat" value="" /> 
  <input class="button" type="submit" name="Search" value="Search" />
</form>
{% endhighlight %}

Notice that the checkboxes name is <code>filterCat</code> and that there's an hidden <code>cat</code> field: this field is used by WordPress to apply the search category filter and accepts multiples values using the sintax <code>cat=1,2,3</code> so we are going to add a Javascript function that populates the <code>cat</code> field using the proper formatting.

## Manage the search form

This JavaScript function is called before submitting the form and sets the cat field value concatenating all the selected checkboxes values into a single string. This function must be included in the page displayng the search form.

{% highlight javascript %}
function manageMultipletagsSearch(){
 
  var selectedCats = "";
  var isFirst = true;
 
  for (i=0; i<document.adv_searchform.filterCat.length; i++){
    if (document.adv_searchform.filterCat[i].checked == true){
 
    if (!isFirst)
      selectedCats += ',';
 
      selectedCats += document.adv_searchform.filterCat[i].value;
      isFirst = false;
    }
  }
 
  document.adv_searchform.cat.value = selectedCats;
 
  return true;  
}
{% endhighlight %}

The filter is now fully functional, but we need to customize the search result page to list the tags

## Display results

Just add this code to the functions.php file

{% highlight php %}
function getCatSearchFilter($pre,$post){
 
    $category = '';
    $catId = htmlspecialchars($_GET["cat"]);
 
    $token = strtok($catId,",");
    $category .= get_cat_name($token);
 
    while($token){
        $token = strtok(",");
 
    if ($token != '0')
        $category .= ', '.get_cat_name($token);
    }
 
      if (strlen($category)&gt;0)
          $category = $pre.$category.$post;
 
      return $category;
}
{% endhighlight %}

and call it in the search results page:

{% highlight php %}
Search results for <?php the_search_query(); ?> 
<?php echo(getCatSearchFilter(' in category <span>','</span>'));?>
{% endhighlight %}

That's it.

[1]: /2009/08/05/add-a-category-filter-to-wordpress-search-form/
[2]: http://codex.wordpress.org/Template_Tags/wp_dropdown_tags