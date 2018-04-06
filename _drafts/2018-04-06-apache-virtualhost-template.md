---
layout: post
title: Apache virtual host basic template
published: True
category: Tech
tags: [Acrobat, Form, Javascript]
---

A simple template for Apache virtual hosts

You need to add a new document level javascript with this code.

{% highlight %}
<VirtualHost *:80>

    ServerName my.domain.com
    ServerAlias my.domaini.com
    
    RewriteEngine On
    RewriteCond %{HTTPS} =off
    RewriteRule (.*) https://%{SERVER_NAME}$1 [R,L]
    
</VirtualHost>

<VirtualHost *:443>

    DocumentRoot "/path/to/htdocs"
    
    ServerName my.domain.com
    ServerAlias my.domain.com
    
    SSLEngine on
    
    SSLCertificateFile /path/to/ssl/files/ssl_certificate.crt
    SSLCertificateKeyFile /path/to/ssl/files/privatekey.pem
    SSLCertificateChainFile /path/to/ssl/files/IntermediateCA.crt
    
    DirectoryIndex index.html index.php
    
    ErrorLog "|/path/to/bin/rotatelogs.exe -l '/path/to/logs/my.domain.com-error_%Y-%m-%d.log' 86400"
    CustomLog "|/path/to/bin/rotatelogs.exe -l '/path/to/logs/my.domain.com-access_%Y-%m-%d.log' 86400" common
    
</VirtualHost>
{% endhighlight %}


