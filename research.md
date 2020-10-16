---
layout: default
title: Research
permalink: /research
---

# Research

{% for category in site.categories %}
{% if category[0] == 'research' %}

{% for post in category[1] %}
<a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}

{% endif %}
{% endfor %}
