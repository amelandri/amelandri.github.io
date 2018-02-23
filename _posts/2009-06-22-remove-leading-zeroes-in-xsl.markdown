---
author: amelandri
date: '2009-06-22 12:09:55'
layout: post
title: Remove leading zeroes in XSL
description: A useful XSL template for removing leading zeros
tags:
- Tech
- XML
---

A useful XSL template for removing leading zeros

{% highlight xml %}
<xsl:template name="removeLeadingZeros">  
  <xsl:param name="originalString"/>  
  <xsl:choose>  
    <xsl:when test="starts-with($originalString,'0')">  
      <xsl:call-template name="removeLeadingZeros">  
        <xsl:with-param name="originalString">  
          <xsl:value-of select="substring-after($originalString,'0' )"/>  
        </xsl:with-param>  
      </xsl:call-template>  
    </xsl:when>  
    <xsl:otherwise>  
      <xsl:value-of select="$originalString"/>  
    </xsl:otherwise>  
  </xsl:choose>  
</xsl:template>
{% endhighlight %}

Just insert it into your XSL file and use it as usual:

{% highlight xml %}
<xsl:call-template name="removeLeadingZeros">  
  <xsl:with-param name="originalString" select="$myOriginalString"/>  
</xsl:call-template>
{% endhighlight %}