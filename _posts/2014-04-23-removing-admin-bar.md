---
layout: post
title:  "Removing the Admin bar"
date:   2014-04-23 17:48
description: "Remove the admin bar that appears in your site when you are logged."
file: 'functions.php'
---

{% highlight php startinline %}
add_filter('show_admin_bar', '__return_false');
{% endhighlight %}