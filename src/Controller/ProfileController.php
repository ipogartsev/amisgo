<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\UserRepository;
use App\Repository\EventRepository;


class ProfileController extends AbstractController
{


    /**
     * @Route("user/profile/{id}", name="app_user_profile")
     */

    public function index(UserRepository $userRepository, $id): Response
    {
        $firstUser= $userRepository ->findOneBy(['id'=> 1]);

        return $this->render('profile/index.html.twig', [
            ['user' => $firstUser]
        ]);
    }
}
