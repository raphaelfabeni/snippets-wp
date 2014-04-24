---
layout: post
title:  "Apenas um jQuery"
date:   2014-04-16 15:14
description: "Adiciona apenas um arquivo do jQuery na página (no rodapé)."
file: 'functions.php'
---

Você precisa inserir a tag <code><?php wp_footer(); ?></code> no rodapé.

{% highlight php startinline %}
// Adiciona scripts jQuery
function my_scripts_method() {
	wp_deregister_script( 'jquery' );
	wp_enqueue_script('jquery','http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js','','',true);
}
 
add_action('wp_enqueue_scripts', 'my_scripts_method');
{% endhighlight %}