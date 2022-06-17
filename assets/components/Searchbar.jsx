// Chargement des dépendances (librairie React ici)
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Searchbar() {

    const [contentBdd, setContentBdd] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
  
    function changeText(event){
      setSearchTxt(event.currentTarget.value);
    }

    const url = '/data';

    useEffect(() => {
      if(searchTxt != ""){
        fetch(url+'/'+searchTxt)
          .then(httpResponse => {
            return httpResponse.json()
          })
          .then(body => {
            // on utilise le JSON.parse pour forcer le "truc"
            setContentBdd(JSON.parse(body));            
          })
        }else{
          setContentBdd([]);
        }
        }, [searchTxt])


        return (
            <>
                
                <div className="form-group">
                    <input onChange={changeText} value={searchTxt} className ="form-control border border-danger shadow p-3 mb-5 bg-white rounded" placeholder="Rechercher un évènement" />
                </div>
                
              <br />

              {/* Mon évènement recherché est : {searchTxt} */}
              <section >
                {
                  
                  contentBdd.map((element, i) => {
                    return <Card key={i} data={element} />
                  })
                  
                }
              </section>
            </>
          );
        }

export default Searchbar;