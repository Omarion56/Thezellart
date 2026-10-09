// ============================================================
// ZELLART — Site configuration
// Edit everything here. No need to touch HTML or CSS.
// ============================================================

const SITE = {
  // Real customer reviews: add entries and a "What customers say" section appears.
  // Example: { name: "Sarah", place: "London", text: "The table arrived perfectly packed." }
  reviews: [],

  // WhatsApp number (international format, no +, no spaces)
  whatsapp: "212636563613",

  // ============================================================
  // TEXT CONTENT (used on all pages)
  // ============================================================
  text: {
    topbar: "Made slowly in Fez, Morocco · Bespoke enquiries welcome",

    hero: {
      eyebrow: "A living craft from Fez",
      title: "Pieces<br><em>with soul.</em>",
      subtitle: "Hand-cut Zellige tables and fountains, made one tile at a time in the old city of Fez.",
      stats: [
        { value: "1", label: "atelier" },
        { value: "∞", label: "patterns" },
        { value: "0", label: "shortcuts" }
      ]
    },

    collection: {
      eyebrow: "The collection",
      title: "A little<br><em>geometry.</em>",
      note: "Tables and fountains shaped by the language of Moroccan courtyards — made for rooms that value a slower rhythm."
    },

    atelier: {
      eyebrow: "Inside the atelier",
      title: "The beauty is<br><em>in the making.</em>",
      body: "Zellige is never printed, poured, or perfectly uniform. Each piece is shaped by hand, set into a pattern, and allowed to keep a little of its maker in the surface.",
      caption: "In the old medina, under the sound of chisels and the afternoon light.",
      steps: [
        { n: "01", title: "Choose a pattern", text: "Start with a rhythm that feels like yours." },
        { n: "02", title: "Cut each piece",   text: "The shape is struck, not stamped." },
        { n: "03", title: "Set and seal",     text: "A patient surface, made to live with." }
      ]
    },

    story: {
      eyebrow: "Our story",
      title: "A craft passed<br><em>from hand to hand.</em>",
      paragraphs: [
        "ZELLART was born in the heart of Fez — the city that has shaped Zellige for a thousand years. Our workshop is small, our tools are old, and every tile that leaves here was cut, shaped, and set by the same four pairs of hands.",
        "We don't print, pour, or mass-produce. Each piece is made to order, one commission at a time, so the pattern you receive was assembled for you and no one else. If there are small variations in tone or line, that's the mark of a real hand — not a flaw.",
        "When you order from us, you speak directly with the makers. No middlemen, no warehouse, no hidden costs. Just a conversation, a plan, and a piece of Morocco arriving at your door."
      ],
      values: [
        { title: "Handmade in Fez",        text: "Every piece shaped in our own workshop — never outsourced." },
        { title: "Made to order",          text: "We start cutting only after we've spoken with you." },
        { title: "Direct from the makers", text: "You talk to us, not to a warehouse or a reseller." },
        { title: "Shipped worldwide",      text: "Carefully packed and insured from Morocco to your door." }
      ]
    },

    patterns: {
      eyebrow: "A language of pattern",
      title: "Look closer.",
      note: "Stars, knots, petals, and paths — the old vocabulary keeps finding new rooms."
    },

    bespoke: {
      eyebrow: "Make it yours",
      title: "Your room,<br><em>your pattern.</em>",
      body: "Tell us the space, the colors, or simply the feeling. We will draw up something made for you, then bring it to life in Fez.",
      note: "We usually reply within one day"
    },

    footer: {
      tagline: "A small piece of Fez for a life well lived."
    }
  },

  // ============================================================
  // PRODUCTS
  // ============================================================
  products: [

    {
      slug: "atlas-blue",
      name: "Atlas Blue",
      type: "Table",
      category: "Tables",
      image: "images/atlas-blue.jpg",
      gallery: ["images/atlas-blue.jpg", "images/atlas-blue-1.jpg", "images/atlas-blue-2.jpg"],
      note: "Deep cobalt, set in a quiet rhythm.",
      priceNote: "Price on request",
      description:
        "A rectangular table in deep cobalt, its pattern repeating like a slow drumbeat. The rhythm is interrupted only by the natural imperfection of hand-cut tile.",
      options: {
        label: "Size",
        values: ["90 × 50 cm", "120 × 60 cm", "140 × 70 cm"]
      },
      dimensions: {
        "Length": "120 cm",
        "Width": "60 cm",
        "Height": "45 cm",
        "Weight": "≈ 42 kg"
      },
      materials: "Cobalt & ivory Zellige · steel base",
      care: "Indoor use. Dust with a soft cloth.",
      lead: "Made to order · 4–6 weeks",
      includes: ["Handmade to order", "Certificate of origin", "Care guide"]
    },

    {
      slug: "courtyard",
      name: "The Courtyard",
      type: "Table",
      category: "Tables",
      image: "images/courtyard.jpg",
      gallery: ["images/courtyard.jpg", "images/courtyard-1.jpg" , "images/courtyard-2.jpg"],
      note: "An everyday table with an heirloom soul.",
      priceNote: "Price on request",
      description:
        "A square table that borrows its geometry from the old medina courtyards — simple, warm, and built to be lived with.",
      options: {
        label: "Size",
        values: ["60 × 60 cm", "80 × 80 cm"]
      },
      dimensions: { "Length": "80 cm", "Width": "80 cm", "Height": "45 cm", "Weight": "≈ 35 kg" },
      materials: "Glazed Zellige · iron base",
      care: "Indoor use. Wipe with a damp cloth.",
      lead: "Made to order · 4–6 weeks",
      includes: ["Handmade to order", "Care guide"]
    },

    {
      slug: "sahara-steps",
      name: "Sahara Steps",
      type: "Occasional table",
      category: "Tables",
      image: "images/sahara-steps.jpg",
      gallery: ["images/sahara-steps.jpg" , "images/sahara-steps-1.jpg", "images/sahara-steps-2.jpg"],
      note: "A small footprint, a graphic gesture.",
      priceNote: "Price on request",
      description:
        "A small occasional table with a bold chevron pattern — the sort of piece that lifts a corner of a room without asking for attention.",
      options: {
        label: "Size",
        values: ["45 × 45 cm", "55 × 55 cm"]
      },
      dimensions: { "Length": "45 cm", "Width": "45 cm", "Height": "45 cm", "Weight": "≈ 18 kg" },
      materials: "Glazed Zellige · iron base",
      care: "Indoor use.",
      lead: "Made to order · 3–5 weeks",
      includes: ["Handmade to order", "Care guide"]
    },

    {
      slug: "blue-star",
      name: "Blue Star",
      type: "Table",
      category: "Tables",
      image: "images/blue-star.jpg",
      gallery: ["images/blue-star.jpg", "images/blue-star-1.jpg", "images/blue-star-2.jpg"],
      note: "A meditative pattern, cut by hand.",
      priceNote: "Price on request",
      description:
        "A single eight-point star, patiently repeated until the surface hums with quiet geometry.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm","Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: { "Diameter": "80 cm", "Height": "45 cm", "Weight": "≈ 30 kg" },
      materials: "Zellige · iron base",
      care: "Indoor use.",
      lead: "Made to order · 4–6 weeks",
      includes: ["Handmade to order", "Care guide"]
    },

    {
      slug: "mint-hour",
      name: "Mint Hour",
      type: "Table",
      category: "Tables",
      image: "images/mint-hour.jpg",
      gallery: ["images/mint-hour.jpg", "images/mint-hour-1.jpg", "images/mint-hour-2.jpg"],
      note: "Soft green geometry for slow afternoons.",
      priceNote: "Price on request",
      description:
        "Soft green tile in a calm rhythm — a table for long afternoons and slow conversations.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm" ,"Ø 100 cm"]
      },
      dimensions: { "Diameter": "80 cm", "Height": "45 cm", "Weight": "≈ 32 kg" },
      materials: "Green Zellige · iron base",
      care: "Indoor use.",
      lead: "Made to order · 4–6 weeks",
      includes: ["Handmade to order", "Care guide"]
    },

    {
      slug: "riad-fountain",
      name: "The Riad Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/riad-fountain.jpg",
      gallery: [
        "images/riad-fountain.jpg",
        "images/riad-fountain-1.jpg",
        "images/riad-fountain-2.jpg"
      ],
      note: "A small, living piece of the courtyard.",
      priceNote: "Price on request",
      description:
        "A wall fountain, hand-tiled in the traditional Fez manner, with a brass spout and a curved basin. It brings the sound of water into a room without taking up much floor space.",
      options: {
        label: "Spout finish",
        values: ["Brass (gold)", "Nickel (silver)", "Bronze (dark)"]
      },
      dimensions: {
        "Height": "120 cm",
        "Width": "60 cm",
        "Depth": "35 cm",
        "Weight": "≈ 85 kg"
      },
      materials: "Zellige tile · brass spout · reinforced concrete body",
      care: "Wipe tiles with a damp cloth. Empty and dry the basin before long storage periods.",
      lead: "Made to order · 6–8 weeks",
      includes: ["Handmade to order", "Brass spout included", "Certificate of origin", "Care guide"]
    },

    {
      slug: "green-fountain",
      name: "Green Zellige Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/green-fountain.jpg",
      gallery: ["images/green-fountain.jpg", "images/green-fountain-1.jpg"],
      note: "Water, tile, and the shade of a palm.",
      priceNote: "Price on request",
      description:
        "A deep green fountain in the palette of palm shade and old plaster. Quiet, cool, and unmistakably Moroccan.",
      options: {
        label: "Spout finish",
        values: ["Brass (gold)", "Bronze (dark)"]
      },
      dimensions: { "Height": "110 cm", "Width": "55 cm", "Depth": "30 cm", "Weight": "≈ 78 kg" },
      materials: "Green Zellige tile · brass spout · concrete body",
      care: "Wipe with damp cloth. Empty basin before storage.",
      lead: "Made to order · 6–8 weeks",
      includes: ["Handmade to order", "Brass spout included", "Care guide"]
    },

    {
      slug: "fez-rectangular-crimson",
      name: "The Fez Rectangular",
      type: "Table",
      category: "Tables",
      image: "images/1/fez-rectangular-crimson-1.jpg",
      gallery: [
        "images/1/fez-rectangular-crimson-1.jpg",
        "images/1/fez-rectangular-crimson-2.jpg",
        "images/1/fez-rectangular-crimson-3.jpg",
        "images/1/fez-rectangular-crimson-4.jpg",
        "images/1/fez-rectangular-crimson-5.jpg",
        "images/1/fez-rectangular-crimson-6.jpg"
      ],
      note: "A rich crimson mosaic centerpiece for timeless gatherings.",
      priceNote: "Price on request",
      description:
        "A striking rectangular tabletop assembled from hundreds of hand-cut crimson tiles, featuring a concentric radiating medallion framed by a geometric diamond border. Each piece is individually set by hand, ensuring a completely unique work of art. Supported by a sturdy hand-forged iron base, it balances a bold artisanal presence with enduring structural elegance.",
      options: {
        label: "Size",
        values: ["120 × 60 cm", "140 × 70 cm", "160 × 80 cm", "180 × 90 cm"]
      },
      dimensions: {
        "Length": "160 cm",
        "Width": "80 cm",
        "Height": "75 cm",
        "Weight": "≈ 55 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "atlas-verdant",
      name: "The Atlas Verdant",
      type: "Table",
      category: "Tables",
      image: "images/2/atlas-verdant.jpg",
      gallery: [
        "images/2/atlas-verdant.jpg",
        "images/2/atlas-verdant-1.jpg",
        "images/2/atlas-verdant-2.jpg",
        "images/2/atlas-verdant-3.jpg",
      ],
      note: "An emerald mosaic masterpiece for tranquil gatherings.",
      priceNote: "Price on request",
      description:
        "A round tabletop crafted from deep emerald and forest green hand-cut tiles, capturing the rich, earthy tones of Moroccan hillsides. Each zellige piece is laid by eye in an intricate geometric layout, ensuring a completely unique heirloom finish. Supported by a sturdy hand-forged iron base that balances structural strength with a graceful silhouette.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: {
        "Diameter": "90 cm",
        "Height": "45 cm",
        "Weight": "≈ 38 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "medina-star",
      name: "The Medina Star",
      type: "Table",
      category: "Tables",
      image: "images/3/medina-star.jpg",
      gallery: [
        "images/3/medina-star.jpg",
        "images/3/medina-star-2.jpg",
        "images/3/medina-star-3.jpg",
        "images/3/medina-star-4.jpg",
        "images/3/medina-star-5.jpg"
      ],
      note: "A radiant geometric masterpiece capturing the warmth of Moroccan courtyards.",
      priceNote: "Price on request",
      description:
        "A stunning round tabletop featuring a complex, radiating star mosaic pattern crafted from hundreds of hand-cut tiles in rich amber, deep green, and earthy tones. Every tile is meticulously set by eye, ensuring a completely unique artisan finish. Supported by a hand-forged iron base with delicate scrollwork details that balances visual lightness with lasting heirloom durability.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: {
        "Diameter": "90 cm",
        "Height": "45 cm",
        "Weight": "≈ 38 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "fez-fountain",
      name: "The Fez Wall Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/15/fez-fountain.jpg",
      gallery: [
        "images/15/fez-fountain.jpg",
        "images/15/fez-fountain-2.jpg",
        "images/15/fez-fountain-3.jpg",
        "images/15/fez-fountain-4.jpg",
        "images/15/fez-fountain-5.jpg",
        "images/15/fez-fountain-6.jpg",
        "images/15/fez-fountain-7.jpg",
        "images/15/fez-fountain-8.jpg",
        "images/15/fez-fountain-9.jpg"
      ],
      note: "A statement mosaic water feature featuring traditional Moorish arch detailing.",
      priceNote: "Price on request",
      description:
        "An architectural wall fountain crafted from hand-cut terracotta zellige tiles and framed with a sculpted marble basin and a solid brass spigot. The intricate geometric repeating patterns and classic keyhole arch silhouette capture the timeless artisanal heritage of Fez. Designed to bring a calming, meditative atmosphere and a true sense of Moroccan craftsmanship to any courtyard, garden wall, or grand interior.",
      options: {
        label: "Height Size",
        values: ["80 cm", "100 cm", "120 cm"]
      },
      dimensions: {
        "Height": "100 cm",
        "Width": "65 cm",
        "Depth": "30 cm",
        "Weight": "≈ 45 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · white marble basin · hand-carved brass spout · reinforced concrete backing",
      care: "Wipe tiles with a damp cloth. Clean the brass spout periodically. Protect against freezing temperatures during winter if installed outdoors.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Hand-carved brass spigot included",
        "Integrated white marble basin",
        "Certificate of origin",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "fez-1-fountain",
      name: "The Fez Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/13/fez-fountaint.jpg",
      gallery: [
        "images/13/fez-fountaint.jpg",
        "images/13/fez-fountaint-2.jpg",
        "images/13/fez-fountaint-3.jpg",
        "images/13/fez-fountaint-4.jpg",
        "images/13/fez-fountaint-5.jpg",
        "images/13/fez-fountaint-6.jpg",
        "images/13/fez-fountaint-7.jpg",
        "images/13/fez-fountaint-8.jpg",
        "images/13/fez-fountaint-9.jpg",
      ],
      note: "A statement mosaic water feature featuring traditional Moorish arch detailing.",
      priceNote: "Price on request",
      description:
        "An architectural wall fountain crafted from hand-cut terracotta zellige tiles and framed with a sculpted marble basin and a solid brass spigot. The intricate geometric repeating patterns and classic keyhole arch silhouette capture the timeless artisanal heritage of Fez. Designed to bring a calming, meditative atmosphere and a true sense of Moroccan craftsmanship to any courtyard, garden wall, or grand interior.",
      options: {
        label: "Height Size",
        values: ["80 cm", "100 cm", "120 cm"]
      },
      dimensions: {
        "Height": "100 cm",
        "Width": "65 cm",
        "Depth": "30 cm",
        "Weight": "≈ 45 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · white marble basin · hand-carved brass spout · reinforced concrete backing",
      care: "Wipe tiles with a damp cloth. Clean the brass spout periodically. Protect against freezing temperatures during winter if installed outdoors.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Hand-carved brass spigot included",
        "Integrated white marble basin",
        "Certificate of origin",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "fez-round-mosaic",
      name: "The Fez Mosaic Solstice Table",
      type: "Table",
      category: "Tables",
      image: "images/6/fez-round.jpg",
      gallery: [
        "images/6/fez-round.jpg",
        "images/6/fez-round-2.jpg",
        "images/6/fez-round-3.jpg",
        "images/6/fez-round-4.jpg",
      ],
      note: "A generous mosaic sun for gathering.",
      priceNote: "Price on request",
      description:
        "A round tabletop assembled from hundreds of hand-cut tiles, its radiating star pattern echoing the courtyards of Fez. Each piece is set by eye, so no two tables are identical. The hand-forged iron base keeps the silhouette light while holding the weight of a true heirloom.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: {
        "Diameter": "90 cm",
        "Height": "45 cm",
        "Weight": "≈ 38 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
        slug: "fez-emerald-square",
      name: "The Fez Emerald Square Table",
      type: "Table",
      category: "Tables",
      image: "images/4/fez-emerald.jpg",
      gallery: [
        "images/4/fez-emerald.jpg",
        "images/4/fez-emerald-2.jpg",
        "images/4/fez-emerald-3.jpg",
        "images/4/fez-emerald-4.jpg",
        "images/4/fez-emerald-5.jpg",
        "images/4/fez-emerald-6.jpg",
        "images/4/fez-emerald-7.jpg"
      ],
      note: "A rich emerald mosaic surface crafted for timeless dining.",
      priceNote: "Price on request",
      description:
        "A striking square tabletop featuring deep green glazed zellige tiles arranged in a classic geometric layout, framed by a precise contrasting border. Each tile is hand-chiseled and set by master artisans in Fez, ensuring an authentic touch. Supported by a robust hand-forged iron base designed for both elegance and lasting stability.",
      options: {
        label: "Size",
        values: ["60 x 60 cm", "80 x 80 cm", "100 x 100 cm"]
      },
      dimensions: {
        "Width": "90 cm",
        "Length": "90 cm",
        "Height": "75 cm",
        "Weight": "≈ 40 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "fez-andalusian-fountain",
      name: "The Fez Andalusian Wall Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/11/fez-fountain-andalusian.jpg",
      gallery: [
        "images/11/fez-fountain-andalusian.jpg",
        "images/11/fez-fountain-andalusian-2.jpg",
        "images/11/fez-fountain-andalusian-3.jpg",
        "images/11/fez-fountain-andalusian-4.jpg",
        "images/11/fez-fountain-andalusian-5.jpg",
        "images/11/fez-fountain-andalusian-6.jpg",
        "images/11/fez-fountain-andalusian-7.jpg"
      ],
      note: "An exquisite Moroccan water feature with traditional arched framing.",
      priceNote: "Price on request",
      description:
        "A stunning architectural wall fountain featuring handcrafted zellige tilework in rich azure, terracotta, and soft neutral tones. The centerpiece showcases an intricate geometric rosette framed by a majestic Moorish archway, complemented by a solid brass spigot and a curved basin. Hand-assembled by master artisans in Fez to bring authentic Moroccan heritage into your space.",
      options: {
        label: "Height Size",
        values: ["80 cm", "100 cm", "120 cm"]
      },
      dimensions: {
        "Height": "100 cm",
        "Width": "65 cm",
        "Depth": "30 cm",
        "Weight": "≈ 45 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-carved brass spout · reinforced concrete backing · natural lime mortar",
      care: "Wipe tiles with a damp cloth. Clean the brass spout periodically. Protect against freezing temperatures during winter if installed outdoors.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Hand-carved brass spigot included",
        "Integrated mosaic basin",
        "Certificate of origin",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "crimson-fez-mosaic1",
      name: "The Crimson Fez Mosaic Table",
      type: "Table",
      category: "Tables",
      image: "images/5/crimson-fez-round.jpg",
      gallery: [
        "images/5/crimson-fez-round.jpg",
        "images/5/crimson-fez-round-2.jpg",
        "images/5/crimson-fez-round-3.jpg",
        "images/5/crimson-fez-round-4.jpg",
        "images/5/crimson-fez-round-5.jpg",
        "images/5/crimson-fez-round-6.jpg",
        "images/5/crimson-fez-round-7.jpg"
      ],
      note: "A warm, intricate mosaic centerpiece capturing timeless Moroccan craftsmanship.",
      priceNote: "Price on request",
      description:
        "A striking round mosaic tabletop featuring deep crimson, soft blush, and midnight star-burst motifs hand-cut from traditional glazed tiles. Every individual piece is meticulously set by hand in geometric harmony, reflecting centuries of artisanal heritage from Fez. Supported by a sleek, hand-forged black iron base that ensures structural elegance and lifelong durability.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: {
        "Diameter": "90 cm",
        "Height": "45 cm",
        "Weight": "≈ 38 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "fez-round",
      name: "The Fez Round",
      type: "Table",
      category: "Tables",
      image: "images/fez-round.jpg",
      gallery: [
        "images/fez-round.jpg",
        "images/fez-round1.jpg",
        "images/fez-round2.jpg"
      ],
      note: "A generous mosaic sun for gathering.",
      priceNote: "Price on request",
      description:
        "A round tabletop assembled from hundreds of hand-cut tiles, its radiating star pattern echoing the courtyards of Fez. Each piece is set by eye, so no two tables are identical. The hand-forged iron base keeps the silhouette light while holding the weight of a true heirloom.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: {
        "Diameter": "90 cm",
        "Height": "45 cm",
        "Weight": "≈ 38 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "cobalt-fez-mosaic1",
      name: "The Cobalt Fez Mosaic Table",
      type: "Table",
      category: "Tables",
      image: "images/8/cobalt-fez-round.jpg",
      gallery: [
        "images/8/cobalt-fez-round.jpg",
        "images/8/cobalt-fez-round-2.jpg",
        "images/8/cobalt-fez-round-3.jpg",
        "images/8/cobalt-fez-round-4.jpg",
        "images/8/cobalt-fez-round-5.jpg"
      ],
      note: "A striking geometric mosaic masterpiece inspired by traditional Moroccan artistry.",
      priceNote: "Price on request",
      description:
        "An exquisite round tabletop meticulously hand-assembled from hundreds of hand-cut cobalt blue and crisp white glazed tiles, punctuated with warm golden yellow accents. The intricate star-burst pattern reflects the time-honored mosaic traditions of Fez. Each piece is set by eye to create a unique surface, supported by a durable hand-forged iron base that pairs lightness with heirloom-quality strength.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: {
        "Diameter": "90 cm",
        "Height": "45 cm",
        "Weight": "≈ 38 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "emerald-atlas-fountain",
      name: "The Emerald Atlas Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/12/emerald-atlas-fountain.jpg",
      gallery: [
        "images/12/emerald-atlas-fountain.jpg",
        "images/12/emerald-atlas-fountain-2.jpg",
        "images/12/emerald-atlas-fountain-3.jpg",
        "images/12/emerald-atlas-fountain-4.jpg",
        "images/12/emerald-atlas-fountain-5.jpg",
        "images/12/emerald-atlas-fountain-6.jpg",
        "images/12/emerald-atlas-fountain-7.jpg",
        "images/12/emerald-atlas-fountain-8.jpg",
        "images/12/emerald-atlas-fountain-9.jpg"
      ],
      note: "A majestic cascade of emerald zellige capturing the serenity of Moroccan courtyards.",
      priceNote: "Price on request",
      description:
        "An arresting freestanding wall fountain handcrafted from rich emerald-green glazed zellige tiles, featuring a classic Moorish pointed arch backdrop and an integrated basin. Every individual tile is hand-cut and pieced together by master artisans, crowned with an ornate solid brass spigot. Designed to bring the soothing sound of flowing water and timeless North African elegance to any garden, patio, or interior sanctuary.",
      options: {
        label: "Size",
        values: ["Standard (H 110 cm)", "Grand (H 130 cm)"]
      },
      dimensions: {
        "Width": "80 cm",
        "Depth": "45 cm",
        "Height": "110 cm",
        "Weight": "≈ 75 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · reinforced concrete core · solid brass spigot",
      care: "Wipe tiles with a damp cloth. Drain water during freezing winter conditions. Use natural cleaners to protect brass fittings.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Solid brass spigot included",
        "Certificate of origin",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "andalusian-sun-mosaic",
      name: "The Andalusian Sun Mosaic Table",
      type: "Table",
      category: "Tables",
      image: "images/18/andalusian-sun-round.jpg",
      gallery: [
        "images/18/andalusian-sun-round.jpg",
        "images/18/andalusian-sun-round-2.jpg",
        "images/18/andalusian-sun-round-3.jpg",
        "images/18/andalusian-sun-round-4.jpg",
        "images/18/andalusian-sun-round-5.jpg",
        "images/18/andalusian-sun-round-6.jpg"
      ],
      note: "A magnificent mosaic sunburst radiating warmth and rich heritage.",
      priceNote: "Price on request",
      description:
        "An exquisite and vibrant round tabletop composed of hundreds of hand-cut glazed zellige tiles, featuring a stunning central medallion and radiating star motifs in rich terracotta, cobalt blue, warm ochre, and soft mint. Handcrafted by master artisans in Fez, each piece is uniquely placed to form an heirloom-quality centerpiece. It rests upon a sturdy, hand-forged black iron base designed for classic elegance and lasting durability.",
      options: {
        label: "Size",
        values: ["Ø 60 cm", "Ø 80 cm", "Ø 90 cm", "Ø 100 cm"]
      },
      dimensions: {
        "Diameter": "90 cm",
        "Height": "45 cm",
        "Weight": "≈ 38 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe with a damp cloth. Suitable for indoor use or a covered terrace. Avoid acid cleaners.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "andalusian-garden-wall-fountain",
      name: "The Andalusian Garden Wall Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/14/il_1588xN.7132664232_8pbp.jpg",
      gallery: [
        "images/14/il_1588xN.7132664232_8pbp.jpg",
        "images/14/il_1588xN.7132664284_4r9b.jpg",
        "images/14/il_1588xN.7180635659_4k2a.jpg",
        "images/14/il_1588xN.7180635671_4360.jpg",
        "images/14/il_1588xN.7180635721_khe9.jpg",
        "images/14/il_1588xN.7180635735_novw.jpg"
      ],
      note: "A mesmerizing arched wall fountain bringing serene Moorish elegance to your courtyard.",
      priceNote: "Price on request",
      description:
        "An exquisite handcrafted wall fountain featuring a grand arched mosaic backdrop in rich terracotta, vibrant green, and soft pink zellige tiles. Intricately shaped green tiles form an elaborate botanical and avian pattern, complemented by a hand-carved white marble basin and a solid brass spigot. Each piece is set by master artisans, creating a breathtaking heirloom feature for indoor or outdoor sanctuaries.",
      options: {
        label: "Height",
        values: ["120 cm", "140 cm", "160 cm"]
      },
      dimensions: {
        "Height": "140 cm",
        "Width": "75 cm",
        "Depth": "40 cm",
        "Weight": "≈ 55 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · carved white marble basin · solid brass spout · reinforced concrete backing structure",
      care: "Professional installation recommended. Clean periodically with mild, non-abrasive soap and water. Drain or protect during freezing winter conditions.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Solid brass lion-head spigot included",
        "White marble basin included",
        "Certificate of origin",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "atlas-blue-mosaic",
      name: "The Atlas Blue Round Table",
      type: "Table",
      category: "Tables",
      image: "images/9/il_1588xN.8534141484_pes1.jpg",
      gallery: [
        "images/9/il_1588xN.8534141484_pes1.jpg",
        "images/9/il_1588xN.8534141516_i2nj.jpg",
        "images/9/il_1588xN.8582006041_izza.jpg",
        "images/9/il_1588xN.8582006043_j4io.jpg",
        "images/9/il_1588xN.8582149169_erkt.jpg"
      ],
      note: "A vibrant ocean-blue mosaic centerpiece designed for open-air dining and serene patio gatherings.",
      priceNote: "Price on request",
      description:
        "A stunning round mosaic dining table featuring deep azure and turquoise hand-cut zellige tiles arranged in a mesmerizing geometric motif. Handcrafted by skilled artisans in Fez, each individual tile is carefully set by eye to create a brilliant, light-catching surface. Supported by a robust, weather-resistant hand-forged iron base, this table effortlessly bridges traditional Moroccan craftsmanship with timeless outdoor elegance.",
      options: {
        label: "Size",
        values: ["Ø 90 cm", "Ø 100 cm", "Ø 120 cm", "Ø 140 cm"]
      },
      dimensions: {
        "Diameter": "120 cm",
        "Height": "75 cm",
        "Weight": "≈ 52 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · hand-forged iron base · natural lime mortar",
      care: "Wipe clean with a damp cloth. Suitable for outdoor and indoor use. Protect or store indoors during harsh winter freezes.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

    {
      slug: "andalusian-fountain12",
      name: "The Andalusian Fountain",
      type: "Fountain",
      category: "Fountains",
      image: "images/16/andalusian-fountaine.jpg",
      gallery: [
        "images/16/andalusian-fountaine.jpg",
        "images/16/andalusian-fountaine-2.jpg",
        "images/16/andalusian-fountaine-3.jpg",
        "images/16/andalusian-fountaine-4.jpg",
        "images/16/andalusian-fountaine-5.jpg",
        "images/16/andalusian-fountaine-6.jpg",
        "images/16/andalusian-fountaine-7.jpg",
        "images/16/andalusian-fountaine-8.jpg",
        "images/16/andalusian-fountaine-9.jpg",
      ],
      note: "A classic wall fountain featuring rich emerald zellige tiles and a traditional arched mosaic backdrop.",
      priceNote: "Price on request",
      description:
        "An exquisite handcrafted wall fountain adorned with deep emerald green and soft neutral hand-cut zellige tiles. Centered around a classic Moorish archway framing a solid brass spigot, this piece brings the tranquil sound of flowing water and the heritage of Andalusian courtyards to your garden, patio, or courtyard wall.",
      options: {
        label: "Height",
        values: ["120 cm", "140 cm", "160 cm"]
      },
      dimensions: {
        "Height": "140 cm",
        "Width": "80 cm",
        "Depth": "50 cm",
        "Weight": "≈ 75 kg"
      },
      materials: "Hand-cut glazed Zellige tiles · reinforced concrete core · brass spigot · natural lime mortar",
      care: "Wipe clean with a damp cloth. Drain and winterize during freezing temperatures if placed outdoors.",
      lead: "Made to order · 4–6 weeks",
      includes: [
        "Handmade to order in Fez",
        "Solid brass spigot included",
        "Certificate of origin",
        "Care guide included",
        "Ships worldwide from Morocco"
      ]
    },

  ],

  // ============================================================
  // PATTERN GALLERY (home page)
  // ============================================================
  patterns: [
    { image: "images/pattern-1.jpg", caption: "The eight-point star" },
    { image: "images/pattern-2.jpg", caption: "A continuous knot" },
    { image: "images/pattern-3.jpg", caption: "A garden of geometry" },
    { image: "images/pattern-4.jpg", caption: "The courtyard fountain" }
  ]
};
