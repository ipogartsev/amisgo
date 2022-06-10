<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    // Affichage page accueil
    public function index(): Response
    { 

      // Rechercher les evenements dans la barre de recherche
      function seacrh(){
      }

      // Afficher card event
      function showEvent(){

      }


        return $this->render('home/index.html.twig'
        );
    }
}
