---
layout: post
title: Custom notifications for a specific status change in Jira
description: How to add a custom notification for a specific status change in Jira
tags: [Jira, Atlassian]
category: Tech
---

The default [Jira] notification scheme sometimes might look like a spam bot, especially if you have a lot of users actively using it, so for one of our project we decided to create an empty notification scheme and add just one notification for a specific status change.

Jira doesn't have a built in notification for specific status changes but  fortunately adding a new one is quite easy.

<!--more-->

First of all we need to create a new **event** that will be triggered in the workflow, so go to:

{% highlight text %}
Administration / System / Advanced / Events
{% endhighlight %}

and insert a new event. 

In our example we are going to name it "Issue to Test Key User" because we'll set the event trigger in the **Done** action beetween **In Progress** and **Test Key User** status.

<img src="/static/2013-11/jira-custom-notification-1.png" class="img-responsive" />

Now we open the worflow 

{% highlight text %}
Administration / Issues / Workflows
{% endhighlight %}

and edit the transition **Done** adding our custom event.  In the transaction detail edit the item "Fire a Generic Event event that can be processed by the listeners"

<img src="/static/2013-11/jira-custom-notification-2.png" class="img-responsive" />

and change the triggered event to **Issue to Test Key User**:

<img src="/static/2013-11/jira-custom-notification-3.png" class="img-responsive" />

Now edit the notification scheme in 

{% highlight text %}
Administration / Issues / Notification Schemes
{% endhighlight %}

Choose the notification scheme associated with the project, click on **Notifications** and add a notification to the **Issue to Test Key User** event

<img src="/static/2013-11/jira-custom-notification-4.png" class="img-responsive" />

In the detail screen just choose who will receive the notification and click the **Add** button

<img src="/static/2013-11/jira-custom-notification-5.png" class="img-responsive" />

That's it.

[Jira]: https://www.atlassian.com/software/jira (Atlassian Jira)