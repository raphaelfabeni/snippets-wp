---
layout: post
title:  "Inserting the featured image for news Feed"
date:   2014-04-23 17:51
description: "Enables featured image of the post for news feed"
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