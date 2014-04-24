---
layout: post
title:  "Removendo scripts e estilo do Contact Form 7"
date:   2014-04-16 16:58
description: "Adiciona os arquivos de scripts e estilo do plugin Contact Form 7 apenas quando for necessário."
file: 'functions.php'
---

{% highlight php startinline %}
// CF7 scripts e estilo apenas quando necessario
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