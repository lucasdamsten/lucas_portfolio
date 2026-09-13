/* ==========================================================================
   TRADUCTIONS DU SITE
   --------------------------------------------------------------------------
   C'EST LE SEUL FICHIER OÙ VOUS ÉCRIVEZ VOS TEXTES DANS CHAQUE LANGUE.

   Deux parties :
   1) "translations"  → tous les textes simples (titres, paragraphes, nav...)
   2) "hotspotsData"   → le contenu des points cliquables sur les images

   Pour chaque texte, la clé (ex: "hero-lead") est la même des deux côtés
   ("fr" et "en"). Le HTML n'affiche jamais rien lui-même : il pointe juste
   vers une clé via data-i18n="hero-lead", et c'est ce fichier qui fournit
   le texte réellement affiché, selon la langue choisie.

   Remplacez chaque "[À TRADUIRE]" par votre texte en anglais.
   Vous pouvez utiliser du HTML simple (ex: <br> pour un retour à la ligne).
   ========================================================================== */

window.translations = {
  fr: {
    "nav-accueil": "Accueil",
    "nav-academiques": "Projets académiques",
    "nav-apropos": "Qui est Lucas",
    "nav-personnels": "Projets personnels",

    "tag-accueil": "FEUILLE 01 / ACCUEIL",
    "tag-academiques": "FEUILLE 02 / PROJETS ACADÉMIQUES",
    "tag-apropos": "FEUILLE 03 / QUI EST LUCAS",
    "tag-personnels": "FEUILLE 04 / PROJETS PERSONNELS",

    "hero-kicker": "Portfolio",
    "hero-lead": "Je suis spécialiste du CAO et de la maintenance.<br>Je suis aussi un concepteur et un artisan.",

    "gallery-label": "Galerie de projets",
    "gallery-01": "Titre du projet",
    "gallery-02": "Titre du projet",
    "gallery-03": "Titre du projet",
    "gallery-04": "Titre du projet",
    "gallery-05": "Titre du projet",
    "gallery-06": "Titre du projet",

    "academiques-intro": "Texte de présentation de vos projets réalisés en formation : contexte, objectifs, logiciels utilisés.",
    "academique-1-titre": "Nom du projet académique",
    "academique-1-texte": "Emplacement pour le texte descriptif du projet : cahier des charges, contraintes techniques, méthode utilisée, résultat obtenu. Cliquez sur les points de la photo pour voir des explications détaillées sur des éléments précis.",
    "academique-2-titre": "Nom du 2e projet académique",
    "academique-2-texte": "Deuxième emplacement de texte. Dupliquez ce bloc \"project-block\" pour ajouter d'autres projets.",

    "apropos-1-titre": "Parcours",
    "apropos-1-texte": "Emplacement de texte pour votre parcours : formation, expériences, ce qui vous a mené vers la CAO, la maintenance, la conception et l'artisanat.",
    "apropos-2-titre": "Compétences &amp; outils",
    "apropos-2-texte": "Emplacement de texte pour vos compétences : logiciels de CAO, machines, méthodes de maintenance, matériaux travaillés. Les points sur l'image peuvent pointer vers un outil ou un poste de travail précis.",

    "personnels-intro": "Texte de présentation de vos projets réalisés en dehors du cadre scolaire ou professionnel.",
    "personnel-1-titre": "Nom du projet personnel",
    "personnel-1-texte": "Emplacement de texte descriptif : pourquoi ce projet, quelles étapes, quelles difficultés rencontrées et résolues.",
    "personnel-2-titre": "Nom du 2e projet personnel",
    "personnel-2-texte": "Deuxième emplacement de texte pour vos projets personnels.",
  },

  en: {
    "nav-accueil": "[À TRADUIRE]",
    "nav-academiques": "[À TRADUIRE]",
    "nav-apropos": "[À TRADUIRE]",
    "nav-personnels": "[À TRADUIRE]",

    "tag-accueil": "[À TRADUIRE]",
    "tag-academiques": "[À TRADUIRE]",
    "tag-apropos": "[À TRADUIRE]",
    "tag-personnels": "[À TRADUIRE]",

    "hero-kicker": "[À TRADUIRE]",
    "hero-lead": "[À TRADUIRE]",

    "gallery-label": "[À TRADUIRE]",
    "gallery-01": "[À TRADUIRE]",
    "gallery-02": "[À TRADUIRE]",
    "gallery-03": "[À TRADUIRE]",
    "gallery-04": "[À TRADUIRE]",
    "gallery-05": "[À TRADUIRE]",
    "gallery-06": "[À TRADUIRE]",

    "academiques-intro": "[À TRADUIRE]",
    "academique-1-titre": "[À TRADUIRE]",
    "academique-1-texte": "[À TRADUIRE]",
    "academique-2-titre": "[À TRADUIRE]",
    "academique-2-texte": "[À TRADUIRE]",

    "apropos-1-titre": "[À TRADUIRE]",
    "apropos-1-texte": "[À TRADUIRE]",
    "apropos-2-titre": "[À TRADUIRE]",
    "apropos-2-texte": "[À TRADUIRE]",

    "personnels-intro": "[À TRADUIRE]",
    "personnel-1-titre": "[À TRADUIRE]",
    "personnel-1-texte": "[À TRADUIRE]",
    "personnel-2-titre": "[À TRADUIRE]",
    "personnel-2-texte": "[À TRADUIRE]",
  },
};

/* ==========================================================================
   HOTSPOTS PAR LANGUE
   --------------------------------------------------------------------------
   Même principe que ci-dessus : x/y ne changent pas d'une langue à l'autre
   (c'est la même image), seuls "title" et "text" doivent être traduits.
   ========================================================================== */
window.hotspotsData = {
  fr: {
    "academique-1": [
      { x: 30, y: 40, title: "Pièce usinée", text: "Décrivez ici cet élément précis de l'image." },
      { x: 68, y: 65, title: "Assemblage", text: "Deuxième point d'explication sur l'image." },
    ],
    "academique-2": [
      { x: 50, y: 50, title: "Détail", text: "Décrivez ici cet élément précis de l'image." },
    ],
    "apropos-1": [
      { x: 45, y: 55, title: "Détail", text: "Décrivez ici cet élément précis de l'image." },
    ],
    "apropos-2": [
      { x: 30, y: 30, title: "Outil", text: "Décrivez ici cet outil ou ce poste de travail." },
      { x: 70, y: 60, title: "Outil", text: "Décrivez ici un second outil ou poste de travail." },
    ],
    "personnel-1": [
      { x: 40, y: 45, title: "Détail", text: "Décrivez ici cet élément précis de l'image." },
    ],
    "personnel-2": [
      { x: 55, y: 50, title: "Détail", text: "Décrivez ici cet élément précis de l'image." },
    ],
  },

  en: {
    "academique-1": [
      { x: 30, y: 40, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
      { x: 68, y: 65, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
    ],
    "academique-2": [
      { x: 50, y: 50, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
    ],
    "apropos-1": [
      { x: 45, y: 55, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
    ],
    "apropos-2": [
      { x: 30, y: 30, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
      { x: 70, y: 60, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
    ],
    "personnel-1": [
      { x: 40, y: 45, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
    ],
    "personnel-2": [
      { x: 55, y: 50, title: "[À TRADUIRE]", text: "[À TRADUIRE]" },
    ],
  },
};