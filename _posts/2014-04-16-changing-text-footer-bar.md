---
layout: post
title:  "Changing the text of Admin bar footer"
date:   2014-04-16 17:27
description: "Change the text on the footer bar in Admin panel."
file: 'functions.php'
---

{% highlight php startinline %}
// Admin Footer text
function remove_footer_admin () {
	echo "New footer text!";
}
add_filter('admin_footer_text', 'remove_footer_admin');
{% endhighlight %}