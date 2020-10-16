layout: default
title: Blog
permalink: /blog/

# Blog

{% for category in site.categories %}
{% if category[0] == 'blog' %}
{% for post in category[1] %}
<a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
{% endif %}
{% endfor %}

