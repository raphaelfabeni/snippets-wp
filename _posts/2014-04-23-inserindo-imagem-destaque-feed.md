---
layout: post
title:  "Inserindo imagem de destaque para o Feed"
date:   2014-04-23 17:51
description: "Habilita imagem de destaque do post para o Feed."
file: 'functions.php'
---

{% highlight php startinline %}
function rss_post_thumbnail($content) {
	global $post;
	if( has_post_thumbnail($post->ID) )
		$content = '<p>' . get_the_post_thumbnail($post->ID, 'thumbnail') . '</p>' . $content;
		return $content;
}
{% endhighlight %}