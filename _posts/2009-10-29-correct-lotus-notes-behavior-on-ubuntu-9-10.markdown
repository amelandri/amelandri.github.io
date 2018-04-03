---
author: amelandri
date: '2009-10-29 14:14:15'
layout: post
title: Correct Lotus Notes behavior on Ubuntu 9.10
tags: Linux
category: Tech
---

After upgrading my desktop to Karmic Koala I started having some problem with my Notes 8.5.1 installation with window not displaying contents. Doing a brief Google search I found [this thread][1] about a change made in libgtk that breaks Lotus Notes.

The solution is in comment [#13][2]: just follow the simple instructions and Lotus Notes will be working again.

__Update - Nov, 4th 2009__

As pointed out by **jklocke**, a fresh Lotus Notes installation on Ubuntu 9.10 doesn't work: Notes won't start at all. The solution [he found][3] is very simple and quick: Notes cannot find the packages <code>libgnomeprint2.2-0</code> and <code>libgnomeprintui2.2-0</code>.

To resolve the problem run this command to install missing libraries:

    sudo apt-get install libgnomeprint2.2-0 libgnomeprintui2.2-0

__Update - Mar, 30th 2010__

Some commenters reported that they couldn't see checkboxes status in preferences. The solution found by **ElToro** and confirmed by **Perin** is to switch the theme to New Wave.

[1]: https://bugs.edge.launchpad.net/ubuntu/+source/gtk+2.0/+bug/398250
[2]:https://bugs.edge.launchpad.net/ubuntu/+source/gtk+2.0/+bug/398250/comments/13
[3]: http://ubuntuforums.org/showthread.php?t=1306492