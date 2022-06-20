// Chargement des dépendances (librairie React ici)
import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

function Comments() {

    // récuperer les commentaires existants pour les afficher ensuite
    const [contentBdd, setContentBdd] = useState([]);

    // attend un nouveau commentaire
    const [commentTxt, setCommentTxt] = useState("");

    let Url= document.location.pathname;
    let id=(Url.slice(Url.lastIndexOf("/")+1));
    console.log(id);

    function changeText(event){
      setCommentTxt(event.currentTarget.value);
    }

    const url = '/comments/'+ id;

    // fetch pour récuper les donnés qu'il y a déjà dans la BDD
    useEffect(() => {
      
      fetch(url)
        .then(httpResponse => {
          return httpResponse.json()
        })
        .then(body => {
          // on utilise le JSON.parse pour forcer le "truc"
          setContentBdd(JSON.parse(body));   
        })   
    }, [])

        return (
            <>            
                {/* <div className="form-group">
                    <input onChange={changeText}  className ="form-control border border-danger shadow p-3 mb-5 bg-white rounded" placeholder="Rechercher un évènement" />
                </div> */}
                
              <br />

              {/* Mon évènement recherché est : {searchTxt} */}
              <section >
                {
                  
                  contentBdd.map((element, i) => {
                    return <CommentCard key={i} data={element} />
                  })
                  
                }
              </section>
            </>
          );
        }

export default Comments;