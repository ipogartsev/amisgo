<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Comments;
use App\Entity\User;
use App\Entity\Personality;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventRepository;
use App\Repository\UserRepository;
use App\Repository\CommentsRepository;
use DateTime;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\Length;

class EventController extends AbstractController
{
    /**
     * @Route("/events", name="app_events")
     */
    // Affichage des evenements sur la page     
    public function index(EventRepository $eventRepository, UserRepository $userRepository): Response
    {
      //Création d'un tableau regroupant les checkbox 
      $filtre = ['sport'=>'Sport', 'pleinair' => 'Plein air', 'musique' => 'Musique', 'cuisine' => 'Cuisine', 'jeux' => 'Jeux', 'culture' => 'Culture', 'bienetre'=> 'Bien-être', 'apero'=>'Apéro'];
      
      // Message  à afficher en cas d'absence des evenements
      $message = '';
      
      //Message si User n'est pas connecté
      $messageUser = '';
      
      // Etablire la date de jour
      $today = date("Y-m-d H:i:s");
      
      // Recuperer User pour créer les recommendations
      $userId = $this->getUser();
  
      // Création des tableaux à redre par controlleur
      $suggestedEvents =[];
      $popularEvents = [];
      $futureEvents = [];
      
      // Chercher les evenements dans BDD
      $events = $eventRepository->findAll();
     
      // Parcourir 'events' pour selectionner les evenements en date d'aujourd'hui
      foreach($events as $event){
        $eventDate = $event->getDateOfEvent();
        if($today < $eventDate->format("Y-m-d H:i:s")){
          $futureEvents[] = $event; 
        }
      }  
      
      // Si le tableau 'futureEvents' est vide mettre le message correspondant
      if(!$futureEvents){
        $message = 'Il n\'y a pas des evenements à venir'; 
        }
      // Sinon parcourir le tableau pour selectionner autres types d'evenements
      else{
          foreach($futureEvents as $event){ 
          // Selectionner les evenements populaires
          if( $event->getParticipantsRegistered()/$event->getParticipantsMax() > 0.5){
            $popularEvents[] = $event;
          }
        }
          // Si 'popularEvents' est le tableau vide
          if(!$popularEvents){
            // Mettre à la place le tableau d'evenements à venir
            $popularEvents = $futureEvents;
          }

          // Selectionner les evenements recommandés
          if($userId !== null){
            // Vérifier si user a participé aux evenements
            $userEvents = $userId->getEvent();
            // Si user a participé
            if($userEvents){
              // Créer le tableau d'evenements à recommandé par type d'evenements au quels user a participé
              $suggestedEvents = [];
              $typeEvents = [];
              foreach($userEvents as $event){
                $typeEvents[] = $event->getTypeOfEvent();
              }                     
              // Parcourir 'futureEvents' et choisir les evenements par type selon le tableau typeEvents
              foreach($futureEvents as $event){
                if(in_array($event->getTypeOfEvent(), $typeEvents)){
                  //Ajouter l'evenement au tableau de recommendation
                  $suggestedEvents[] = $event;
                }
              }
            }               
            // Si il n'y a pas des evenements à venir à recommander choisir les evenements recommandés au hasard
            if(!$suggestedEvents){
              $suggestedEvents[]= $futureEvents[rand(0, count($futureEvents)-1)];
            }
          } 
          else{
            $messageUser = 'Connectez-vous pour voir les evenements recommandés pour vous ! ';
          }
        }
      

        // Retourner les tableau des evenements et les messages
        return $this->render('event/index.html.twig', [
            'futureEvents' => $futureEvents, 'suggestedEvents' => $suggestedEvents, 'popularEvents' => $popularEvents, 'message' => $message, 'messageUser' => $messageUser , 'filtre' => $filtre        
        ]);
    }

    /**
     * @Route("events/{id}", name="app_event_details")
     */
    // page d'ffichage d'une activité
    public function eventDetails(Event $event,EventRepository $eventRepository, string $id, Personality $personality): Response
    { 
      //Recuperer les details d'evenement
      $event = $eventRepository->findOneBy(['id' => $id]); 
      // Vérifier si il est complet
      $result = $event->isClosed();

      // recuperer l'id d'un user
      $userId=$this->getUser();
      $isParticipe = false;

      // Declaration tableau participants de meme personalite
      $personalities = [];
      $persona ="";
      $persoImg = "";
      // recuperer les evenements auxquels il participe
      if($userId){
        $userEvents = $userId->getEvent();
        // création d'une variable initialiser a false 
        
        // boucle sur la liste d'evenements lié a l'user
        foreach($userEvents as $row){
          // si l'id d'un event se trouve dans le tableau la variable isparticipe passe en true
          if($row->getId() == $id){
            $isParticipe = true;
            break;
          }
      }


      if($userId){
        // Recuperer la personalite d'user
        $userperso = $userId->getPersonality()->getId(); 
        // Recuperer type personalite et image
        $persona = $userId->getPersonality()->getTypeOfPersonality();
        $persoImg = $userId->getPersonality()->getPersonalityPicture();
        // Si User a personalité
        if($userperso){
          // Recuperation des participants d'evenement
          $participants = $event->getUsers();
            foreach($participants as $participant){
              // Recuperer la personalite de participant                        
              $participantPerso = $participant->getPersonality();
              // Si personalité definie
              if($participantPerso){
                // Si meme personalité ajouter au tableau de données à afficher
                if($participantPerso->getId() == $userperso){
                  $personalities[] = $participant;
                }
              }  
            }         
        }     
      }       
    }
    

      return $this->render('event/activite.html.twig', [ 'event' => $event, 'closed' => $result , 'participed' => $isParticipe, 'personalities' => $personalities, 'persona' => $persona, 'persoImg' => $persoImg]); 
    }




    

    /**
     * @Route("events/participe/{id}", name="app_event_participe")
     */
    public function eventParticipation(EventRepository $eventRepository,EntityManagerInterface $entityManager, $id): JsonResponse
    {
      $event= $eventRepository ->findOneBy(['id'=> $id]);
      $user= $this->getUser()->getId();

      //enregistrer les relation manytomany si elle n'existe pas deja
      $event->addUser($this->getUser());

      $entityManager->persist($event);
      $entityManager->flush();

      //mettre a jour la valeur dans la table event 'set register_participant
      $eventCurrentParticipants= $event->getParticipantsRegistered();
      $event->setParticipantsRegistered($eventCurrentParticipants+1);
      $entityManager->persist($event);
      $entityManager->flush();

      $response = new JsonResponse(json_encode(
        array(
          "result" => true
        )));
      return $response;
    }


    /**
     * @Route("events/delete/{id}", name="app_event_delete")
     */
    public function eventDeleteUser(EventRepository $eventRepository,EntityManagerInterface $entityManager, $id): JsonResponse
    {
      // Recuperer id de l'evenement
      $event= $eventRepository ->findOneBy(['id'=> $id]);

      // Recuperer id de User 
      $user= $this->getUser()->getId();

      // Retirer user de la table des evenements
      $event->removeUser($this->getUser());
      // Enregistrer les modifications dans la base de données
      $entityManager->persist($event);
      $entityManager->flush();
      
      //mettre a jour la valeur dans la table event 'set register_participant'
      $eventCurrentParticipants= $event->getParticipantsRegistered();

      $event->setParticipantsRegistered($eventCurrentParticipants-1);
      // Enregistrer les modifications dans la base de données
      $entityManager->persist($event);
      $entityManager->flush();


      $response = new JsonResponse(json_encode(
        array(
          "result" => true,
        )));
      return $response;
    }


    /**
     * @Route("/data/{searchTxt}", name="app_data")
     */
    public function getData(EventRepository $eventRepository, $searchTxt): JsonResponse
    {

      // Dans l'eventRepository, grâce à la méthode FindAll, on va chercher les évents.
        $events = $eventRepository->createQueryBuilder('o')
        ->where('o.title LIKE :searchText')
        ->orWhere('o.type_of_event LIKE :searchText')
        ->orWhere('o.category LIKE :searchText')
        ->setParameter('searchText', '%'.$searchTxt.'%')
        ->getQuery()
        ->getResult();

        /* on initialise un tableau vide et on boucle sur events afin de récupérer les éléments 
        qui nous intéressent. Grâce au push, on insère ces éléments dans ce tableau */

        $tab = [];
        foreach($events as $row){
          array_push($tab, 
          [
            'id' => $row->getId(),
            'type_of_event'=>$row->getTypeOfEvent(),
            'date_of_event'=>$row->getDateOfEvent(),
            'description'=>$row->getDescription(),
            'title'=>$row->getTitle(),
          ]);
        }

        return new JsonResponse(json_encode($tab));
    }

    /**
     * @Route("/comments/{id}", name="app_comments")
     */
    public function getCommentsByIdEvent(CommentsRepository $commentRepository,$id):JsonResponse
    {
      $comments= $commentRepository ->findByEventId($id);
      
      return new JsonResponse(json_encode($comments));
    }
    /**
     * @Route("/comments/{id}/post", name="app_comments_post")
     */
    public function setCommentByIdEvent(EventRepository $eventRepository, UserRepository $userRepository, Request $request, $id, EntityManagerInterface $entityManager):JsonResponse
    {
      // on initialise la variable comment avec les functions du repository comment
      $comment = new Comments();

      // récupération des données des requetes provenants du formulaire html
      $text = $request->get('comment');
      $userId = $request->get('user');
      $event = $eventRepository->findOneById($id);
      $user = $userRepository->findOneById($userId);

      // on affecte des données pour remplir la base de données (contenu de l'input du form + informations liés a l'expéditeur)
      $comment->setText($text);
      $comment->setUser($user);
      $comment->setdate(new DateTime('now'));
      $comment->setEvent($event);

      // injection des données dans la BDD
      $entityManager->persist($comment);
      $entityManager->flush();
      



      return new JsonResponse(json_encode("ok"));
    }


}