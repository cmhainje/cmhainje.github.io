---
layout: default
title: Stuff
permalink: /stuff
---

## Stuff

(Note that film entries will link to [Letterboxd][lb].)

{% for category in site.categories %}
{% if category[0] == 'media' %}
{% for post in category[1] %}
[{{ post.title }}]({{ post.url }})
{% if post.description %} — {{ post.description }} {% endif %}
{% endfor %}
{% endif %}
{% endfor %}

[lb]: https://letterboxd.com/chainje/
