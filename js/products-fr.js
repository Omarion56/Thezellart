/* ZELLART — French product content. Loaded before i18n.js; used only when the site is in French.
   New product? Add its slug to P below, and any new materials/care/includes phrases to the maps. */
(function () {
  "use strict";
  const ROUND = ["Un grand soleil de mosaïque pour se réunir.", "Un plateau rond assemblé à partir de centaines de carreaux taillés à la main, dont le motif d'étoile rayonnante fait écho aux patios de Fès. Chaque pièce est posée à l'œil : il n'y a pas deux tables identiques. La base en fer forgé à la main garde une silhouette légère tout en portant le poids d'un véritable héritage."];
  const ARCH = ["Une fontaine en mosaïque, avec un arc mauresque traditionnel.", "Une fontaine murale architecturale en carreaux de zellige terre cuite taillés à la main, encadrée d'une vasque en marbre sculpté et d'un robinet en laiton massif. Les motifs géométriques et la silhouette d'arc en trou de serrure reflètent le patrimoine artisanal de Fès. Elle apporte une atmosphère apaisante et méditative à un patio, un mur de jardin ou un grand intérieur."];

  const P = {
    "atlas-blue": ["Cobalt profond, posé dans un rythme tranquille.", "Une table rectangulaire en cobalt profond, dont le motif se répète comme un battement lent. Seule l'imperfection naturelle du carreau taillé à la main en interrompt le rythme."],
    "courtyard": ["Une table du quotidien à l'âme d'héritage.", "Une table carrée qui emprunte sa géométrie aux patios de la vieille médina : simple, chaleureuse, faite pour être vécue."],
    "sahara-steps": ["Petite empreinte, geste graphique.", "Une petite table d'appoint au motif de chevrons marqué, de celles qui animent un coin de pièce sans réclamer l'attention."],
    "blue-star": ["Un motif méditatif, taillé à la main.", "Une seule étoile à huit branches, répétée patiemment jusqu'à ce que la surface vibre d'une géométrie tranquille."],
    "mint-hour": ["Une géométrie vert tendre pour les après-midi lents.", "Des carreaux vert tendre dans un rythme calme : une table pour les longs après-midi et les conversations sans hâte."],
    "riad-fountain": ["Un petit morceau vivant du patio.", "Une fontaine murale carrelée à la main selon la tradition de Fès, avec un robinet en laiton et une vasque courbe. Elle apporte le son de l'eau dans une pièce sans prendre de place au sol."],
    "green-fountain": ["L'eau, le carreau et l'ombre d'un palmier.", "Une fontaine vert profond, dans la palette de l'ombre des palmiers et du vieux plâtre. Calme, fraîche et résolument marocaine."],
    "fez-rectangular-crimson": ["Une riche mosaïque cramoisie pour des réunions intemporelles.", "Un plateau rectangulaire assemblé à partir de centaines de carreaux cramoisis taillés à la main, avec un médaillon concentrique rayonnant encadré d'une bordure en losanges. Chaque carreau est posé à la main, pour une œuvre unique. Sa base en fer forgé à la main allie présence artisanale et élégance durable."],
    "atlas-verdant": ["Un chef-d'œuvre de mosaïque émeraude pour des réunions sereines.", "Un plateau rond en carreaux taillés à la main, vert émeraude et vert forêt, qui évoquent les teintes riches des collines marocaines. Chaque pièce de zellige est posée à l'œil dans une composition géométrique complexe, pour une finition unique et transmissible. Une solide base en fer forgé à la main équilibre robustesse et silhouette gracieuse."],
    "medina-star": ["Un chef-d'œuvre géométrique rayonnant, à la chaleur des patios marocains.", "Un plateau rond superbe, orné d'un motif d'étoile rayonnante composé de centaines de carreaux taillés à la main en ambre, vert profond et tons de terre. Chaque carreau est posé à l'œil, pour une finition artisanale unique. Sa base en fer forgé à enroulements délicats allie légèreté visuelle et durabilité."],
    "fez-fountain": ARCH,
    "fez-1-fountain": ARCH,
    "fez-round-mosaic": ROUND,
    "fez-round": ROUND,
    "fez-emerald-square": ["Une riche surface émeraude pour des repas intemporels.", "Un plateau carré en carreaux émaillés vert profond, disposés selon un schéma géométrique classique et encadrés d'une bordure contrastée précise. Chaque carreau est ciselé et posé à la main par des maîtres artisans de Fès. Une robuste base en fer forgé à la main allie élégance et stabilité durable."],
    "fez-andalusian-fountain": ["Une superbe fontaine marocaine à encadrement en arc traditionnel.", "Une fontaine murale architecturale en zellige fait main, dans des tons azur, terre cuite et neutres doux. Une rosace géométrique complexe, encadrée d'une majestueuse arche mauresque, y côtoie un robinet en laiton massif et une vasque courbe. Assemblée à la main par des maîtres artisans de Fès."],
    "crimson-fez-mosaic1": ["Une mosaïque chaleureuse et complexe, au savoir-faire marocain intemporel.", "Un plateau rond en mosaïque aux motifs d'étoiles cramoisi profond, rose pâle et bleu nuit, taillés à la main dans des carreaux émaillés traditionnels. Chaque pièce est posée à la main en harmonie géométrique, reflétant des siècles de patrimoine artisanal de Fès. Une élégante base en fer forgé noir assure élégance structurelle et durabilité."],
    "cobalt-fez-mosaic1": ["Une mosaïque géométrique saisissante, inspirée de l'art marocain traditionnel.", "Un plateau rond exquis, assemblé à la main à partir de centaines de carreaux bleu cobalt et blanc éclatant, rehaussés de touches jaune doré. Le motif d'étoile rayonnante reflète les traditions de la mosaïque de Fès. Chaque pièce est posée à l'œil pour une surface unique, sur une base en fer forgé durable, légère et solide."],
    "emerald-atlas-fountain": ["Une cascade majestueuse de zellige émeraude, à la sérénité des patios marocains.", "Une fontaine murale autoportante en zellige émaillé vert émeraude taillé à la main, avec un fond en arc mauresque brisé et une vasque intégrée. Chaque carreau est taillé et assemblé par des maîtres artisans, et couronné d'un robinet en laiton massif ornementé. Elle apporte le son de l'eau et l'élégance nord-africaine à un jardin, un patio ou un intérieur."],
    "andalusian-sun-mosaic": ["Un soleil de mosaïque magnifique, rayonnant de chaleur et d'histoire.", "Un plateau rond vibrant, composé de centaines de carreaux de zellige émaillés taillés à la main, avec un médaillon central et des étoiles rayonnantes en terre cuite, bleu cobalt, ocre chaud et menthe douce. Réalisé par des maîtres artisans de Fès, chaque élément est placé de façon unique pour former une pièce maîtresse transmissible. Il repose sur une robuste base en fer forgé noir."],
    "andalusian-garden-wall-fountain": ["Une fontaine murale en arc envoûtante, pour un patio d'élégance mauresque.", "Une fontaine murale exquise, faite main, avec un grand fond en arc de mosaïque terre cuite, vert vif et rose doux. Des carreaux verts aux formes complexes dessinent un motif végétal et d'oiseaux, complétés d'une vasque en marbre blanc sculpté à la main et d'un robinet en laiton massif. Chaque pièce est posée par des maîtres artisans pour un décor transmissible, en intérieur ou en extérieur."],
    "atlas-blue-mosaic": ["Une mosaïque bleu océan pour les repas en plein air et les soirées sereines sur la terrasse.", "Une superbe table à manger ronde en mosaïque, avec des carreaux de zellige taillés à la main en azur profond et turquoise dans un motif géométrique fascinant. Réalisée par des artisans de Fès, chaque carreau est posé à l'œil pour une surface lumineuse qui capte la lumière. Sa robuste base en fer forgé résistante aux intempéries marie savoir-faire marocain et élégance en extérieur."],
    "andalusian-fountain12": ["Une fontaine murale classique, en zellige émeraude et fond en arc de mosaïque traditionnel.", "Une fontaine murale exquise, faite main, ornée de zellige taillé à la main en vert émeraude profond et neutres doux. Centrée autour d'une arche mauresque classique qui encadre un robinet en laiton massif, elle apporte le son de l'eau et le patrimoine des patios andalous à votre jardin, patio ou mur de cour."]
  };

  // Materials: translated segment by segment (segments are separated by " · ")
  const SEG = {
    "Hand-cut glazed Zellige tiles": "Carreaux de zellige émaillés taillés à la main", "hand-forged iron base": "base en fer forgé à la main", "natural lime mortar": "mortier de chaux naturelle",
    "white marble basin": "vasque en marbre blanc", "carved white marble basin": "vasque en marbre blanc sculpté", "hand-carved brass spout": "robinet en laiton sculpté à la main", "solid brass spout": "robinet en laiton massif",
    "solid brass spigot": "robinet en laiton massif", "brass spigot": "robinet en laiton", "brass spout": "robinet en laiton", "reinforced concrete backing": "support en béton armé", "reinforced concrete backing structure": "structure de support en béton armé",
    "reinforced concrete core": "cœur en béton armé", "reinforced concrete body": "corps en béton armé", "concrete body": "corps en béton", "Cobalt & ivory Zellige": "Zellige cobalt et ivoire", "steel base": "base en acier",
    "Glazed Zellige": "Zellige émaillé", "Green Zellige": "Zellige vert", "Zellige": "Zellige", "Zellige tile": "Carreaux de zellige", "Green Zellige tile": "Carreaux de zellige vert", "iron base": "base en fer"
  };
  const CARE = {
    "Indoor use.": "Usage en intérieur.", "Dust with a soft cloth.": "Dépoussiérer avec un chiffon doux.", "Wipe with a damp cloth.": "Essuyer avec un chiffon humide.", "Wipe with damp cloth.": "Essuyer avec un chiffon humide.",
    "Suitable for indoor use or a covered terrace.": "Convient à l'intérieur ou à une terrasse couverte.", "Avoid acid cleaners.": "Éviter les nettoyants acides.", "Wipe tiles with a damp cloth.": "Essuyer les carreaux avec un chiffon humide.",
    "Clean the brass spout periodically.": "Nettoyer régulièrement le robinet en laiton.", "Protect against freezing temperatures during winter if installed outdoors.": "Protéger du gel en hiver en cas d'installation en extérieur.",
    "Empty and dry the basin before long storage periods.": "Vider et sécher la vasque avant un long stockage.", "Empty basin before storage.": "Vider la vasque avant le stockage.", "Wipe clean with a damp cloth.": "Essuyer avec un chiffon humide.",
    "Suitable for outdoor and indoor use.": "Convient à l'intérieur comme à l'extérieur.", "Protect or store indoors during harsh winter freezes.": "Protéger ou rentrer à l'intérieur lors des fortes gelées.", "Drain water during freezing winter conditions.": "Vidanger l'eau en cas de gel hivernal.",
    "Use natural cleaners to protect brass fittings.": "Utiliser des produits naturels pour protéger le laiton.", "Professional installation recommended.": "Installation par un professionnel recommandée.",
    "Clean periodically with mild, non-abrasive soap and water.": "Nettoyer régulièrement à l'eau avec un savon doux non abrasif.", "Drain or protect during freezing winter conditions.": "Vidanger ou protéger en cas de gel hivernal.",
    "Drain and winterize during freezing temperatures if placed outdoors.": "Vidanger et protéger du gel si la pièce est placée en extérieur."
  };
  const INC = {
    "Handmade to order": "Fait main sur commande", "Handmade to order in Fez": "Fait main sur commande à Fès", "Certificate of origin": "Certificat d'origine", "Care guide": "Guide d'entretien", "Care guide included": "Guide d'entretien inclus",
    "Ships worldwide from Morocco": "Expédition dans le monde entier depuis le Maroc", "Brass spout included": "Robinet en laiton inclus", "Hand-carved brass spigot included": "Robinet en laiton sculpté à la main inclus",
    "Integrated white marble basin": "Vasque en marbre blanc intégrée", "Integrated mosaic basin": "Vasque en mosaïque intégrée", "Solid brass spigot included": "Robinet en laiton massif inclus",
    "Solid brass lion-head spigot included": "Robinet en laiton massif à tête de lion inclus", "White marble basin included": "Vasque en marbre blanc incluse"
  };
  const OPT = { "Height Size": "Hauteur", "Brass (gold)": "Laiton (doré)", "Nickel (silver)": "Nickel (argenté)", "Bronze (dark)": "Bronze (foncé)" };
  const t = (m, k) => (m[k] !== undefined ? m[k] : k);

  window.applyProductsFR = function (SITE) {
    SITE.products.forEach((p) => {
      const f = P[p.slug];
      if (f) { p.note = f[0]; p.description = f[1]; }
      if (p.materials) p.materials = p.materials.split(" · ").map((s) => t(SEG, s)).join(" · ");
      if (p.care) p.care = p.care.split(/(?<=\.)\s+/).map((s) => t(CARE, s)).join(" ");
      if (p.includes) p.includes = p.includes.map((s) => t(INC, s));
      if (p.options) { p.options.label = t(OPT, p.options.label); p.options.values = p.options.values.map((v) => t(OPT, v)); }
    });
  };
})();
