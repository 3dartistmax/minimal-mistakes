---
title: Status
permalink: /status/
layout: single
---

{% for entry in site.status reversed %}
<article class="status-entry">
  <h3>{{ entry.title }}</h3>
  <small class="status-entry__date">{{ entry.date | date: "%B %d, %Y" }}</small>
  {% if entry.image %}
  <div class="status-entry__image">
    <a href="{{ entry.image | relative_url }}" data-lightbox>
      <img src="{{ entry.image | relative_url }}" alt="{{ entry.title }}" />
    </a>
  </div>
  {% endif %}
  {{ entry.content }}
</article>
{% endfor %}
