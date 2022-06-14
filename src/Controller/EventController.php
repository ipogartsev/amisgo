<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventRepository;

class EventController extends AbstractController
{
    /**
     * @Route("/events", name="app_events")
     */
    // Affichage des evenements sur la page     
    public function index(EventRepository $eventRepository): Response
    {
      // Chercher les evenements dans BDD
      $events = $eventRepository->findAll();

      // Retrouver la date d'aujourd'hui
      $today = date("Y-m-d H:i:s");
      // Parcourir 'events' pour selectionner les evenements en date d'aujourd'hui
        foreach($events as $event){
          $eventDate = $event->getDateOfEvent();
          if($today < $eventDate){
            $futureEvents[] = $event;         
          }
        }

        return $this->render('event/index.html.twig', [
            'futureEvents' => $futureEvents,
        ]);
    }

    /**
     * @Route("events/{title}", name="app_event_details")
     */
    // page d'ffichage d'une activité
    public function eventDetails(EventRepository $eventRepository, string $title): Response
    { 
      //Recuperer les details d'evenement
      $event = $eventRepository ->findOneBy(['title' => $title]); 
      //  
      return $this->render('personality/activite.html.twig', [ 'event' => $event ]); 
    }
    
}
