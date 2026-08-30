---
title: Status
permalink: /status/
layout: single
---

<section class="status-list">
{% for entry in site.status reversed %}
<article class="status-item" style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #ddd;">
  <h2><a href="{{ entry.url }}">{{ entry.title }}</a></h2>
  <p style="font-size: 0.9rem; color: #666;">{{ entry.date | date: "%B %d, %Y" }}</p>
  {% if entry.image %}
  <div style="margin: 1rem 0;">
    <img src="{{ entry.image }}" alt="{{ entry.title }}" style="max-width:100%; height:auto; border-radius: 4px;" />
  </div>
  {% endif %}
  <div class="status-body">
    {{ entry.content }}
  </div>
</article>
{% endfor %}
</section>

