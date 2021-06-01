---
layout: default
title: Media
---

# Media

Here, I plan to compile a list of various forms of media I've consumed and
enjoyed enough to talk about, like books, movies, video games, and albums.  Some
of these things you will also be able to find online; for instance, see 
[my Letterboxd][lb] for movies.

{% for category in site.categories %}
{% if category[0] == 'media' %}
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


[lb]: https://letterboxd.com/chainje/