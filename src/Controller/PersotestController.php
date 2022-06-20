<?php

namespace App\Controller;


use App\Repository\PersonalityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\QuestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;


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

        $tabCategory = [];
        // on récupère la série de question 0 grâce à la méthode findBy().
        $firstSetOfQuestions = $questionRepository->findBy(['question_set' => 0]);
        //on créé une boucle qui va récupérer pour chaque réponses de l'utilisateur, la catégorie à laquelle elles appartiennent.
        foreach ($firstSetOfQuestions as $row) {
            //on récupére la valeur du "name" dans le formulaire page 1 "flexRadioDefault" avec l'id concaténné des réponses selectionnées
            $param = $request->get('flexRadioDefault' . $row->getId());
            // l'id_category correspond aux catégories de personnalités (il y en a 4 qui contiennent chacune 3 personnalités)
            // on vérifie si la catégorie est déjà présente dans le tableau $tab. Si ça n'est pas le cas on l'ajoute
            if (!isset($tabCategory[$param])) {
                $tabCategory[$param] = 1;
            } else {
                $tabCategory[$param] = $tabCategory[$param] + 1;
            }
        }

        //trie le tableau en ordre décroissant ce qui permet d'avoir en premier élement du tableau, la catégorie avec le plus grand nombre de réponses
        arsort($tabCategory);

        //sachant que la première valeur du tableau est la plus grande on fait une boucle pour vérifier si les valeurs suivantes sont identiques à la première valeur
        $equaltab = [];
        $max = 0;
        foreach ($tabCategory as $key => $value) {
            if ($max == 0) {
                $max = $value;
            }
            if ($value == $max) {
                $equaltab[] = $key;
            }
        }

        // on fait un "random" pour trouver un index aléatoire qui ne dépasse pas la longueur du tableau contenant les catégories avec des égalités.
        $indexCat = random_int(0, count($equaltab) - 1);

        $cat = $equaltab[$indexCat];
        $secondSetOfQuestions = $questionRepository->findBy(['question_set' => $cat]);


        return $this->render(
            'persotest/index_page2.html.twig',
            ['questions' => $secondSetOfQuestions, 'cat' => $cat]
        );
    }



    /**
     * @Route("/persotest/result", name="app_result")
     */
    public function getTestResult(Request $request, QuestionRepository $questionRepository, PersonalityRepository $personalityRepository, EntityManagerInterface $entityManager)
    {
        $tabPerso = [];
        //on récupère la catégorie dans la 2ème page twig du formulaire via un champs caché "<input type="hidden" name="serie" value="{{ cat }}">".
        $cat = $request->get('serie');
        //la série de question correspond à la catégorie de personnalité 
        $secondSetOfQuestions = $questionRepository->findBy(['question_set' => $cat]);

        // le foreach permet de parcourir le tableau de personnalités des réponses de l'utilisateur ($tabPerso)
        foreach ($secondSetOfQuestions as $row) {
            // on récupère les id de personnalité des réponses
            $param = $request->get('flexRadioDefault' . $row->getId());
            // on vérifie si la personnalité est déjà présente dans le tableau $tabPerso. Si ça n'est pas le cas on l'ajoute
            if (!isset($tabPerso[$param])) {
                $tabPerso[$param] = 1;
            } else {
                $tabPerso[$param] = $tabPerso[$param] + 1;
            }
        }
        //trie le tableau en ordre décroissant ce qui permet d'avoir en premier élement du tableau, l'id personnalité avec le plus grand nombre de réponses
        arsort($tabPerso);


        //sachant que la première valeur du tableau est la plus grande on fait une boucle pour vérifier si les valeurs suivantes sont identiques à la première valeur
        $equaltab = [];
        $max = 0;
        foreach ($tabPerso as $key => $value) {
            if ($max == 0) {
                $max = $value;
            }
            if ($value == $max) {
                $equaltab[] = $key;
            }
        }
        //on fait un random quelque soit la taille du tableau de personnalité car s'il n'y a qu'une seule id personnalité dans le tableau le resultat sera forcément l'index de l'id 
        //le random permet également d'obtenir un id aléatoire entre les id avec égalité présentes dans le tableau
        $indexPerso = random_int(0, count($equaltab) - 1);


        $perso = $equaltab[$indexPerso];

        $result = $personalityRepository->findOneById($perso);

        $user = $this->getUser();
        $user->setPersonality($result);


        $entityManager->persist($user);
        $entityManager->flush();

        return $this->render(
            'persotest/index_page_result.html.twig',
            [
                'personality' => $result,
            ]
        );
    }
}
