---
title: "कलासंग्रह"
permalink: /artworks/
layout: single
---

<label for="artwork-filter">कला खोज्नुहोस्</label>
<input id="artwork-filter" class="artwork-filter" type="search" placeholder="शीर्षक वा विवरण..." aria-label="कला खोज्नुहोस्">

<div class="artwork-grid" id="artwork-grid">
{% for artwork in site.artworks %}
  <figure class="artwork-card" data-artwork-search="{{ artwork.title | append: ' ' | append: artwork.description | downcase | escape }}">
    {% if artwork.image %}
    <a href="{{ artwork.image | relative_url }}" class="artwork-card__link" data-lightbox>
      <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
    </a>
    {% endif %}
    <figcaption>
      <a href="{{ artwork.url | relative_url }}"><strong>{{ artwork.title }}</strong></a>
      {% if artwork.description %}<br><small>{{ artwork.description }}</small>{% endif %}
    </figcaption>
  </figure>
{% endfor %}
</div>
<p id="artwork-empty" class="notice" hidden>कुनै कला भेटिएन।</p>
