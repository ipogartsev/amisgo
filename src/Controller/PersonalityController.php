<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PersonalityRepository;


class PersonalityController extends AbstractController
{
    /**
     * @Route("/perso", name="app_personality")
     * 
     */
   
    public function index(PersonalityRepository $personalityRepository): Response
    {

        $lesEclaireurs=['Les Meneurs','Les Éclaireurs', 'Les Émancipateurs','Les Intermédiaires' ];

        return $this->render('personality/index.html.twig', [
            'persons' => $personalityRepository->findAll(),
        ]);
    }

    /**
     * @Route("/perso/{title}", name="app_perso")
     */
    public function persoShow(PersonalityRepository $personalityRepository, string $title): Response
    { 
    
      //Recuperer une personalité par type 
      $person = $personalityRepository ->findOneBy(['type_of_personality' => $title]); 
      // Recuperer 3 personnalités à afficher sur page accueil 
      return $this->render('personality/persona.html.twig', [ 'person' => $person ]); 
    }
   
    
    
}

