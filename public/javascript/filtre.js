
// Création de tableau de catégory
let filtre = {'sport': 'Sport', 'pleinair' : 'Plein air', 'musique': 'Musique', 'cuisine' : 'Cuisine', 'jeux' : 'Jeux', 'culture' : 'Culture', 'bienetre': 'Bien-être', 'apero':'Apéro'};

// Selectionner les butons du filtre
let btn = document.querySelectorAll(".filter-button");

// Ajouter ecouteur de clique pour chaque buton de filtre
btn.forEach(element => {
  element.addEventListener('click', displayChoice);
});

function displayChoice(e){
  // création variable qui contient la categorie definie par le buton clique
  let target = filtre[e.currentTarget.id];

  // Recuperer les categories de tous evenements de page
  let allElements = document.querySelectorAll('[data-category]');
  
  // Parcourir le tableau pour selectioner les evenements à afficher qui ont la meme categorie que target
  allElements.forEach(element => {
    // Si la categorie d'evenement ne correspond pas à target - cacher l'evenement
    if(element.dataset.category !== target){
      element.style = "display:none !important";
    // Si non afficher evenement
    }else{
      element.style ="display:block";
    }
  })
}

