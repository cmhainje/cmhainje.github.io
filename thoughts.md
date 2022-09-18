---
layout: default
title: Thoughts
permalink: /thoughts
---

## Thoughts

{% for category in site.categories %}
{% if category[0] == 'thoughts' %}
{% for post in category[1] %}
[{{ post.title }}]({{ post.url }})
{% if post.description %} — {{ post.description }} {% endif %}
{% endfor %}
{% endif %}
{% endfor %}
