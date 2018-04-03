---
author: amelandri
date: '2009-05-30 17:24:09'
layout: post
description: Tutorial containing the steps to install OpenOffice 3.1 on Ubuntu.
title: Install OpenOffice 3.1 on Ubuntu
tags: [Linux]
category: Tech
---

These are the steps to install OpenOffice 3.1 on Ubuntu. First of all [download][1] OpenOffice 3.1 from the [official web site][2]. When you're done, follow these steps:

**1. Remove previous version**



    sudo apt-get remove openoffice*.*



**2. Remove settings folder** This will remove ALL your OpenOffice settings



    rm ~/.openoffice.org -rf



**3. Expand the archive**



    tar -xvzf OOo_3.1.0_LinuxIntel_install_en-US_deb.tar.gz



**4. Setup**



    cd OOO310_m11_native_packed-4_en-US.9399/DEBS/

    sudo dpkg -i *.deb



**5. Setup desktop integration**



    cd desktop-integration

    sudo dpkg -i openoffice.org3.1-debian-menus_3.1-9393_all.deb


   [1]: http://download.openoffice.org/other.html

   [2]: http://www.openoffice.org

