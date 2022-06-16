let map;
let TabGeo = [];

//function d'affichage de la carte avec les function d'une api 
function showCarte(){
  map = L.map('map').setView([2.572276, 49.203509], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}


//on envoie une requete a l'api du gouvernement avec en parametre les données de notre BDD qu'on a ajouté à la requete
function addMarkerFromAdress(address){
  window.fetch('https://api-adresse.data.gouv.fr/search/?q='+address)
  .then(function(httpResponse){
        return httpResponse.json();
  })
  .then(function(results)
  {
      console.log(results.features[0]);
      let latitude = results.features[0].geometry.coordinates[0];
      let longitude = results.features[0].geometry.coordinates[1];
      let marker = L.marker([longitude, latitude]).addTo(map);
      TabGeo.push(marker);
      autoBound();
  });
}

function autoBound(){
  var group = new L.featureGroup(TabGeo);
  map.fitBounds(group.getBounds());

}

//appel de la fonction
showCarte();
