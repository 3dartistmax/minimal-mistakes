---
title: Status
permalink: /status/
layout: single
---

{% for entry in site.status reversed %}
<article style="margin-bottom: 3rem;">
  <h3>{{ entry.title }}</h3>
  <small style="color: #999;">{{ entry.date | date: "%B %d, %Y" }}</small>
  {% if entry.image %}
  <div style="margin: 1rem 0;">
    <img src="{{ entry.image }}" alt="{{ entry.title }}" style="max-width: 100%; height: auto;" />
  </div>
  {% endif %}
  {{ entry.content }}
</article>
{% endfor %}
