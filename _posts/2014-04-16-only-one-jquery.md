---
layout: post
title:  "Only one jQuery!"
date:   2014-04-16 15:14
description: "Add only one jQuery script on page at footer."
file: 'functions.php'
---

You need the tag <code><?php wp_footer(); ?></code> at footer.

{% highlight php startinline %}
// Add jQuery script
function my_scripts_method() {
	wp_deregister_script( 'jquery' );
	wp_enqueue_script('jquery','http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js','','',true);
}
 
add_action('wp_enqueue_scripts', 'my_scripts_method');
{% endhighlight %}