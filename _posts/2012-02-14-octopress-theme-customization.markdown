---
layout: post
title: "Octopress theme customization"
date: 2012-02-14 13:50
comments: true
description: Octopress theme customization using CSS
keywords: octopress, theme, template, customization, css, stylesheet
tags: Octopress
---

## Update Jul 23rd, 2012

I've released DarkStripes, an Octopress theme based on the customizations described in this article. &nbsp;**[Check it out][darkstripes]**

## Original article

I received a positive feedback on the [Octopress] theme customization I wrote for this website, so I decided to publish the modifications I made to the default theme. 

I followed the [Theming & Customization][instructions] instructions and modified only the "_custom_" files beacuse I wanted to be able to upgrade Octopress without having to re-apply my changes every time.

Feel free to use the following code, just please give me **credit** and some **backlink** love.

<!--more-->

First of all I changed the main layout width because I wanted the article content to be 640px wide, a populare image format, especially if you use Flickr.  
I love the modern browser ability to resize images on the fly, but I prefer to keep my pages as light as possible, so I try to post images that fit the layout.

{% highlight css %}
$max-width: 1037px;
$sidebar-width-medium: 286px;
$sidebar-width-wide: 286px;
{% endhighlight %}

Then I changed the default font and set it to Lato, including the font from Google Fonts

{% highlight css %}
$sans: "Lato", sans-serif;
$serif: "Lato", sans-serif;
$heading-font-family: 'Lato', sans-serif;
$header-title-font-family: "League", Helvetica, Arial, sans-serif;
{% endhighlight %}

{% highlight html %}
<link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
{% endhighlight %}

And finally I wrote my custom CSS. I use some external resource in my style:

  * The header icon is part of the *Super Mono Icon Set* by [Double-J Design][headericon]
  * [LeagueGothic] is a great font by [The League of Moveable Type][league]
  * The background pattern is generated using [Stripe Generator 2.0][stripe]

{% highlight css %}
@font-face {
	font-family: "League";
	src: url('/font/LeagueGothic.otf');
}

a:visited, #content .blog-index article h1 a:hover { color: #1863A1; }


/* ----- main layout ----- */


html { background: #262C33 url("/images/line-tile.png"); }

body { font-size: 1em; }

body > div { background-image: none; }

body > div > div { background-image: none; }


/* ----- header ----- */


body > header{
	background: none;
	padding: 1.6em 0 1em 0
}

body > header h1{
	font-size: 2.8em;
	padding-left: 20px;
	text-shadow: rgba(0, 0, 0, 0.8) 0 0 8px;
}

body > header h2{
	font-size: 0.5em;
	letter-spacing: 1px;
	margin-top: -1.4em;
	padding-left: 20px;
}

body > nav {
	padding-top: .15em;
	padding-bottom: .15em;
}

body > nav a{
	font-size: 1em;
	line-height: 1.4em;
}

body > nav form .search{
	padding: .2em .3em;
}


/* ----- Content ----- */


#content .blog-index article h1 {
	font-size: 1.8em;
	font-weight: normal;
}

#content .blog-index article h1, #content .blog-index article h1 a, article header h1, article header h1 a{
	color: #555555 !important;
}

h1 { font-size: 1.8em; }

h1 span{
	font-weight: normal;
	color: #E0841B;
}

article h2, article h3, article header h1{
	font-weight: normal;
}

.blog-index article h1 a:hover{ text-decoration: none; }

article p {
	text-align:justify;
	margin-bottom: 1em;
}


/* ----- Sidebar ----- */


aside.sidebar section h1 { letter-spacing: 0.1em; }

aside.sidebar a { text-decoration: none; }

.toggle-sidebar{display: none;}

ul#gh_repos > li > a{
	display: block;
	font-weight: bold;
	margin-bottom: 0.4em;
}

aside.sidebar{
	-moz-border-radius-topright: 0.4em;
	-webkit-border-radius: 0 0.4em 0 0;
	border-radius: 0 0.4em 0 0;
}


/* ----- Footer ----- */


body > footer{
	-moz-border-radius: 0;
	-webkit-border-radius: 0;
	border-radius:0;
	margin-bottom: 0;
}


/* ----- 404 ----- */


.notfound404 article{
	margin-left: 0 !important;
}


/* ----- Media queries ----- */


@media only screen and (min-width: 550px) {

	body > header h1{
		background: url("/favicon.png") no-repeat 0 8px;
		padding-left: 60px;
	}

	body > header h2 { padding-left: 60px; }

	body > footer { margin-bottom: 3em; }
}

@media only screen and (min-width: 1040px) {
 
	body > nav {
	  -moz-border-radius: 0.4em;
	  -webkit-border-radius: 0.4em;
	  border-radius:0.4em;
	  margin-bottom: 2em;
	}

	body > footer{
		-moz-border-radius-bottomleft: 0.4em;
		-moz-border-radius-bottomright: 0.4em;
		-webkit-border-radius: 0 0 0.4em 0.4em;
		border-radius: 0 0 0.4em 0.4em;
	}

	#main{
		-moz-border-radius-topleft: 0.4em;
		-moz-border-radius-topright: 0.4em;
		-webkit-border-radius: 0.4em 0.4em 0 0;
		border-radius: 0.4em 0.4em 0 0;
	}

	#content{
		-moz-border-radius-topleft: 0.4em;
		-webkit-border-radius: 0.4em 0 0 0;
		border-radius: 0.4em 0 0 0;
	}

	#content .blog-index a[rel="full-article"]{
		-webkit-border-radius: 6px;
		-moz-border-radius: 6px;
		border-radius: 6px;
	}
}
{% endhighlight %}

[Octopress]: http://octopress.org
[instructions]: http://octopress.org/docs/theme/template/ (Octopress - Theming & Customization)
[headericon]: http://www.doublejdesign.co.uk (Double J Design)
[league]: http://www.theleagueofmoveabletype.com
[LeagueGothic]: http://www.theleagueofmoveabletype.com/league-gothic
[stripe]: http://www.stripegenerator.com/
[darkstripes]: http://melandri.net/2012/07/23/darkstripes-octopress-theme-released/ (DarkStripes Octopress theme)