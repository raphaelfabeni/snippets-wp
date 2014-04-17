---
layout: post
title:  "Removing scripts and style of Contact Form 7"
date:   2014-04-16 16:58
description: "Add Contact Form 7 scripts and style only in pages needed."
file: 'functions.php'
---

{% highlight php startinline %}
// CF7 scripts and style only in pages needed
function deregister_cf7_javascript() {
    if ( !is_page(page_id) ) {
    	wp_deregister_script( 'contact-form-7' );
    }
}
add_action( 'wp_print_scripts', 'deregister_cf7_javascript', page_id );
/**/
function deregister_cf7_styles() {
    if ( !is_page(page_id) ) {
    	wp_deregister_style( 'contact-form-7' );
    }
}
add_action( 'wp_print_styles', 'deregister_cf7_styles', page_id );
{% endhighlight %}