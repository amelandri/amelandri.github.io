---
author: amelandri
date: '2009-09-16 18:15:23'
layout: post
title: Scriptlet and JSTL variable sharing
tags: Java
Category: Tech
---

I know that mixing [scriplets][1] and [JSTL][2] in [JSP][3] is a bad practice, but sometimes you can't avoid it and every time I do it I can't remember how to share variables between scriplets and JSTL so this post is a sort of reminder for the future. Hope it can be useful for other forgetful persons like me :-)

## Access scriptlet variable with JSTL

    <%
    String myVariable = "Test";
    pageContext.setAttribute("myVariable", myVariable);
    %>

    <c:out value="myVariable"/>

## Access JSTL variable with scriptlet

    <c:set var="myVariable" value="Test"/>

    <%
    String myVariable = (String)pageContext.getAttribute("myVariable");
    out.print(myVariable);
    %>

[1]: http://java.sun.com/products/jsp/syntax/2.0/syntaxref206.html
[2]: http://java.sun.com/products/jsp/jstl/reference/docs/index.html
[3]: http://java.sun.com/products/jsp/