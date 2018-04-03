---
author: amelandri
date: '2009-07-03 11:17:49'
layout: post
title: Get location coordinates using Google Maps
tags: Javascript
Category: Tech
---


<p class="alert alert-warning">This article uses **v2** version of Google Maps API. You sould use [v3][5] by now</p>
This is a simple tutorial on finding location's coordinates using [Google Maps][1] [APIs][2].

First of all you need to [signup][3] for a Google Maps API key, otherwise your script will not work. When you are done, start building a simple form with three fields: one for the location and the others for coordinates display.

{% highlight html %}
<form>
  Address:
  <input name="address" type="text" />
  <input onclick="getCoordinates()" type="button" value="Get coordinates" />
 
  Latitude:
  <input name="lat" type="text" />
  Longitude:
  <input name="lng" type="text" />
</form>
{% endhighlight %}

Now, we need to define the `getCoordinates()` function: this function must read the value of the `address` field, check if it's valid and get its coordinates. To get coordinates we'll use the `GClientGeocoder` [class][4] and its method `getLatLng(address:String, callback:function)`:

> Sends a request to Google servers to geocode the specified address. If the
address was successfully located, the user-specified callback function is
invoked with a GLatLng point. Otherwise, the callback function is given a null
point. In case of ambiguous addresses, only the point for the best match is
passed to the callback function.

{% highlight javascript %}
var geocoder = new GClientGeocoder();

function getCoordinates(address){

  var address = document.myForm.address.value;

  if (address != ''){

    geocoder.getLatLng(address,function(point){

      if (point != null){
        document.myForm.lat.value = point.lat();
        document.myForm.lng.value = point.lng();
      }

      else{
        alert("Location not found");
      }
    })
  } else {
    alert("Please insert a location");
  }
}
{% endhighlight %}

[1]: http://maps.google.com (Google Maps)
[2]: http://code.google.com/apis/maps/ (Google Maps APIs)
[3]: http://code.google.com/apis/maps/signup.html
[4]: http://code.google.com/apis/maps/documentation/reference.html#GClientGeocoder (GClientGeocoder documentation)
[5]: https://developers.google.com/maps/