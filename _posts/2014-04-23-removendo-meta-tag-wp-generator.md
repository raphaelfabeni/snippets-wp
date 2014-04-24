---
layout: post
title:  "Removendo a meta tag WP generator"
date:   2014-04-23 17:51
description: "Remove a meta tag WP generator que é inserida automaticamente pelo CMS que indica que o projeto foi gerado pelo WordPress."
file: 'functions.php'
---

{% highlight php startinline %}
remove_action('wp_head', 'wp_generator');
{% endhighlight %}