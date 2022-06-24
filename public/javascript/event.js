// Recuperer le button d'inscription
let btn = document.getElementById("participe");

// Définir le text de button selon la situation d'inscription d'user au evenement
// Si User est inscrite, l'informer et proposer l'annulation
const txtOut =  "Vous êtes inscrit(e)! Annuler";
// Text pour proposer l'inscription
const txtIn = " Je participe! ";



function participationUserAtEvent(e){
    // Desactiver le button pour éviter double action
    e.currentTarget.dataset.rejoins="disabled";
    // Recuperer l'id de l'evenement de la page de l'evenement
    let idEvent = e.currentTarget.dataset.id;

    // SI User n'est pas inscrite, inscrire User et mettre à jour la base de données
    // Définir URL pour chaque action
    let url;
    // Si user veut s'isncrire
    if(e.currentTarget.dataset.new == "in"){
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
      };
    });
    // Changer le text du button et l'action à l'inverse
    if(e.currentTarget.dataset.new == "in"){
      e.currentTarget.dataset.new = "out"
      btn.innerHTML = txtOut;
    } else {
      btn.innerHTML = txtIn;
      e.currentTarget.dataset.new = "in"       
    }
    // Activer le buton
    e.currentTarget.dataset.rejoins="active";
    
    
}


// Recuperer la situation d'inscription d'user depuis la page de l'evenement
let currentAction = btn.dataset.action;
//Si user est inscrit
if(currentAction == "in"){
  // Proposer descinscription
  btn.innerHTML = txtOut;

  // Etablir action d'effectuer en cas de demande d'user  
  btn.dataset.new = "out";
} else {
  // Et à l'inverse
  btn.innerHTML = txtIn;
  btn.dataset.new = "in";
}

// Ecouter du button d'inscription à l'evenement
btn.addEventListener('click', participationUserAtEvent);

