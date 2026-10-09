(function () {
  "use strict";

  const WA = (msg) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // ---- 1. URL & product
  const params  = new URLSearchParams(location.search);
  const slug    = params.get("p");
  const product = SITE.products.find((p) => p.slug === slug);

  // ---- 2. Shared text on the page
  function fillShared() {
    $("[data-site='topbar']").textContent = SITE.text.topbar;
    $("[data-site='footer.tagline']").textContent = SITE.text.footer.tagline;

    $$("[data-wa]").forEach((a) => {
      const msgs = {
        header: "Hello ZELLART, I have a question.",
        mobile: "Hello ZELLART, I have a question.",
        footer: "Hello ZELLART, I have a question."
      };
      a.href = WA(msgs[a.dataset.wa] || msgs.header);
    });
  }

  // ---- 3. Not-found state
  function renderNotFound() {
    $("[data-breadcrumb]").textContent = "Not found";
    $("[data-detail]").innerHTML = `
      <div class="not-found">
        <h1>Piece not found</h1>
        <p>This item may have been renamed or removed.</p>
        <a href="index.html#collection" class="btn btn-primary">Back to the collection</a>
      </div>`;
  }

  // ---- 4. Main render
  function renderProduct(p) {
    document.title = `${p.name} — ZELLART`;
    $("[data-breadcrumb]").textContent = p.name;

    const gallery = p.gallery?.length ? p.gallery : [p.image];

    const thumbsHTML = gallery.map((src, i) => `
      <button class="thumb ${i === 0 ? "active" : ""}" data-src="${src}">
        <img src="${src}" alt="${p.name} view ${i + 1}" loading="lazy" />
      </button>`).join("");

    const dimsHTML = p.dimensions
      ? Object.entries(p.dimensions).map(([k, v]) => `
          <div class="dim-row">
            <span class="dim-key">${k}</span>
            <span class="dim-val">${v}</span>
          </div>`).join("")
      : "";

    const optionsHTML = p.options ? `
      <div class="option-block">
        <label class="option-label" for="opt">${p.options.label}</label>
        <select id="opt" class="option-select" data-option>
          ${p.options.values.map((v, i) =>
            `<option value="${v}" ${i === 0 ? "selected" : ""}>${v}</option>`).join("")}
        </select>
      </div>` : "";

    const includesHTML = p.includes?.length ? `
      <div class="detail-block">
        <h3>What's included</h3>
        <ul class="includes-list">
          ${p.includes.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </div>` : "";

    const waMessage = () => {
      const opt = $("[data-option]");
      const optPart = opt ? ` (${p.options.label}: ${opt.value})` : "";
      return `Hello ZELLART, I would like to order the ${p.name}${optPart}. Could you please send me the price and shipping details?`;
    };

    $("[data-detail]").innerHTML = `
      <!-- LEFT: gallery -->
      <div class="gallery">
        <div class="gallery-thumbs">${thumbsHTML}</div>
        <div class="gallery-main">
          <img id="mainImage" src="${gallery[0]}" alt="${p.name}" />
        </div>
      </div>

      <!-- RIGHT: info -->
      <div class="detail-info">
        <span class="detail-type">${p.type}</span>
        <h1 class="detail-title">${p.name}</h1>

        <div class="detail-rating">
          
          <span>Handmade to order in Fez</span>
        </div>

        <p class="detail-price-note">${p.priceNote || "Price on request"}</p>

        ${optionsHTML}

        <button class="order-btn" data-order>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V6a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M14 4v6h6"/></svg>
          Order via WhatsApp
        </button>

        <div class="detail-secondary-actions">
          <a href="${WA("Hello ZELLART, I have a question about " + p.name + ".")}" target="_blank" rel="noreferrer">Ask a question</a>
          <a href="index.html#bespoke">Bespoke version</a>
        </div>

        <p class="detail-seller-note">
          Sold by <strong>ZELLART</strong> · Fez, Morocco · Usually replies within one day
        </p>

        ${p.description ? `
          <div class="detail-block">
            <h3>About this piece</h3>
            <p>${p.description}</p>
          </div>` : ""}

        ${dimsHTML ? `
          <div class="detail-block">
            <h3>Size shown in photos</h3>
            <div class="dim-table">${dimsHTML}</div>
          </div>` : ""}

        ${p.materials ? `
          <div class="detail-block">
            <h3>Materials</h3>
            <p>${p.materials}</p>
          </div>` : ""}

        ${p.care ? `
          <div class="detail-block">
            <h3>Care</h3>
            <p>${p.care}</p>
          </div>` : ""}

        ${p.lead ? `
          <div class="detail-block">
            <h3>Lead time</h3>
            <p>${p.lead}</p>
          </div>` : ""}

        ${includesHTML}

        <a class="detail-back" href="index.html#collection">
          ← Back to the collection
        </a>
      </div>
    `;

    initThumbs();
    initLightbox(gallery);
    initOrderButton(waMessage);
    initStickyBar(p);
  }

  // ---- 5. Thumbnails
  function initThumbs() {
    const main = $("#mainImage");
    $$(".thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        main.src = btn.dataset.src;
        $$(".thumb").forEach((b) => b.classList.toggle("active", b === btn));
      });
    });
  }

  // ---- 6. Lightbox (click-to-zoom)
  function initLightbox(gallery) {
    const box      = $("[data-lightbox]");
    const boxImg   = $("[data-lightbox-img]");
    const btnClose = $("[data-lightbox-close]");
    const btnPrev  = $("[data-lightbox-prev]");
    const btnNext  = $("[data-lightbox-next]");
    const main     = $("#mainImage");

    let current = 0;

    function open(index) {
      current = index;
      boxImg.src = gallery[current];
      box.hidden = false;
      requestAnimationFrame(() => box.classList.add("visible"));
      document.body.style.overflow = "hidden";
    }

    function close() {
      box.classList.remove("visible");
      setTimeout(() => {
        box.hidden = true;
        document.body.style.overflow = "";
      }, 250);
    }

    function next() { current = (current + 1) % gallery.length; boxImg.src = gallery[current]; }
    function prev() { current = (current - 1 + gallery.length) % gallery.length; boxImg.src = gallery[current]; }

    main.addEventListener("click", () => {
      const src = main.src;
      const idx = gallery.findIndex((g) => src.endsWith(g.split("/").pop()));
      open(idx >= 0 ? idx : 0);
    });

    btnClose.addEventListener("click", close);
    btnNext.addEventListener("click", next);
    btnPrev.addEventListener("click", prev);
    box.addEventListener("click", (e) => { if (e.target === box) close(); });

    document.addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape")     close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    });
  }

  // ---- 7. Order button
  function initOrderButton(messageFn) {
    $("[data-order]").addEventListener("click", () => {
      window.open(WA(messageFn()), "_blank");
    });
  }

  // ---- 8. Sticky bar
  function initStickyBar(product) {
    const bar = $("[data-order-bar]");
    bar.hidden = false;

    $("[data-ob-image]").src = product.image;
    $("[data-ob-name]").textContent = product.name;
    $("[data-ob-price]").textContent = product.priceNote || "Price on request";

    $("[data-ob-cta]").addEventListener("click", () => {
      $("[data-order]").click();
    });

    const orderBtn = $("[data-order]");
    const observer = new IntersectionObserver(([entry]) => {
      bar.classList.toggle("visible", !entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(orderBtn);
  }

  // ---- 9. Related products
  function renderRelated(p) {
    const others = SITE.products
      .filter((x) => x.slug !== p.slug && x.category === p.category)
      .slice(0, 4);

    if (!others.length) return;

    const section = document.createElement("section");
    section.className = "related";
    section.innerHTML = `
      <div class="container">
        <h2>You may also like</h2>
        <div class="related-grid">
          ${others.map((o) => `
            <a class="related-card" href="detail.html?p=${o.slug}">
              <div class="image-wrap"><img src="${o.image}" alt="${o.name}" loading="lazy" /></div>
              <h3>${o.name}</h3>
              <p>${o.priceNote || "Price on request"}</p>
            </a>`).join("")}
        </div>
      </div>`;
    $("[data-detail]").after(section);
  }

  // ---- Boot
  document.addEventListener("DOMContentLoaded", () => {
    fillShared();
    if (!product) {
      renderNotFound();
      return;
    }
    renderProduct(product);
    renderRelated(product);
  });
})();