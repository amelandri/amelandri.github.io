---
layout: post
title: "Remove .DS_Store Files From A Git Repository"
date: "2014-10-19"
comments: false
external-url: http://stackoverflow.com/questions/107701/how-can-i-remove-ds-store-files-from-a-git-repository
tags: Linklog
tags: [git,Linklog]
---

Remove existing files from the repository:

{% highlight bash %}
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
{% endhighlight %}

Add the line ```.DS_Store``` to the file .gitignore, which can be found at the top level of your repository (or created if it isn't there already). Then

{% highlight bash %}
git add .gitignore
git commit -m '.DS_Store banished!'
{% endhighlight %}
