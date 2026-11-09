const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};


function AfficherAteliers() {
  const liste_ateliers = document.getElementById("liste-ateliers");
  let Ayeliers_disponible = config.ateliers.filter(A => A.places > 0);

  Ayeliers_disponible.forEach(atelier => {
    const label = document.createElement("label");
    const input_radio = document.createElement("input");
    const span_containner = document.createElement("span");
    const atelier_titre = document.createElement("strong");
    const atelier_place = document.createElement("label");

    input_radio.type = "radio";
    input_radio.name = "atelier";
    label.className = "carte-choix";
    atelier_titre.className = "atelier-titre";
    atelier_place.className = "atelier-places detail";

    input_radio.addEventListener("click", () => { ValiderAteliers(atelier.id) })

    atelier_titre.textContent = atelier.titre;
    atelier_place.textContent = atelier.places;

    span_containner.append(atelier_titre, atelier_place);
    label.append(input_radio, span_containner);
    liste_ateliers.append(label);
  })
}
AfficherAteliers();
function ValiderAteliers(atelierId) {
  if (!atelierId) {
    document.getElementById("erreur-atelier").textContent = "chisir un atelier";
  } else {
    selectedConfig.atelierId = atelierId;
  }
}

function Mode_participation() {
  const liste_modes = document.getElementById("liste-modes");

  // ateliers.modes.présentiel
  const label_présentiel = document.createElement("label");
  const input_radio_présentiel = document.createElement("input");
  const span_présentiel = document.createElement("span");

  input_radio_présentiel.type = "radio";
  input_radio_présentiel.name = "mode";
  label_présentiel.className = "carte-choix";
  span_présentiel.className = "mode-libelle";

  input_radio_présentiel.addEventListener("click", () => {
    afficherCampus();
    ValiderMode(config.modes.presentiel)
  });

  span_présentiel.textContent = config.modes.presentiel;

  label_présentiel.append(input_radio_présentiel, span_présentiel);

  liste_modes.append(label_présentiel);
  // ateliers.modes.distance
  const label_distance = document.createElement("label");
  const input_radio_distance = document.createElement("input");
  const span_distance = document.createElement("span");

  input_radio_distance.type = "radio";
  input_radio_distance.name = "mode";
  label_distance.className = "carte-choix";
  span_distance.className = "mode-libelle";

  input_radio_distance.addEventListener("click", () => {
    AfficherEmail();
    ValiderMode(config.modes.distance) ;
  });

  span_distance.textContent = config.modes.distance;

  label_distance.append(input_radio_distance, span_distance);



  liste_modes.append(label_distance);



}
Mode_participation();

function ValiderMode(mode) {
  if (!mode) {
    document.getElementById("erreur-mode").textContent = "chisir un mode de participation";
  } else {
    selectedConfig.mode = mode;
  }
}

function afficherCampus() {

  const liste_campus = document.getElementById("liste-campus");
  liste_campus.innerHTML = ""
  document.getElementById("champ-email").setAttribute("hidden", "");
  document.getElementById("champ-campus").removeAttribute("hidden");

  config.campus.forEach(campus => {

    const label_campus = document.createElement("label");
    const input_radio_campus = document.createElement("input");
    const span_campus = document.createElement("span");

    input_radio_campus.type = "radio";
    input_radio_campus.name = "campus";
    label_campus.className = "carte-choix";
    span_campus.className = "campus-libelle";

    input_radio_campus.addEventListener("click", () => { ValiderCampus(campus) })

    span_campus.textContent = campus;

    label_campus.append(input_radio_campus, span_campus);
    liste_campus.append(label_campus)

  })
}
function ValiderCampus(campus) {
  if (!campus) {
    document.getElementById("erreur-campus").textContent = "chisir un campus";
  } else {
    selectedConfig.campus = campus;
  }
}

function AfficherEmail() {
  document.getElementById("champ-campus").setAttribute("hidden", "");
  document.getElementById("champ-email").removeAttribute("hidden");

  const input_Email = document.getElementById("email") ;
  input_Email.removeAttribute("disabled") ;
  input_Email.addEventListener("input" , ()=> { ValiderChamps() })

}
function ValiderChamps() {
  const Email = document.getElementById("email").value ;
  if (!Email) {
    document.getElementById("erreur-email").textContent = "entrer votre email";
  } else {
    selectedConfig.email = Email;
  }
} ;

function AfficherRecapitulatif() {
  document.getElementById("recapitulatif").removeAttribute("hidden") ;
}

document.getElementById("Confirmer").addEventListener("click", (e) => {
  e.preventDefault()
  console.log(selectedConfig);
  
})