/* ==========================================================================
   CONTENU DES HOTSPOTS
   --------------------------------------------------------------------------
   C'est ICI que vous modifiez les points cliquables sur vos images.

   Chaque clé (ex: "academique-1") correspond à un attribut
   data-hotspot-group="academique-1" posé sur une <div class="hotspot-frame">
   dans index.html.

   Pour chaque point :
     x, y   : position en pourcentage (0 à 100) par rapport à l'image.
              x = 0 est le bord gauche, x = 100 le bord droit.
              y = 0 est le haut, y = 100 le bas.
     title  : titre court affiché en gras dans la bulle
     text   : texte explicatif affiché dans la bulle

   Pour ajouter un point : copiez un objet { x, y, title, text } et
   changez les valeurs. Pour en retirer un, supprimez l'objet.
   ========================================================================== */
const hotspotsData = {
  "academique-1": [
    { x: 20, y: 66, title: "Système d'inclinaison du canon ", text: "Une plaque d'indexation est utilisée pour régler l'inclinaison. Cette pièce est usinée par découpe laser." },
    { x: 40, y: 57, title: "Vérin électrique", text: "Actionneur linéaire composé d'un potentiomètre de réglage de course. " },
    { x: 45, y: 81, title: "Panneau de commande", text: "Système électronique permettant le réglage de compression du ressort selon l'angle et la distance à atteindre." },
    { x: 76, y: 21, title: "Mécanisme de déclenchement", text: "Un électroaimant est fixé au bout du vérin permettant la compression du ressort. Le tir est effectué par désactivation de l'électroaimant." },
  ],

  "reducteur": [
    { x: 25, y: 65, title: "Moteur électrique", text: "Moteur électrique." },
    { x: 45, y: 65, title: "Accouplement flexible", text: "Accouplement flexible." },
    { x: 55, y: 65, title: "Engrenage", text: "Engrenage à dentures droites. Lubrification par barbotage." },
    { x: 65, y: 65, title: "Poulies et courroies", text: "Système de transmission par poulies et courroies." },
  ],
  
   "automatisation": [
    { x: 40, y: 87, title: "Bornier didactique", text: "" },
    { x: 35, y: 55, title: "Actionneur", text: "Un vérin pneumatique." },
    { x: 67, y: 61, title: "Panneau de commande", text: "Bouton 3 positions, bouton démarrage cycle, bouton arrêt d'urgence, témoin lumineux." },
  ],


  "menuiserie": [
    { x: 30, y: 30, title: "Outil", text: "Décrivez ici cet outil ou ce poste de travail." },
    { x: 70, y: 60, title: "Outil", text: "Décrivez ici un second outil ou poste de travail." },
  ],


  "bague": [
    { x: 50, y: 50, title: "Bague en or 18K et diamants", text: "Le diamant en poire est serti de 3 griffes et les ronds sont en sertis clos. " },
  ],

  "collier": [
    { x: 50, y: 50, title: "Pendentif", text: "Pendentif représentant un L & B." },
  ],

  "projet-eric": [
    { x: 50, y: 50, title: "Pendentif en triangle", text: "Structure bi-étagée avec une pierre tanzanite coupe trillion en serti clos." },
  ],
};

/* ==========================================================================
   NE PAS MODIFIER CE QUI SUIT (sauf si vous êtes à l'aise avec le code) :
   ce code lit hotspotsData ci-dessus et construit les points sur les images.
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll(".hotspot-frame").forEach((frame) => {
    const groupName = frame.dataset.hotspotGroup;
    const points = hotspotsData[groupName];
    if (!points) return;

    points.forEach((point, index) => {
      const button = document.createElement("button");
      button.className = "hotspot";
      button.type = "button";
      button.style.left = point.x + "%";
      button.style.top = point.y + "%";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", point.title || "Voir le détail");
      button.textContent = "+";

	// TODO : hover text above point and not above image
	
	
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

  // Ferme les bulles si on clique en dehors d'une image à hotspots
  document.addEventListener("click", (event) => {
    if (event.target.closest(".hotspot-frame")) return;
    document.querySelectorAll(".hotspot").forEach((b) => b.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".hotspot__tooltip").forEach((t) => t.classList.remove("is-open"));
  });
});
