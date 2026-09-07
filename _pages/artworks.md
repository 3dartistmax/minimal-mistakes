---
title: "कलासंग्रह"
permalink: /artworks/
layout: single
---

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
{% for artwork in site.artworks %}
  <figure style="margin: 0;">
    <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}" style="width: 100%; height: auto; display: block;" />
    <figcaption style="padding-top: 0.6rem;">
      <strong>{{ artwork.title }}</strong>
      {% if artwork.description %}<br><small>{{ artwork.description }}</small>{% endif %}
    </figcaption>
  </figure>
{% endfor %}
</div>
