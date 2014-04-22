Snippets WP
===========

A simple collection of wordpress snippets for your project.

## How it works

It was developed with [Jekyll](http://jekyllrb.com/).

* Clone the project `https://github.com/raphaelfabeni/snippets-wp.git`
* Go to folder
* Start the jekyll `jekyll serve --watch --baseurl ''`
* Create a post inside the folder *_posts*

## Post rules

* The filename must follow the structure: yyyy-mm-dd-title-of-the-post.md
* There are five parameters in post template:
  * layout : It's about the layout template of the post (you won't change this parameter)
  * title: The title of the post.
  * date: Publication date of the post
  * description: A short description about the post
  * file: It's where your snippet must be inserted. Most will be `functions.php`
* To insert the code snippet, type in the following tag: `{% highlight php startinline %}`

A simple example of a post:

```php
---
layout: post
title:  "This is the title of the post!"
date:   2014-04-22 17:00
description: "Simple description of the post that can explain it easily."
file: 'functions.php'
---

If you need insert more details about the snippet, write here.

{% highlight php startinline %}
// Code snippet
{% endhighlight %}
```



