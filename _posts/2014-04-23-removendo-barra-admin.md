---
layout: post
title:  "Removendo barra do admin"
date:   2014-04-23 17:48
description: "Remove a barra de admin do WordPress quando você está logado no painel de controle."
file: 'functions.php'
---

{% highlight php startinline %}
add_filter('show_admin_bar', '__return_false');
{% endhighlight %}