---
layout: post
title: "Removing orphaned users from a SQLServer database"
date: 2014-10-18T13:40:31+01:00
comments: false
tags: [database, sqlserver]
---


If you are using SQLServer probably you had to restore a database from a backup and got stuck with an orphaned user that was no more associated with a login.

Microsoft provides a stored procedure to remove this orphaned user:

{% highlight sql  %}exec sp_revokedbaccess 'Orphaned_User_Name'{% endhighlight %}

You could get an error because the user still owns a schema. To find out which schema is bound with the user you can use this query

{% highlight sql %}
SELECT name FROM  sys.schemas WHERE principal_id = USER_ID('Orphaned_User_Name')
{% endhighlight %}

And then drop the orphaned user from the schema

{% highlight sql  %}
ALTER AUTHORIZATION ON SCHEMA::SchemaName TO dbo
GO
DROP USER Orphaned_User_Name
{% endhighlight %}
