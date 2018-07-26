---
layout: post
title: "Octopress Flickr Aside"
date: 2012-01-10 23:25
comments: true
description: Add a Flickr aside to an Octopress blog using Flickr API
keywords: octopress, flickr, aside
tags: 
- Octopress
---

After [moving] my blog to [Octopress] I was looking for a nice way to display my [Flickr photos][flickr] on these pages, but without using the ugly Flickr default banners.  
Looking around the web I found a nice javascript example on how to get the latest picture of an user using Flickr APIs so I reworked the code and built an aside for Octopress that displays the latest Flickr pictures on the sidebar.

I created a [repository] for the code and after the break you'll find the instructions on how to set it up.

<!--more-->

You'll need some information to get started: first of all you need you Flickr username, with that you can obtain your Flickr user id using [idgettr].

The last step is getting a Flickr API key that can be generated visiting this page: [http://www.flickr.com/services/api/keys/][flickrapi].

When you are done, put these info in the `_config.yml` file:

{% highlight bash %}
flickr_userid: 0123456789
flickr_nickname: mynickname
flickr_apikey: 1a2b3c4d5e
flickr_count: 5
{% endhighlight %}

and then put the flickr.html file inside your Octopress installation in the directory `source/_includes/custom/asides`

{% highlight javascript %}
{ % if site.flickr_userid % }
<section class="flickr">
<h1>Flickr</h1>
<style type="text/css">
	#flickrList li{ text-align: center; }
</style>
<ul id="flickrList"></ul>

<script lang="Javascript">
var flickrNickname = "{{ site.flickr_nickname }}";

function jsonFlickrApi(rsp) {

	if (rsp.stat != "ok"){
  		return;
 	}

 	var list = "";

 	for (var i=0; i < rsp.photos.photo.length; i++) {
 	
  		var photo    = rsp.photos.photo[i];
  		var imgUrl   = 'http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg';
  		var photoUrl = 'http://www.flickr.com/photos/'+ flickrNickname +'/'+ photo.id;

  		list += '<li id="flickrItem_'+i+'"><a href="'+ photoUrl +'" title="'+ photo.title +'"><img alt="'+ photo.title +'" src="'+ imgUrl +'" /></a></li>';
 	}
 	
 	list += '<li class="flickrLink"><a href="http://www.flickr.com/photos/'+ flickrNickname + '">Flickr page</a></li>';
 	
 	document.getElementById('flickrList').innerHTML = list;
}
</script>
<script lang="Javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&user_id={{ site.flickr_userid }}&per_page={{ site.flickr_count }}&api_key={{ site.flickr_apikey }}"></script>

</section>
{ % endif % }
{% endhighlight %}

Now enable the aside in your _config.yml and you are done

{% highlight bash %}
default_asides: [asides/recent_posts.html, 
				 asides/twitter.html, 
				 asides/github.html, 
				 asides/delicious.html, 
				 asides/pinboard.html, 
				 asides/googleplus.html, 
				 custom/asides/flickr.html]
{% endhighlight %}

For a better result you should adjust the sidebar size to match the Flickr foto size. For example I set my sidebar size to `286px`

{% highlight css %}
$sidebar-width-medium: 286px;
$sidebar-width-wide: 286px;
{% endhighlight %}

[moving]: /2012/01/08/goodbye-wordpress/ (Goodbye WordPress, hello Octopress)
[Octopress]: http://octopress.org (Octopress)
[flickr]: http://flickr.com/photos/melandri
[idgettr]: http://idgettr.com/
[repository]: http://github.com/amelandri/Octopress-Flickr-Aside
[flickrapi]: http://www.flickr.com/services/api/keys/