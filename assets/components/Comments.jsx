// Chargement des dépendances (librairie React ici)
import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

function Comments() {

    // récuperer les commentaires existants pour les afficher ensuite
    const [contentBdd, setContentBdd] = useState([]);

    let Url= document.location.pathname;
    let id=(Url.slice(Url.lastIndexOf("/")+1));
    let userId;

    userId = document.getElementById("root").dataset.user;

    const url = '/comments/'+ id;

    function sendData(){

      const XHR = new XMLHttpRequest();
      let FD = new FormData();
      
      var myForm = document.getElementById('comment');

      //push data into object
      FD.append('comment',  myForm.value);
      FD.append('user',  userId);
      

      //Set up request
      XHR.open('POST', '/comments/'+ id + '/post');
      XHR.send(FD);

      XHR.onload = function () {
        
            console.log(XHR.responseText);
            getComments();
      };
   }
  
    function getComments(){       
      fetch(url)
      .then(httpResponse => {
        return httpResponse.json()
      })
      .then(body => {
        // on utilise le JSON.parse pour forcer le "truc"
        setContentBdd(JSON.parse(body));   
      })  
     }

    // fetch pour récuper les donnés qu'il y a déjà dans la BDD
      useEffect(() => {
        getComments();
      }, [])

          return (
              <>            
                <section >
                  {
                    
                    contentBdd.map((element, i) => {
                      return <CommentCard key={i} data={element} />
                    })
                    
                  }
                  {userId && 
                    <form method = "post" >
                      <div className="form-group">
                        <label for="comment">Ecrire un nouveau commentaire :</label>
                        <input type= "textarea" className="form-control" id="comment" rows="3"></input>
                        <button type='button' onClick={sendData} id='post'>Envoyer</button>
                      </div>
                    </form>
      }
                </section>
              </>
            );
        

        }
        
        

export default Comments;