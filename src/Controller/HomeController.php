<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventRepository;
use App\Repository\PersonalityRepository;


class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    // Affichage page accueil
    public function index(EventRepository $eventRepository, PersonalityRepository $personalityRepository): Response { 
      // message en cas d'absence des evenements
      $message = '';
      $popularEvents = [];
      $futureEvents = [];
      $events = $eventRepository->findAll();
      foreach($events as $event) {
        
        if( $event->getParticipantsRegistered()/$event->getParticipantsMax() > 0.5){
          $popularEvents[] = $event;
        }

        $today = date("Y-m-d H:i:s");
        $eventDate = $event->getDateOfEvent();
        if($today < $eventDate){
          $futureEvents[] = $event;
        }

      }


      //S'il n y a pas des evenements en cours mettre le message
      if(!$futureEvents){

        $message = 'Il n y a pas d\'evenements à venir';
      }

      // Si les populaires n'ont pas trouvés mettre les evenements à venir en place
        if (!$popularEvents){
        $popularEvents = $futureEvents;
      }

      //Recuperer les personalités de BDD 
      $persons = $personalityRepository ->findAll(); 
      // Recuperer 3 personnalités à afficher sur page accueil 
      $personsShow = array_slice($persons, 0, 3);

      return $this->render('home/index.html.twig', ['popularEvents' => $popularEvents, 'futureEvents' => $futureEvents, 'persons' => $persons, 'message' => $message] ); 
    }
}
