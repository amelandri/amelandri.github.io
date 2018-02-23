---
layout: post
title: "Setup Mailman and Postfix on a Debian server"
date: 2012-02-15 21:30
comments: true
description: Setup Mailman and Postfix on a Debian 6 server
keywords: mailman, postfix, linux, debian, linode, subdomain
tags: [Tech,Linux,Mailman]
---

After moving my website to [Linode] I had to install and configure Mailman and Postfix to manage some mailing lists and since the process is quite tricky, I decided to write down all the steps hoping it can be useful to beginners like me.

This tutorial assumes that you are using Debian 6 and the latest Mailman and Postfix stable versions and that you plan to use a dedicated subdomain for your lists.

<!--more-->

## Create the VirtualHost

Go to <code>/etc/apache2/sites-available/</code> and create the file <code>lists.mydomain.com</code> with this content:

{% highlight apache%}
<VirtualHost *:80>
	ServerAdmin admin@mydomain.com
	ServerName lists.mydomain.com
	ServerAlias www.lists.mydomain.com
	DocumentRoot /srv/www/lists.mydomain.com/public_html/
	ErrorLog /srv/www/lists.mydomain.com/logs/error.log
	CustomLog /srv/www/lists.mydomain.com/logs/access.log combined
</VirtualHost>
{% endhighlight %}

Save the file and create the directories for public files and logs

{% highlight bash %}
mkdir -p /srv/www/lists.mydomain.com/public_html/
mkdir /srv/www/lists.mydomain.com/logs/
{% endhighlight %}

and enable the virtualhost:

{% highlight bash %}
a2ensite lists.mydomain.com
{% endhighlight %}

## Install Mailman and postfix

For Mailman and Postifx installation I followed the tutorial [Manage Email Lists with GNU Mailman on Debian 6 (Squeeze)][tutorial] in the [Linode Library][library].

Be sure to complete the [Configure Virtual Hosting][tutorialvirtualhost] section **before** creating the default <code>mailman</code> list.

## Setup the virtualhost

Now you need to tweak your subdomain configuration in order to access the mailman web interface. You can integrate your configuration using the sample file inside <code>/var/lib/mailman/templates/apache.conf</code>.  

Below there's the final configuration file:

{% highlight xml %}
<VirtualHost *:80>

	ServerAdmin admin@mydomain.com
	ServerName lists.mydomain.com
	ServerAlias www.lists.mydomain.com
	DocumentRoot /srv/www/lists.mydomain.com/public_html/
	ErrorLog /srv/www/lists.mydomain.com/logs/error.log
	CustomLog /srv/www/lists.mydomain.com/logs/access.log combined

	<Directory /usr/lib/cgi-bin/mailman/>
		AllowOverride None
		Options ExecCGI
		AddHandler cgi-script .cgi
		Order allow,deny
		Allow from all
	</Directory>

	<Directory /var/lib/mailman/archives/public/>
		Options FollowSymlinks
		AllowOverride None
		Order allow,deny
		Allow from all
	</Directory>

	<Directory /usr/share/images/mailman/>
		AllowOverride None
		Order allow,deny
		Allow from all
	</Directory>

	Alias /pipermail/ /var/lib/mailman/archives/public/
	Alias /images/mailman/ /usr/share/images/mailman/

	ScriptAlias /cgi-bin/mailman/ /usr/lib/cgi-bin/mailman/
	ScriptAlias /admin /usr/lib/cgi-bin/mailman/admin
	ScriptAlias /admindb /usr/lib/cgi-bin/mailman/admindb
	ScriptAlias /confirm /usr/lib/cgi-bin/mailman/confirm
	ScriptAlias /create /usr/lib/cgi-bin/mailman/create
	ScriptAlias /edithtml /usr/lib/cgi-bin/mailman/edithtml
	ScriptAlias /listinfo /usr/lib/cgi-bin/mailman/listinfo
	ScriptAlias /options /usr/lib/cgi-bin/mailman/options
	ScriptAlias /private /usr/lib/cgi-bin/mailman/private
	ScriptAlias /rmlist /usr/lib/cgi-bin/mailman/rmlist
	ScriptAlias /roster /usr/lib/cgi-bin/mailman/roster
	ScriptAlias /subscribe /usr/lib/cgi-bin/mailman/subscribe
	ScriptAlias /mailman/ /usr/lib/cgi-bin/mailman/

</VirtualHost>
{% endhighlight %}

To complete the configuration, add an <code>index.html</code> file to your subdomain root that forwards the requests to the mailman web interface

{% highlight html %}
<html>
<head>
<meta http-equiv="refresh" content="0; url=http://lists.mydomain.com/mailman/listinfo">
</head>
<body>
</body>
</html>
{% endhighlight %}

## Troubleshooting

When I completed the configuration I sent my first email to the list and got this error.

    The error that the other server returned was: 
    550 550 5.1.1 <listname@lists.mydomain.com>: 
    Recipient address rejected: User unknown in local recipient table (state 14)

If you get this error probably the installation didn't insert the corret aliases in the <code>/etc/aliases</code> file. To solve the problem just add this aliases to the file

    mylist: "|/var/lib/mailman/mail/mailman post mylist"
    mylist-admin: "|/var/lib/mailman/mail/mailman admin mylist"
    mylist-bounces: "|/var/lib/mailman/mail/mailman bounces mylist"
    mylist-confirm: "|/var/lib/mailman/mail/mailman confirm mylist"
    mylist-join: "|/var/lib/mailman/mail/mailman join mylist"
    mylist-leave: "|/var/lib/mailman/mail/mailman leave mylist"
    mylist-owner: "|/var/lib/mailman/mail/mailman owner mylist"
    mylist-request: "|/var/lib/mailman/mail/mailman request mylist"
    mylist-subscribe: "|/var/lib/mailman/mail/mailman subscribe mylist"
    mylist-unsubscribe: "|/var/lib/mailman/mail/mailman unsubscribe mylist"

and run

    newaliases

[Linode]: http://www.linode.com/?r=ce81128e2ab198e1d3b756a51b3773659eee245d (Linode referral link)
[tutorial]: http://library.linode.com/email/mailman/debian-6-squeeze
[tutorialvirtualhost]:http://library.linode.com/email/mailman/debian-6-squeeze#sph_id1
[library]: http://library.linode.com