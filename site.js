(function () {
  "use strict";

  var galleries = window.PORTFOLIO_MEDIA || {};
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function makeImage(src, alt) {
    var image = document.createElement("img");
    image.src = src;
    image.alt = alt || "";
    image.loading = "lazy";
    image.decoding = "async";
    return image;
  }

  function makeFigure(item, fallbackPoster) {
    var figure = document.createElement("figure");
    figure.className = "media-figure";

    if (item.type === "video") {
      var video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.preload = "metadata";
      video.playsInline = true;
      video.setAttribute("aria-label", item.alt || item.caption || "Gameplay clip");
      if (item.poster) video.poster = item.poster;
      figure.appendChild(video);
    } else if (item.type === "youtube") {
      var preview = document.createElement("button");
      preview.type = "button";
      preview.className = "youtube-preview";
      preview.setAttribute("aria-label", item.alt || "Play gameplay clip");
      preview.appendChild(makeImage(item.poster || fallbackPoster, ""));

      var playPill = document.createElement("span");
      playPill.className = "play-pill";
      var playIcon = document.createElement("span");
      playIcon.className = "play-triangle";
      playIcon.setAttribute("aria-hidden", "true");
      playPill.appendChild(playIcon);
      playPill.appendChild(document.createTextNode("Play clip"));
      preview.appendChild(playPill);

      preview.addEventListener("click", function () {
        var frame = document.createElement("iframe");
        frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(item.id) + "?autoplay=1";
        frame.title = item.caption || "Gameplay clip";
        frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        frame.allowFullscreen = true;
        preview.replaceWith(frame);
        frame.focus();
      });
      figure.appendChild(preview);
    } else {
      figure.appendChild(makeImage(item.src, item.alt));
    }

    var caption = document.createElement("figcaption");
    caption.textContent = item.caption || "Project media";
    figure.appendChild(caption);
    return figure;
  }

  function makeThumbnail(item, index, activeIndex, fallbackPoster, select) {
    var button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", "Show " + (item.caption || "media " + (index + 1)));
    button.setAttribute("aria-current", index === activeIndex ? "true" : "false");
    button.appendChild(makeImage(item.poster || item.src || fallbackPoster, ""));

    if (item.type === "video" || item.type === "youtube") {
      var play = document.createElement("span");
      play.className = "thumbnail-play";
      play.setAttribute("aria-hidden", "true");
      play.textContent = "\u25b6";
      button.appendChild(play);
    }

    button.addEventListener("click", function () { select(index); });
    return button;
  }

  document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
    var key = gallery.getAttribute("data-gallery");
    var items = galleries[key];
    if (!Array.isArray(items) || items.length === 0) return;

    var stage = gallery.querySelector("[data-stage]");
    var count = gallery.querySelector("[data-count]");
    var thumbnails = gallery.querySelector("[data-thumbnails]");
    var previous = gallery.querySelector("[data-prev]");
    var next = gallery.querySelector("[data-next]");
    if (!stage || !count || !thumbnails || !previous || !next) return;

    var fallback = items.find(function (item) {
      return item.type === "cover" || item.type === "image" || item.type === "gif";
    });
    var fallbackPoster = fallback ? fallback.src : "";
    var activeIndex = 0;

    function select(index) {
      activeIndex = (index + items.length) % items.length;
      stage.replaceChildren(makeFigure(items[activeIndex], fallbackPoster));
      count.textContent = String(activeIndex + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
      thumbnails.replaceChildren();
      items.forEach(function (item, itemIndex) {
        thumbnails.appendChild(makeThumbnail(item, itemIndex, activeIndex, fallbackPoster, select));
      });
    }

    previous.addEventListener("click", function () { select(activeIndex - 1); });
    next.addEventListener("click", function () { select(activeIndex + 1); });
    previous.disabled = items.length < 2;
    next.disabled = items.length < 2;

    gallery.addEventListener("keydown", function (event) {
      if (items.length < 2 || event.target.tagName === "VIDEO") return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        select(activeIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        select(activeIndex + 1);
      }
    });

    select(0);
    gallery.classList.add("is-ready");
    gallery.classList.toggle("has-multiple", items.length > 1);
  });
})();
