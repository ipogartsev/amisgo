<?php

namespace App\Repository;

use App\Entity\Event;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Event>
 *
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Event::class);
    }

    public function add(Event $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Event $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /** 
     *  @return Event[] Returns an array of Event objects 
     */ 
 /*   public function findFutureEvents(int $maxResult): array
    { 
     //Chercher les evenements à venir à partir de demain return 
        ->orderBy('e.date_of_event', 'ASC') 
        ->setMaxResults($maxResult) 
        ->getQuery() 
        ->getOneOrNullResult() ;
    } */
  /** 
  * @return Event[] Returns an array of Event objects 
  */ 
  /*public function findPopularEvents(int $maxResult): array
  { 
    //Chercher les evenements les plus populaires
  return $this->createQueryBuilder('e') 
  ->andWhere('e.participants_max/e.participants_registered >= 0.5') 
  ->orderBy('e.date_of_event', 'ASC') ->setMaxResults($maxResult) 
  ->getQuery() 
  ->getResult();
  }*/
  

//    /**
//     * @return Event[] Returns an array of Event objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Event
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
