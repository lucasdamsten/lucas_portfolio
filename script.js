/* ==========================================================================
   CONTENU DES HOTSPOTS
   --------------------------------------------------------------------------
   C'est ICI que vous modifiez les points cliquables sur vos images.

   Chaque clé (ex: "academique-1") correspond à un attribut
   data-hotspot-group="academique-1" posé sur une <div class="hotspot-frame">
   dans index.html.

   Pour chaque groupe, on donne maintenant deux tableaux : fr et en.
   Les points doivent être dans le même ORDRE et avec les mêmes x/y
   dans les deux langues (seuls title/text changent).

   Pour ajouter un point : copiez un objet { x, y, title, text } dans les
   DEUX tableaux (fr et en) à la même position. Pour en retirer un,
   supprimez-le dans les deux tableaux.
   ========================================================================== */
const hotspotsData = {
  "academique-1": {
    fr: [
      { x: 20, y: 66, title: "Système d'inclinaison du canon ", text: "Une plaque d'indexation est utilisée pour régler l'inclinaison. Cette pièce est usinée par découpe laser." },
      { x: 40, y: 57, title: "Vérin électrique", text: "Actionneur linéaire composé d'un potentiomètre de réglage de course. " },
      { x: 45, y: 81, title: "Panneau de commande", text: "Système électronique permettant le réglage de compression du ressort selon l'angle et la distance à atteindre." },
      { x: 76, y: 21, title: "Mécanisme de déclenchement", text: "Un électroaimant est fixé au bout du vérin permettant la compression du ressort. Le tir est effectué par désactivation de l'électroaimant." },
    ],
    en: [
      { x: 20, y: 66, title: "Cannon tilt system", text: "An indexing plate is used to adjust the tilt angle. This part is machined by laser cutting." },
      { x: 40, y: 57, title: "Electric actuator", text: "Linear actuator fitted with a stroke-adjustment potentiometer." },
      { x: 45, y: 81, title: "Control panel", text: "Electronic system used to adjust the spring compression based on the angle and distance to reach." },
      { x: 76, y: 21, title: "Firing mechanism", text: "An electromagnet is attached to the end of the actuator, holding the compressed spring. Firing is triggered by deactivating the electromagnet." },
    ],
  },

  "reducteur": {
    fr: [
      { x: 25, y: 65, title: "Moteur électrique", text: "Moteur électrique." },
      { x: 45, y: 65, title: "Accouplement flexible", text: "Accouplement flexible." },
      { x: 55, y: 65, title: "Engrenage", text: "Engrenage à dentures droites. Lubrification par barbotage." },
      { x: 65, y: 65, title: "Poulies et courroies", text: "Système de transmission par poulies et courroies." },
    ],
    en: [
      { x: 25, y: 65, title: "Electric motor", text: "Electric motor." },
      { x: 45, y: 65, title: "Flexible coupling", text: "Flexible coupling." },
      { x: 55, y: 65, title: "Gearing", text: "Spur gear set. Splash lubrication." },
      { x: 65, y: 65, title: "Pulleys and belts", text: "Belt-and-pulley transmission system." },
    ],
  },

  "automatisation": {
    fr: [
      { x: 40, y: 87, title: "Bornier didactique", text: "" },
      { x: 35, y: 55, title: "Actionneur", text: "Un vérin pneumatique." },
      { x: 67, y: 61, title: "Panneau de commande", text: "Bouton 3 positions, bouton démarrage cycle, bouton arrêt d'urgence, témoin lumineux." },
    ],
    en: [
      { x: 40, y: 87, title: "Educational terminal block", text: "" },
      { x: 35, y: 55, title: "Actuator", text: "A pneumatic cylinder." },
      { x: 67, y: 61, title: "Control panel", text: "3-position switch, cycle start button, emergency stop button, indicator light." },
    ],
  },

  "menuiserie": {
    fr: [
      { x: 30, y: 30, title: "Outil", text: "Décrivez ici cet outil ou ce poste de travail." },
      { x: 70, y: 60, title: "Outil", text: "Décrivez ici un second outil ou poste de travail." },
    ],
    en: [
      { x: 30, y: 30, title: "Tool", text: "Describe this tool or workstation here." },
      { x: 70, y: 60, title: "Tool", text: "Describe a second tool or workstation here." },
    ],
  },

  "bague": {
    fr: [
      { x: 50, y: 50, title: "Bague en or 18K et diamants", text: "Le diamant en poire est serti de 3 griffes et les ronds sont en sertis clos. " },
    ],
    en: [
      { x: 50, y: 50, title: "18K gold and diamond ring", text: "The pear-cut diamond is set with 3 prongs and the round diamonds are bezel-set." },
    ],
  },

  "collier": {
    fr: [
      { x: 50, y: 50, title: "Pendentif", text: "Pendentif représentant un L & B." },
    ],
    en: [
      { x: 50, y: 50, title: "Pendant", text: "Pendant featuring an L & B." },
    ],
  },

  "projet-eric": {
    fr: [
      { x: 50, y: 50, title: "Pendentif en triangle", text: "Structure bi-étagée avec une pierre tanzanite coupe trillion en serti clos." },
    ],
    en: [
      { x: 50, y: 50, title: "Triangle pendant", text: "Two-tier structure with a trillion-cut tanzanite stone in a bezel setting." },
    ],
  },
};

/* ==========================================================================
   CONSTRUCTION / RECONSTRUCTION DES HOTSPOTS
   Appelée au chargement, puis à chaque changement de langue.
   ========================================================================== */
function buildHotspots(lang) {
  document.querySelectorAll(".hotspot-frame").forEach((frame) => {
    // Nettoie les hotspots existants avant de reconstruire (utile au changement de langue)
    frame.querySelectorAll(".hotspot, .hotspot__tooltip").forEach((el) => el.remove());

    const groupName = frame.dataset.hotspotGroup;
    const group = hotspotsData[groupName];
    if (!group) return;

    const points = group[lang] || group.fr;

    points.forEach((point) => {
      const button = document.createElement("button");
      button.className = "hotspot";
      button.type = "button";
      button.style.left = point.x + "%";
      button.style.top = point.y + "%";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", point.title || (lang === "en" ? "See detail" : "Voir le détail"));
      button.textContent = "+";

      const tooltip = document.createElement("div");
      tooltip.className = "hotspot__tooltip";
      tooltip.innerHTML = `<strong>${point.title || ""}</strong>${point.text || ""}`;

      button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";

        // Ferme les autres bulles ouvertes dans la même image
        frame.querySelectorAll(".hotspot").forEach((b) => b.setAttribute("aria-expanded", "false"));
        frame.querySelectorAll(".hotspot__tooltip").forEach((t) => t.classList.remove("is-open"));

        if (!isOpen) {
          button.setAttribute("aria-expanded", "true");
          tooltip.classList.add("is-open");
        }
      });

      frame.appendChild(button);
      frame.appendChild(tooltip);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Sélecteur de langue =====
  const langToggle = document.getElementById('langToggle');
  const langOptions = langToggle.querySelectorAll('.lang-toggle__option');
  const translatable = document.querySelectorAll('[data-fr][data-en]');

  // FIX: localStorage peut lever une exception (file://, navigation privée,
  // cookies tiers bloqués, iframe sandboxée, etc.). Si ça plante ici, tout
  // le reste du script (bouton de langue ET hotspots) ne s'exécute jamais.
  let currentLang = 'fr';
  try {
    currentLang = localStorage.getItem('site-lang') || 'fr';
  } catch (err) {
    console.warn('localStorage indisponible, langue par défaut : fr', err);
  }

  function applyLang(lang) {
    translatable.forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text !== null) el.innerHTML = text;
    });
    langOptions.forEach(opt => {
      opt.classList.toggle('lang-toggle__option--active', opt.dataset.lang === lang);
    });
    document.documentElement.lang = lang;

    try {
      localStorage.setItem('site-lang', lang);
    } catch (err) {
      console.warn('Impossible d\'enregistrer la langue dans localStorage', err);
    }

    currentLang = lang;

    // Reconstruit les hotspots dans la bonne langue
    buildHotspots(lang);
  }

  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'fr' ? 'en' : 'fr');
  });

  applyLang(currentLang);

  // ===== Panneau contact =====
  // FIX: ces éléments (#contactToggle / #contactPanel) n'existent pas dans
  // le HTML actuel (vous utilisez .contact-menu à la place). Appeler
  // addEventListener sur `null` levait une erreur qui coupait l'exécution
  // du script. Ce bloc est maintenant protégé et ne fait rien s'ils sont absents.
  const contactToggle = document.getElementById('contactToggle');
  const contactPanel = document.getElementById('contactPanel');

  if (contactToggle && contactPanel) {
    contactToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = contactPanel.classList.toggle('contact-panel--open');
      contactToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!contactPanel.contains(e.target) && e.target !== contactToggle) {
        contactPanel.classList.remove('contact-panel--open');
        contactToggle.setAttribute('aria-expanded', false);
      }
    });
  }
});
