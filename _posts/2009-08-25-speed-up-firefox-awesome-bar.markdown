---
author: amelandri
date: '2009-08-25 08:27:43'
layout: post
title: Speed up Firefox awesome bar
Category: Tech
---

Using the new Firefox awesome bar could result in a frustrating experience, because the SQLite database that holds all the data used by Firefox can get heavily defragmented.

You can get an huge speed improvement running this command inside the Firefox error console:

    Components.classes["@mozilla.org/browser/nav-history-service;1"]
      .getService(Components.interfaces.nsPIPlacesDatabase)
      .DBConnection.executeSimpleSQL("VACUUM");

Put the command above in the _code_ field (__in a single line__) and press the __evaluate__ button.