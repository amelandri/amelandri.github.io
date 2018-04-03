---
author: amelandri
date: '2009-05-28 09:19:13'
layout: post
title: Install Sun JDK on Linux
description: How to install SUN JDK on Linux (tested on Fedora 10 nd Ubuntu 9.04)
tags: [Java,Linux]
Category: Tech
---

I've tested this procedure on Fedora 10 and Ubuntu 9.04 but it should work on other distributions too.

First of all download the latest JDK package from the [SUN page][1]: be sure to download the bin file and not the rpm.

From now on you'll need to run commands using <code>sudo</code>.

Move the package to <code>/opt/</code> and make it executable.

{% highlight bash %}
cd /path/to/download/folder

mv jdk-versionnumber-linux-i586.bin /opt/

cd /opt/

chmod +x jdk-versionnumber-linux-i586.bin
{% endhighlight %}

Now start the installation and follow the onscreen instructions

{% highlight bash %}
./jdk-versionnumber-linux-i586.bin
{% endhighlight %}

When the installation is done you'll need to set the JAVA_HOME enviroment
variable and add java executable to the system pah.

Open the file <code>/etc/profile</code> and add the following lines

{% highlight bash %}
JAVA_HOME="/opt/jdk_versionnumber"

export JAVA_HOME

PATH=$PATH:/opt/jdk_versionnumber/bin/

export PATH
{% endhighlight %}

Now add a symbolic link for the java command

{% highlight bash %}
ln -s /opt/jdk_versionnumber/bin/java /usr/bin/java
{% endhighlight %}

Log off and log in back and you're done.

[1]: http://java.sun.com/

