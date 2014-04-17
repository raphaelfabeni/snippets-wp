---
layout: post
title:  "Image sizes"
date:   2014-04-16 17:12
description: "Define a specific size for cutting images."
file: 'functions.php'
---

{% highlight php startinline %}
if ( function_exists( 'add_image_size' ) ) {
    add_image_size('nome_do_corte', 780, 350, true);
}
{% endhighlight %}