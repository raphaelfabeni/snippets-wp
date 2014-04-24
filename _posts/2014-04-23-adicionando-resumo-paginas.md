---
layout: post
title:  "Adicionando resumo nas páginas"
date:   2014-04-23 17:51
description: "Habilita a utilização do campo resumo nas páginas."
file: 'functions.php'
---

{% highlight php startinline %}
add_post_type_support( 'page', 'excerpt' );
{% endhighlight %}