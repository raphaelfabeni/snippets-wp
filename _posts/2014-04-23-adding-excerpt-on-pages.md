---
layout: post
title:  "Adding excerpt on pages"
date:   2014-04-23 17:51
description: "Enables the use of excerpt on pages."
file: 'functions.php'
---

{% highlight php startinline %}
add_post_type_support( 'page', 'excerpt' );
{% endhighlight %}