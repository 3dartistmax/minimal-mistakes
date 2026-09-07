(function () {
  "use strict";

  var filter = document.getElementById("artwork-filter");
  var cards = document.querySelectorAll("[data-artwork-search]");
  var empty = document.getElementById("artwork-empty");

  if (filter && cards.length) {
    filter.addEventListener("input", function () {
      var query = filter.value.toLowerCase().trim();
      var visible = 0;
      cards.forEach(function (card) {
        var matches = !query || card.dataset.artworkSearch.indexOf(query) !== -1;
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    });
  }

  var lightboxLinks = document.querySelectorAll("[data-lightbox]");
  if (lightboxLinks.length) {
    var lightbox = document.createElement("div");
    lightbox.className = "site-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image preview");
    lightbox.innerHTML = '<button class="site-lightbox__close" type="button" aria-label="Close image">&times;</button><img alt="">';
    document.body.appendChild(lightbox);
    var lightboxImage = lightbox.querySelector("img");
    var closeLightbox = function () {
      lightbox.classList.remove("is-open");
      lightboxImage.removeAttribute("src");
    };

    lightboxLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        lightboxImage.src = link.href;
        lightboxImage.alt = link.querySelector("img") ? link.querySelector("img").alt : "";
        lightbox.classList.add("is-open");
      });
    });
    lightbox.querySelector(".site-lightbox__close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLightbox();
    });
  }
}());
