// Recuperer le button d'inscription
let btn = document.getElementById("participe");

// Définir le text de button selon la situation d'inscription d'user au evenement
// Si User est inscrite, l'informer et proposer l'annulation
const txtIn =  "Vous êtes inscrit(e)! Annuler";
// Text pour proposer l'inscription
const txtOut = " Je participe! ";



function participationUserAtEvent(e){
    // Desactiver le button
    e.currentTarget.dataset.rejoins="disabled";
    // Recuperer l'id de l'evenement de la page de l'evenement
    let idEvent=e.currentTarget.dataset.id;

    // If User n'est pas inscrite, inscrire User et mettre à jour la base de données
    // Définir URL pour chaque action
    let url;
    if(text == "out"){
      url = 'participe/';
    }
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
        // Changer le text du button pour l'action à l'inverse
        if(text == "in"){
          btn.innerHTML = txtOut;
        } else {
          btn.innerHTML = txtIn;
        }

      };
    });
  
}


// Recuperer la situation d'inscription d'user depuis la page de l'evenement
const text = btn.dataset.action;
//Afficher le text du button
if(text == "in"){
  btn.innerHTML = txtIn;
} else {
  btn.innerHTML = txtOut;
}
// Ecouteur du button d'inscription
btn.addEventListener('click', participationUserAtEvent);

