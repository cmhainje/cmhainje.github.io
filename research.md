---
layout: default
title: Research
---

# Research

I like to consider myself a physicist. It's what I do as a job right now, it's
what I have a degree in, and it's what I see myself continuing to pursue for the
rest of my life. Here, then, I'll detail the various physics and research
projects I've worked on. Cheers.

{% for category in site.categories %}
{% if category[0] == 'research' %}
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
