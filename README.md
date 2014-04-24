Snippets WP
===========

Uma coletânea de snippets para WordPress pra você utilizar no seu projeto!

[Ver projeto](http://raphaelfabeni.github.io/snippets-wp/)

## Como funciona

O projeto foi feito em [Jekyll](http://jekyllrb.com/).

* Clone o projeto `https://github.com/raphaelfabeni/snippets-wp.git`
* Vá para a pasta que onde você clonou.
* [Inicie o jekyll](#iniciando-o-jekyll) `jekyll serve --watch --baseurl ''`
* Accesse: `http://localhost:4000`
* [Contribua com seu post](#criando-um-post) dentro da pasta *_posts*

## Iniciando o Jekyll

![Iniciando o Jekyll](build/img/starting-jekyll.gif "Iniciando o Jekyll")

## Criando posts

* O nome do arquivo do post deve seguir a seguinte estrutura: `aaaa-mm-dd-titulo-post.md`
* No _template_ do post existem cinco parâmetros (YAML):
  * layout : Relacionado ao template geral dos posts (Você não vai mexer aqui)
  * title: O título do seu post.
  * date: A data de publicação do seu post (aaaa-mm-dd hh-mm)
  * description: Uma breve descrição do snippet.
  * file: Local onde o snippet deve ser inserido. A maioria provavelmente será no arquivo `functions.php`
* Na hora de digitar o seu snippet mágico, você deve colocá-lo dentro da tag: `{% highlight php startinline %}`

Ficou confuso? Calma. Aqui um exemplo de como deve ser um post:

```php
---
layout: post
title:  "Título legal do post"
date:   2014-04-22 17:00
description: "Aqui vai uma descrição simples da funcionalidade do snippet."
file: 'functions.php'
---

Se precisar escrever ou detalhar algo a mais sobre o post/snippet insira aqui.

{% highlight php startinline %}
// Código do snippet
{% endhighlight %}
```

## Criando um post

![Criando um post](build/img/creating-post.gif "Criando um post")