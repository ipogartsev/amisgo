<?php

namespace App\Controller;

use App\Entity\Answers;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\QuestionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\Length;

class PersotestController extends AbstractController
{
    /**
     * @Route("/persotest", name="app_persotest")
     */
    public function index(QuestionRepository $questionRepository): Response
    {
        //permet d'afficher la première série de questions. Il s'agit de la série 0.
        $firstSetOfQuestions = $questionRepository->findBy(['question_set' => 0]);

        return $this->render(
            'persotest/index.html.twig',
            ['questions' => $firstSetOfQuestions]
        );
    }

    /**
     * @Route("/persotest/page2", name="app_persotest2")
     */
    public function getSecondSetOfQuestions(Request $request, QuestionRepository $questionRepository)
    {
        // dd($request);
        //boucle pour récupérer la catégorie des réponses de la première série de questions dans un "array"
        $tab = [];
        $firstSetOfQuestions = $questionRepository->findBy(['question_set' => 0]);
        foreach ($firstSetOfQuestions as $row) {
            //on récupére la valeur du "name" dans le formulaire page 1 "flexRadioDefault" avec l'id concaténné des réponses selectionnées
            $param = $request->get('flexRadioDefault' . $row->getId());
            //on insère l'ensemble des "id_category" des réponses selectionnées dans le tableau $tab
            // l'id_category correspond aux catégories de personnalités (il y en a 4 qui contiennent chacune 3 personnalités)
            if (!isset($tab[$param])) {
                $tab[$param] = 1;
            } else {
                $tab[$param] = $tab[$param] + 1;
            }
        }
        // $tab2 =[];
        // $idCategory =

        // foreach ($tab as $idCategory => $row){
        //     $tab2[$row]=$tab2[]+1;
        // }
        //trie le tableau en ordre décroissant
        arsort($tab);
        // dd($tab);
        $equaltab = [];
        $max = 0;
        foreach ($tab as $key => $value) {
            if ($max == 0) {
                $max = $value;
            }
            if ($value == $max) {
                $equaltab[] = $key;
            }
        }
        // //dd($equaltab);
        // $cat=random_int((count($equaltab),$equaltab.len)-1);
        // dd($cat);
        // // if(count($equaltab)!=1){

        // // }

    }
}
