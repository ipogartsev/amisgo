<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\PersonalityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;



class ProfileController extends AbstractController
{


    /**
     * @Route("user/profile", name="app_user_profile")
     */

    public function index(UserRepository $userRepository, PersonalityRepository $personalityRepository): Response
    {
        // Recuperer l'id d'user
        $user = $this->getUser();
        $userData = $userRepository->findOneById($user);

        // Initialiser variable de personalité
        $personality = null;

        // Si personalité est définie recuperer la
        if ($userData->getPersonality() != null ) {
            $personality = $personalityRepository->findOneById($userData->getPersonality()->getId());
        } 

        // Rendrer les données pour affichage de page
        return $this->render('profile/index.html.twig', [
            'userData' => $userData,
            'personality' => $personality
        ]);
    }
}
