--- 
layout: default 
title: "Jornal do Grêmio"
<link rel="stylesheet" href="{{'/assets/css/style.scss' | relative_url }}"> 
---

 <h1>Notícia em Destaque</h1> 
{% for post in site.posts %}
  {% if post.destaque %} 
<article> <h2>{{ post.title }}</h2> 
{{ post.content }}
    </article> 
{% endif %} 
{% endfor %} 
<h2>Últimas Notícias</h2> 
{% for post in site.posts limit:5 %}
  <h3><a href="{{ post.url }}">
{{ post.title}}
</a></h3>
{% endfor %}
