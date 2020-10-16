---
layout: default
title: Notes
permalink: /notes
---

# Notes

{% for category in site.categories %}

{% if category[0] != 'research' %}

{% for post in category[1] %}
<a href="{{ post.url }}">
  {{ post.title }}<!--
--></a> {% if category[0] == 'projects' %} (<i>project</i>) {% endif %}

{% endfor %}

{% endif %}
{% endfor %}
