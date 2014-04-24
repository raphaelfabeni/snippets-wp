---
layout: post
title:  "Alterando o texto da barra do rodapé no painel admin"
date:   2014-04-16 17:27
description: "Altera o texto localizado no rodapé do painel admin."
file: 'functions.php'
---

{% highlight php startinline %}
// Texto admin rodape
function remove_footer_admin () {
	echo "New footer text!";
}
add_filter('admin_footer_text', 'remove_footer_admin');
{% endhighlight %}