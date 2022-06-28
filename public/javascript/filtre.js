
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


/**
 * Fonction pour afficher plus d'evenements sur la page
 * @param {event} e 
 */
function showMore(e){
  // Recuperer la section
  let section = e.currentTarget.dataset.id;

  // Faire afficher ou cacher les evenements selon la datat-action
  if(e.currentTarget.dataset.action == ''){
    switch(section){
      case 0:
         suggestedEvents.forEach(element => {
          element.style ="display:block";
        }) 
        break;
      case 1:
        popularEvents.forEach(element => {
          element.style ="display:block";
        }) 
        break;
      default:
        futureEvents.forEach(element => {
          element.style ="display:block";
        }) 
    }
    e.currentTarget.dataset.action = 'active';
    e.currentTarget.textContent = 'En voir moins';
    
    
  } else {
    switch(section){
      case 0:
        suggestedEvents.forEach(element => {
          element.style ="display:none !important";
        })
        break;
      case 1:
        popularEvents.forEach(element => {
          element.style ="display:none !important";
        })
        break;
      default:
        futureEvents.forEach(element => {
          element.style ="display:none !important";
        })
      }
      e.currentTarget.dataset.action = '';
      e.currentTarget.textContent = 'En voir plus';
  }
    

}

// Selectioner butons pour vois plus d'events
let btnSeeMoreBtn = document.querySelectorAll(".see-more-btn");

// Recuperer la class de cards à afficher
let futureEvents = document.querySelectorAll(".future");
let suggestedEvents = document.querySelectorAll(".suggested");
let popularEvents = document.querySelectorAll(".popular");

// Ajouter l'écouteur d'evenements
 btnSeeMoreBtn.forEach(element => {
 element.addEventListener('click', showMore);
})