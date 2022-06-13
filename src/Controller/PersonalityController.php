<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PersonalityController extends AbstractController
{
    /**
     * @Route("/perso", name="app_personality")
     * 
     */
    public function index(): Response
    {
        return $this->render('personality/index.html.twig', [
            'controller_name' => 'PersonalityController',
        ]);
    }

    /**
     * @Route("/perso/form", name="app_personality_form")
     * 
     */
    public function form(): Response
    {
        return $this->render('personality/form.html.twig', [
            'controller_name' => 'PersonalityController',
        ]);
    }
    
 /**
     * @Route("/perso/form2", name="app_personality_form2")
     * 
     */
    public function form2(): Response
    {
        return $this->render('personality/form2.html.twig', [
            'controller_name' => 'PersonalityController',
        ]);
    }
}