---
layout: default
title: Projects
permalink: /projects
---

# Projects

{% for item in site.data.proj %}
<div class="list-post">
    <div class="list-title">
        <p>
            <a href="{{ item.link }}">{{ item.name }}</a>
            (<a href="{{ item.about }}">about</a>)
        </p>
    </div>
    <div class="list-date">
        <p>{{ item.date | date: "%Y-%m" }}</p>
    </div>
</div>
{% endfor %}
