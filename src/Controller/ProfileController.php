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
     * @Route("user/profile/{id}", name="app_user_profile")
     */

    public function index(UserRepository $userRepository, PersonalityRepository $personalityRepository, $id): Response
    {

        $userData = $userRepository->findOneById($id);
        $personality = $personalityRepository->findOneById($userData->getPersonality()->getId());


        return $this->render('profile/index.html.twig', [
            'userData' => $userData,
            'personality' => $personality
        ]);
    }
}
