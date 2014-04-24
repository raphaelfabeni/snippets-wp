---
layout: post
title:  "Estilizando o Contact Form 7"
date:   2014-04-16 16:45
description: "Adiciona uma classe CSS em todo formulário do plugin Contact Form 7."
file: 'functions.php'
---

{% highlight php startinline %}
// Adiciona classe
add_filter( 'wpcf7_form_class_attr', 'custom_class_form' );
     
function custom_class_form( $class ) {
    $class .= ' your_class';
    return $class;
}
{% endhighlight %}