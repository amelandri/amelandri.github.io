---
layout: post
title: Apache virtual host basic template
published: True
category: Tech
tags: [Apache]
---

This is where I start when I have to configure an Apache server: a simple virtual host template with ssl rewrite.

```
<VirtualHost *:80>

    ServerName my.domain.com
    ServerAlias my.domain.com
    
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
    
    DirectoryIndex index.html
    
    ErrorLog "|/path/to/bin/rotatelogs -l '/path/error_%Y-%m-%d.log' 86400"
    CustomLog "|/path/to/bin/rotatelogs -l '/path/access_%Y-%m-%d.log' 86400" common
    
</VirtualHost>
```


