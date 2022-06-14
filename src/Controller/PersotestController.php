<?php

namespace App\Controller;

use App\Entity\Answers;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\QuestionRepository;
use App\Repository\AnswersRepository;
use PhpParser\Node\Stmt\Foreach_;
use Symfony\Component\HttpFoundation\Request;

class PersotestController extends AbstractController
{
    /**
     * @Route("/persotest", name="app_persotest")
     */
    public function index(QuestionRepository $questionRepository, AnswersRepository $answersRepository): Response
    {
        //permet d'afficher la première série de questions
        $firstSetOfQuestions = $questionRepository->findBy(['question_set' => 0]);
        // dd($firstSetOfQuestions);

        //    $secondSetOfQuestions = $questionRepository->findBy(['question_set' => $question_set]);

        return $this->render(
            'persotest/index.html.twig',
            ['questions' => $firstSetOfQuestions]
        );
    }

    /**
     * @Route("/persotest/page2", name="app_persotest2")
     */
    public function getSecondSetOfQuestion(Request $request, QuestionRepository $questionRepository)
    {
        //dd($request);
        $tab = [];
        $firstSetOfQuestions = $questionRepository->findBy(['question_set' => 0]);
        foreach ($firstSetOfQuestions as $row) {
            $param = $request->get('flexRadioDefault_' . $row->getId());
            array_push($tab, $param);
        }
        dd($tab);

        // dd($listOfAnswersByCategory);
        // $request->getIdCategory();
        // $result = [];
        // $responsesFirstSet = [];
    }
}
