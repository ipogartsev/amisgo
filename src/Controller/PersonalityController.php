<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PersonalityController extends AbstractController
{
    /**
     * @Route("/perso", name="app_personality")
     */
    public function index(): Response
    {
        return $this->render('personality/index.html.twig', [
            'controller_name' => 'PersonalityController',
        ]);
    }
}
