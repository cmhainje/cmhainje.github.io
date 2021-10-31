---
layout: default
title: Blog
permalink: /blog
---

Hi, I'm Connor. Welcome to my blog.

{% for category in site.categories %}
{% if category[0] == 'blog' %}
{% for post in category[1] %}
<div class="list-post">
    <div class="list-title">
        <p><a href="{{ post.url }}">{{ post.title | truncatewords: 10 }}</a></p>
    </div>
    <div class="list-date">
        <p>{{ post.date | date: "%Y-%m-%d" }}</p>
    </div>
</div>
{% endfor %}
{% endif %}
{% endfor %}
