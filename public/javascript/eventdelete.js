let btnDelete = document.getElementById("btnDelete");



function deleteUserFromEvent(e){

  let element=e.currentTarget.dataset.rejoins="disabled";
  let idEvent=e.currentTarget.dataset.id;
  console.log(idEvent);
 

  window.fetch('delete/'+ idEvent)
    .then(function(httpResponse){
        //renvoi de la réponse au prochain Then
        console.log(httpResponse);
        return httpResponse.json();
    })
    .then(function(resultat) // results = les données JSON, grâce au httpResponse.json() ci-dessus
    {
      console.log(resultat);
      if(resultat){
        btnDelete.style.setPropertyValue ="display:none";
      }
    });

}

btnDelete.addEventListener('click', deleteUserFromEvent);

