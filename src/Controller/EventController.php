<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventRepository;
use App\Repository\UserRepository;
use Symfony\Component\Validator\Constraints\Length;

class EventController extends AbstractController
{
    /**
     * @Route("/events", name="app_events")
     */
    // Affichage des evenements sur la page     
    public function index(EventRepository $eventRepository, UserRepository $userRepository): Response
    {
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
        if($today < $eventDate){
          $futureEvents[] = $event;         
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
              // Créer le tableau d'evenements à recommandé par type d'evenement
              $suggestedEvents = [];
              $typeEvents = [];
              foreach($userEvents as $event){
                $typeEvents[] = $event->getTypeOfEvent();
              };
              // Parcourir 'futureEvents' et choisir les evenements par type selon le tableau typeEvents
              foreach($futureEvents as $event){
                if(in_array($event->getTypeOfEvent(), $typeEvents)){
                  //Ajouter l'evenement au tableau de recommendation
                  $suggestedEvents[] = $event;
                }
              }
            }               
            // Si il n'y a pas des evenements à venir à recommander choisir les evenements recommandés au hasard
            if($suggestedEvents){
              $suggestedEvents = $futureEvents[rand(0, count($futureEvents)-1)];
            }
          } else{
            $messageUser = 'Connectez-vous pour voir les evenements recommandés pour vous ! ';
          }
       }
      }

        return $this->render('event/index.html.twig', [
            'futureEvents' => $futureEvents, 'suggestedEvents' => $suggestedEvents, 'popularEvents' => $popularEvents, 'message' => $message, 'messageUser' => $messageUser         
        ]);
    }

    /**
     * @Route("events/{title}", name="app_event_details")
     */
    // page d'affichage d'une activité
    public function eventDetails(EventRepository $eventRepository, string $title): Response
    { 
      //Recuperer les details d'evenement
      $event = $eventRepository ->findOneBy(['title' => $title]); 
      //  
      return $this->render('event/activite.html.twig', [ 'event' => $event ]); 
    }
    
}
