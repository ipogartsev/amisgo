// Recuperer le button d'inscription
let btnCollection = document.getElementsByClassName("participe");
// Définir le text de button selon la situation d'inscription d'user au evenement
// Si User est inscrite, l'informer et proposer l'annulation
const txtOut =  "Vous êtes inscrit(e)! Annuler";
// Text pour proposer l'inscription
const txtIn = " Je participe! ";

/**
 * Fonction d'affichage de text des butons
 * @param {string} text 
 */
function textButon(text){
  for(let i = 0; i < btnCollection.length; i++){
    btnCollection[i].innerHTML = text;  
  }
}

/**
 * Function pour s'iscrire ou desinscrire
 * @param {} 
 */
function participationUserAtEvent(){
    // Desactiver les buttons pour éviter double action
    for(let i = 0; i < btnCollection.length; i++){
      btnCollection[i].dataset.rejoins="disabled";      
    }
    // Recuperer l'id de l'evenement de la page de l'evenement
    let idEvent = btnCollection[0].dataset.id;

    // Traiter la demande de User et mettre à jour la base de données
    // Définir URL pour chaque action
    let url;
    // Si user veut s'isncrire
    if(btnCollection[0].dataset.new == "in"){
      url = 'participe/';
    }
    // Su user veut desinscrire
    else{
      url = 'delete/';
    }

    // Faire une requête
    window.fetch(url+idEvent)
    .then(function(httpResponse){
      //renvoi de la réponse au prochain Then
      return httpResponse.json();
    })
    .then(function(result) // results = les données JSON, grâce au httpResponse.json() ci-dessus
    {      
      if(result){
        // Changer le text du button et l'action à l'inverse
        if(btnCollection[0].dataset.new == "in"){
          btnCollection[0].dataset.new = "out";
          textButon(txtOut);
        } else {
          textButon(txtIn);
          btnCollection[0].dataset.new = "in"       
        }  
      };
    });
    // Activer les butons
    for(let i = 0; i < btnCollection.length; i++){
      btnCollection[i].dataset.rejoins="active";   
    }
}



// Recuperer la situation d'inscription d'user depuis la page de l'evenement
let currentAction = btnCollection[0].dataset.action;

//Si user est inscrit
if(currentAction == "in"){  
  // Proposer descinscription
  textButon(txtOut);
  // Etablir data-action d'effectuer à la demande d'user  
  btnCollection[0].dataset.new = "out";
  } else {
    // Et à l'inverse
    textButon(txtIn);
    btnCollection[0].dataset.new = "in";
  }

// Ecouter les butons
for(let i = 0; i < btnCollection.length; i++){   
  btnCollection[i].addEventListener('click', participationUserAtEvent);
}


