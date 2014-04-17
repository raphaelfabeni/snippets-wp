---
layout: post
title:  "Styling Contact Form 7"
date:   2014-04-16 16:45
description: "Add a CSS class on every form."
file: 'functions.php'
---

{% highlight php startinline %}
// Add custom class
add_filter( 'wpcf7_form_class_attr', 'custom_class_form' );
     
function custom_class_form( $class ) {
    $class .= ' your_class';
    return $class;
}
{% endhighlight %}