/* ZELLART — languages (English, Français). Load after data.js, before main.js.
   Short UI strings: edit the T table [english, french]. Long texts: edit X.fr. */
(function () {
  "use strict";
  const T = [
    ["Collection","Collection"],["The atelier","L'atelier"],["Our story","Notre histoire"],["Bespoke","Sur mesure"],
    ["Chat on WhatsApp","Discuter sur WhatsApp"],["See the collection","Voir la collection"],["Request a quote","Demander un devis"],
    ["All","Tout"],["Tables","Tables"],["Fountains","Fontaines"],
    ["Ask about the craft","Poser une question sur l'artisanat"],["Talk to the atelier","Parler à l'atelier"],
    ["Start a bespoke project","Lancer un projet sur mesure"],["Explore","Explorer"],["Find us","Nous trouver"],
    ["WhatsApp the studio","Écrire sur WhatsApp"],["Fez, Morocco","Fès, Maroc"],["Home","Accueil"],
    ["Order on WhatsApp","Commander sur WhatsApp"],["Order via WhatsApp","Commander sur WhatsApp"],
    ["Ask a question","Poser une question"],["Bespoke version","Version sur mesure"],
    ["About this piece","À propos de cette pièce"],["Size shown in photos","Taille visible sur les photos"],
    ["Materials","Matériaux"],["Care","Entretien"],["Lead time","Délai de fabrication"],["What's included","Inclus"],
    ["← Back to the collection","← Retour à la collection"],["You may also like","Vous aimerez aussi"],
    ["Price on request","Prix sur demande"],["Handmade to order in Fez","Fait main sur commande à Fès"],
    ["Table","Table"],["Fountain","Fontaine"],["Occasional table","Table d'appoint"],["Piece not found","Pièce introuvable"],
    ["Size","Taille"],["Height","Hauteur"],["Length","Longueur"],["Width","Largeur"],["Depth","Profondeur"],["Weight","Poids"],["Diameter","Diamètre"],["Spout finish","Finition du robinet"],
    ["Sold by","Vendu par"],["· Fez, Morocco · Usually replies within one day","· Fès, Maroc · Répond généralement sous un jour"],
    ["© 2026 The ZELLART. Made by hand.","© 2026 The ZELLART. Fait main."],["Tiles that remember the hand","Des carreaux qui gardent la main"],
    ["Shipped worldwide","Livraison dans le monde entier"],["Door to door, fully insured","De porte à porte, entièrement assuré"],
    ["Made to order","Fait sur commande"],["Usually 4–6 weeks","Généralement 4 à 6 semaines"],
    ["Secure packing","Emballage sécurisé"],["Carefully packed for the journey","Emballé avec soin pour le voyage"],
    ["Direct from the makers","Directement des artisans"],["Reply within one day on WhatsApp","Réponse sous un jour sur WhatsApp"],
    ["How ordering works","Comment commander"],["Talk","Échangez"],["Tell us the space, the size and the colors you love.","Dites-nous l'espace, la taille et les couleurs que vous aimez."],
    ["Design","Dessin"],["We draw the pattern and confirm the price with you.","Nous dessinons le motif et confirmons le prix avec vous."],
    ["Make","Fabrication"],["The artisans cut and set every tile by hand.","Les artisans coupent et posent chaque carreau à la main."],
    ["Ship","Expédition"],["Your piece is packed, insured and sent to your door.","Votre pièce est emballée, assurée et livrée chez vous."],
    ["Start a conversation","Commencer la discussion"],["What customers say","Ce que disent nos clients"],
    ["The eight-point star","L'étoile à huit branches"],["A continuous knot","Un nœud continu"],["A garden of geometry","Un jardin de géométrie"],["The courtyard fountain","La fontaine du patio"]
  ];

  const X = {
    fr: {
      topbar: "Fait lentement à Fès, Maroc · Demandes sur mesure bienvenues",
      hero: { eyebrow: "Un art vivant de Fès", title: "Des pièces<br><em>qui ont une âme.</em>", subtitle: "Tables et fontaines en zellige taillées à la main, carreau par carreau, dans la vieille ville de Fès." },
      collection: { eyebrow: "La collection", title: "Un peu de<br><em>géométrie.</em>", note: "Tables et fontaines inspirées des patios marocains, pour les pièces qui aiment prendre leur temps." },
      atelier: { eyebrow: "Dans l'atelier", title: "La beauté est<br><em>dans le geste.</em>", body: "Le zellige n'est jamais imprimé, coulé ni parfaitement uniforme. Chaque pièce est taillée à la main, assemblée en motif, et garde un peu de son artisan.", caption: "Dans la vieille médina, au son des ciseaux et dans la lumière de l'après-midi.",
        steps: [{ n: "01", title: "Choisir un motif", text: "Commencez par un rythme qui vous ressemble." }, { n: "02", title: "Tailler chaque pièce", text: "La forme est frappée, jamais estampée." }, { n: "03", title: "Poser et sceller", text: "Une surface patiente, faite pour durer." }] },
      story: { eyebrow: "Notre histoire", title: "Un savoir-faire transmis<br><em>de main en main.</em>",
        paragraphs: ["ZELLART est né au cœur de Fès, la ville qui façonne le zellige depuis mille ans. Notre atelier est petit, nos outils sont anciens, et chaque carreau a été taillé, façonné et posé par les mêmes quatre paires de mains.", "Nous n'imprimons pas, ne coulons pas, ne produisons pas en série. Chaque pièce est faite sur commande : le motif que vous recevez a été assemblé pour vous seul. Les petites variations de ton ou de ligne sont la marque d'une vraie main, pas un défaut.", "En commandant chez nous, vous parlez directement aux artisans. Pas d'intermédiaire, pas d'entrepôt, pas de frais cachés. Une conversation, un plan, et un morceau du Maroc à votre porte."],
        values: [{ title: "Fait main à Fès", text: "Chaque pièce est façonnée dans notre atelier, jamais sous-traitée." }, { title: "Fait sur commande", text: "Nous ne taillons qu'après avoir échangé avec vous." }, { title: "Directement des artisans", text: "Vous parlez à nous, pas à un entrepôt ou un revendeur." }, { title: "Livraison mondiale", text: "Emballage soigné et assuré, du Maroc jusqu'à chez vous." }] },
      patterns: { eyebrow: "Un langage de motifs", title: "Regardez de plus près.", note: "Étoiles, nœuds, pétales et chemins : le vieux vocabulaire trouve toujours de nouvelles pièces." },
      bespoke: { eyebrow: "Faites-la vôtre", title: "Votre pièce,<br><em>votre motif.</em>", body: "Dites-nous l'espace, les couleurs, ou simplement l'ambiance. Nous dessinerons quelque chose pour vous, puis nous le réaliserons à Fès.", note: "Nous répondons généralement sous un jour" },
      footer: { tagline: "Un petit morceau de Fès pour une vie bien vécue." }
    }
  };

  let lang = "en";
  try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
  if (!["en", "fr"].includes(lang)) lang = "en";
  const idx = lang === "fr" ? 1 : 0;
  const html = document.documentElement;
  html.lang = lang;

  if (X[lang]) for (const k in X[lang]) {
    const v = X[lang][k];
    SITE.text[k] = typeof v === "object" && !Array.isArray(v) ? Object.assign({}, SITE.text[k], v) : v;
  }

  if (lang === "fr" && window.applyProductsFR) window.applyProductsFR(SITE);

  const map = new Map(T.map((r) => [r[0], r]));
  const FR = { weeks: "semaines", "Made to order": "Fait sur commande", pieces: "pièces" };

  function translate(root) {
    if (!idx) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach((n) => {
      if (/^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) return;
      const t = n.nodeValue.trim();
      if (!t) return;
      const row = map.get(t);
      let out = row ? row[idx] : null;
      if (!out) {
        const c = t.match(/^(\d+) pieces shown$/);
        if (c) out = c[1] + " " + FR.pieces;
        else if (t.startsWith("Made to order ·")) out = t.replace("Made to order", FR["Made to order"]).replace("weeks", FR.weeks);
      }
      if (out) n.nodeValue = n.nodeValue.replace(t, out);
    });
  }

  function switcher() {
    const bar = document.querySelector(".header-inner");
    if (!bar) return;
    const box = document.createElement("div");
    box.className = "lang";
    box.innerHTML = [["en", "EN"], ["fr", "FR"]]
      .map(([c, l]) => `<button type="button" data-lang="${c}" class="${c === lang ? "active" : ""}" lang="${c}">${l}</button>`).join("");
    box.addEventListener("click", (e) => {
      const b = e.target.closest("[data-lang]");
      if (!b || b.dataset.lang === lang) return;
      try { localStorage.setItem("lang", b.dataset.lang); } catch (err) {}
      location.reload();
    });
    bar.insertBefore(box, bar.querySelector(".btn") || bar.lastElementChild);
  }

  function reviews() {
    const sec = document.querySelector("[data-reviews-section]");
    if (!sec || !SITE.reviews || !SITE.reviews.length) return;
    sec.querySelector("[data-reviews]").innerHTML = SITE.reviews.map((r) =>
      `<figure class="review"><blockquote>${r.text}</blockquote><figcaption><strong>${r.name}</strong>${r.place ? ", " + r.place : ""}</figcaption></figure>`).join("");
    sec.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", () => { switcher(); reviews(); translate(document.body); });
  window.addEventListener("load", () => translate(document.body)); // catches text built by main.js / detail.js
})();
