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

        $tab = [];
        // on récupère la série de question 0 grâce à la méthode findBy().
        $firstSetOfQuestions = $questionRepository->findBy(['question_set' => 0]);
        //on créé une boucle qui va récupérer pour chaque réponses de l'utilisateur, la catégorie à laquelle elles appartiennent.
        foreach ($firstSetOfQuestions as $row) {
            //on récupére la valeur du "name" dans le formulaire page 1 "flexRadioDefault" avec l'id concaténné des réponses selectionnées
            $param = $request->get('flexRadioDefault' . $row->getId());
            // l'id_category correspond aux catégories de personnalités (il y en a 4 qui contiennent chacune 3 personnalités)
            // on vérifie si la catégorie est déjà présente dans le tableau $tab. Si ça n'est pas le cas on l'ajoute
            if (!isset($tab[$param])) {
                $tab[$param] = 1;
            } else {
                $tab[$param] = $tab[$param] + 1;
            }
        }

        //trie le tableau en ordre décroissant permet de connaître la catégorie avec le plus grand nombre de réponse
        arsort($tab);
        // dd($tab);
        //sachant que la première valeur du tableau est la plus grande on fait une boucle pour vérifier si les valeurs suivantes sont identiques à la première valeur
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
        // dd($equaltab);
        // on fait un "random" pour trouver un index aléatoire qui ne dépasse pas la longueur du tableau contenant les catégories avec des égalités
        $indexCat = random_int(0, count($equaltab) - 1);

        $cat = $equaltab[$indexCat];
        $secondSetOfQuestions = $questionRepository->findBy(['question_set' => $cat]);
        //dd($cat);

        return $this->render(
            'persotest/index_page2.html.twig',
            ['questions' => $secondSetOfQuestions]
        );
    }
}
