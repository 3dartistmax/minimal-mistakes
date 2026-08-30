---
title: Status
permalink: /status/
layout: single
---

<section class="status-list">
{% for entry in site.status reversed %}
<article class="status-item">
  <h2><a href="{{ entry.url }}">{{ entry.title }}</a></h2>
  {% if entry.image %}
  <img src="{{ entry.image }}" alt="{{ entry.title }}" style="max-width:100%;height:auto" />
  {% endif %}
  <div class="status-body">
    {{ entry.content | markdownify }}
  </div>
</article>
{% endfor %}
</section>
