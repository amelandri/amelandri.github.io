---
layout: post
title: Update table with data from another table using SQL
description: How to update table with data from another table using SQL
tags: Sql
category: Tech
---

A simple but useful SQL snippet that lets you update a table using data from another table

{% highlight sql %}
UPDATE
     Table1 
SET
     Table1.col1 = Table2.col1,
     Table1.col2 = Table2.col2 
FROM
     Table1 
INNER JOIN     
     Table2 
ON     
     Table1.id = Table2.id 
{% endhighlight %}