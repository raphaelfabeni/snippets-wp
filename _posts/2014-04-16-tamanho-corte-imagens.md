---
layout: post
title:  "Tamanho de corte das imagens (Image size)"
date:   2014-04-16 17:12
description: "Define tamanhos específicos para os cortes das imagens."
file: 'functions.php'
---

{% highlight php startinline %}
if ( function_exists( 'add_image_size' ) ) {
    add_image_size('nome_do_corte', 780, 350, true);
}
{% endhighlight %}