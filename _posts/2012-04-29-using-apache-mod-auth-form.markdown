---
layout: post
title: "Using Apache mod_auth_form"
date: 2012-04-29 14:11
description: Using Apache mod_auth_form
keywords: Apache, httpd, server, linux, mod_auth_form
tags: 
- Tech
- Linux
---

Protecting a web site area using [Apache httpd][1] basic security is very simple but you have no control over the login alert window displayed by the browser, so when at work we saw that since version 2.3 Apache added a module that will let you use a an html form instead of the ugly alert we decided to upgrade to latest version and give it a try.

I compiled [Apache 2.4.2][2] on CentOS 6.2 32 bit. I won't detail here the installation process, if you need help just follow [this tutorial][3]. 

The following instructions are based on the [mod_auth_form documentation page][4] and the few tutorials I found online.

First of all create a test folder in the web server root and put a test page inside it

{% highlight bash %}
cd /usr/local/apache/www/
mkdir testfolder
echo 'It Works' > ./testfolder/index.html
chmod -R 755 testfolder/
{% endhighlight %}

Then create a login page in the webserver root that will be used to authenticate users

{% highlight html %}
<html>
	<head>
		<title>Login page</title>
	</head>
	<body>
		<form method="POST" action="">
			User: <input type="text" name="httpd_username" value="" />
			Pass: <input type="password" name="httpd_password" value="" />
			<input type="submit" name="login" value="Login" />
		</form>
	</body>
</html>
{% endhighlight %}

Please note that leaving the action empty, after a successfull login the user will be redirected to the previously requested resource.

Now edit Apache main configuration file enabling required modules

{% highlight xml %}
LoadModule auth_form_module modules/mod_auth_form.so
LoadModule session_module modules/mod_session.so
LoadModule request_module modules/mod_request.so
LoadModule session_cookie_module modules/mod_session_cookie.so
{% endhighlight %}

and then add a Directory directive to protect the folder

{% highlight xml %}
<Directory "/usr/local/apache/www/testfolder">
    AuthFormProvider file
    AuthType form
    AuthName "Reserved Area"
    Session On
    SessionCookieName session path=/
    require valid-user

 	# This is the login page
    ErrorDocument 401 /login.html

    # This is the file containing users login data
    AuthUserFile /usr/local/apache/auth/.htpasswd

</Directory>
{% endhighlight %}

Now add a user to the .htpasswd file and reload the web server configuration before trying to navigate to the protected folder.

{% highlight bash %}
htpasswd -c /usr/local/apache/auth/.htpasswd myusername
{% endhighlight %}

[1]: http://httpd.apache.org/ (Apache Httpd)
[2]: http://httpd.apache.org/docs/2.4/new_features_2_4.html (Apache 2.3/2.4 what's new)
[3]: http://www.hackersgarage.com/installing-apache-2-4-1-from-source-on-centos-6-2-linux.html (Installing Apache 2.4.1 from source on CentOS 6.2 Linux)
[4]: http://httpd.apache.org/docs/2.4/mod/mod_auth_form.html (Apache Module mod_auth_form)