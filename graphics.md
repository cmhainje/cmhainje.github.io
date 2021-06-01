---
layout: default
title: Graphics
---

# Computer graphics

I _really_ like computer graphics. I think that it's one of the most interesting
fields of programming. The things that people make can be absolutely gorgeous,
and graphics as a field sits at an interesting intersection of computer science,
geometry, and design.

Lately, I've been really inspired by a lot of graphics artists. Some people do a
lot with patterns in 2D animations, like [@beesandbombs][dave] and 
[@satoshi_aizawa][x] on Twitter. There's also been a lot of interesting work
lately from [Sebastian Lague][seb] on YouTube. I'm hoping that 

Here, I'll keep track of my projects in computer graphics, as well as anything
that stands out to me on the Internet that I really want to take note of.

{% for category in site.categories %}
{% if category[0] == 'graphics' %}
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


[dave]: https://twitter.com/beesandbombs
[x]: https://twitter.com/satoshi_aizawa
[seb]: https://www.youtube.com/channel/UCmtyQOKKmrMVaKuRXz02jbQ