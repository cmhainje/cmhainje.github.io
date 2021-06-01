---
layout: default
title: Keyboards
---

# Keyboards

I like mechanical keyboards. Like, a lot. So here, I'm going to keep track of
keyboards that I own (and what I think about them) as well as anything I see on
the Internet I want to save.

{% for category in site.categories %}
{% if category[0] == 'keyboards' %}
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