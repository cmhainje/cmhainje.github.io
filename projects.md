---
layout: default
title: Projects
permalink: /projects
---

## Projects

{% for category in site.categories %}
{% if category[0] == 'projects' %}
{% for post in category[1] %}
[{{ post.title }}]({{ post.url }})
{% if post.description %} — {{ post.description }} {% endif %}
{% endfor %}
{% endif %}
{% endfor %}
