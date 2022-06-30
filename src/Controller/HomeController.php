<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventRepository;
use App\Repository\PersonalityRepository;
use App\Repository\UserRepository;


class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    // Affichage page accueil
    public function index(EventRepository $eventRepository): Response { 
      // message en cas d'absence des evenements
      $message = '';

      // Création des tableaux à redre par controlleur
      $popularEvents = [];
      $futureEvents = [];

      // Etablire la date de jour
      $today = date("Y-m-d H:i:s");

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
      }
      // Si 'popularEvents' est le tableau vide et il y a des evenements à venir
        if (!$popularEvents && $futureEvents){
          // Choix aleatoire parmis les evenements à venir
        $popularEvents = $futureEvents[rand(0, count($futureEvents) - 1)];
      }

      
      //Recuperer les personalités de BDD 
      //$persons = $personalityRepository ->findAll(); 
      // Recuperer 3 personnalités à afficher sur page accueil 
      //$personsShow = array_slice($persons, 0, 3);

      return $this->render('home/index.html.twig', ['popularEvents' => $popularEvents, 'futureEvents' => $futureEvents, 'message' => $message] ); 
    }

    
}


