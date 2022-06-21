let btn = document.getElementById("participe");


function registerUserToEvent(e){

  let element=e.currentTarget.dataset.rejoins="disabled";
  let idEvent=e.currentTarget.dataset.id;
 
  window.fetch('participe/'+idEvent)
    .then(function(httpResponse){
        //renvoi de la réponse au prochain Then
        return httpResponse.json();
    })
    .then(function(resultat) // results = les données JSON, grâce au httpResponse.json() ci-dessus
    {
      if(resultat){
        btn.innerHTML='inscrit !';
      }
    });

}


btn.addEventListener('click', registerUserToEvent);

