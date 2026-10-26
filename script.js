// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.


const liste_produits = document.querySelector(".liste");
function Afficher(produits) {
  const produit_li = document.createElement("li");
  if (produits.length != 0) {
    const etat_vide = document.getElementById("etat-vide");
    etat_vide.classList.toggle("no_active");

    produits.forEach(produit => {


      // creer les balises html du produit
      const div_nom_prix = document.createElement("div");
      const npm_produit = document.createElement("strong");
      npm_produit.classList.add("nom-produit");
      const prix_produit = document.createElement("span");
      prix_produit.classList.add("prix-produit");
      div_nom_prix.append(npm_produit, prix_produit);


      // button supprimer 
      const btn_supprimer = document.createElement("button");
      btn_supprimer.setAttribute("type", "button");
      btn_supprimer.classList.add("supprimer");
      btn_supprimer.textContent = "Retirer";

      produit_li.append(div_nom_prix, btn_supprimer);

      npm_produit.textContent = produit.nom;
      prix_produit.textContent = produit.prix;


      liste_produits.append(produit_li);

    })
  } else {
    const etat_vide = document.getElementById("etat-vide");
    etat_vide.classList.toggle("active");
  }
}
Afficher(produits) ;

function Ajouter(){
  const input_nom = document.getElementById("nom") ;
  const input_prix = document.getElementById("prix") ;

  const produit = {
    
  }
}