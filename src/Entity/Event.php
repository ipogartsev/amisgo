<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventRepository::class)
 */
class Event
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type_of_event;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date_of_event;

    /**
     * @ORM\Column(type="integer")
     */
    private $participants_registered;

    /**
     * @ORM\Column(type="integer")
     */
    private $participants_max;

    /**
     * @ORM\Column(type="integer")
     */
    private $participants_min;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $event_picture;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="event")
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity=Comments::class, mappedBy="event")
     */
    private $comments;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $distance;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $niveau;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $estimated_time;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address2;

    /**
     * @ORM\Column(type="integer")
     */
    private $zipcode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeOfEvent(): ?string
    {
        return $this->type_of_event;
    }

    public function setTypeOfEvent(string $type_of_event): self
    {
        $this->type_of_event = $type_of_event;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDateOfEvent(): ?\DateTimeInterface
    {
        return $this->date_of_event;
    }

    public function setDateOfEvent(\DateTimeInterface $date_of_event): self
    {
        $this->date_of_event = $date_of_event;

        return $this;
    }

    public function getParticipantsRegistered(): ?int
    {
        return $this->participants_registered;
    }

    public function setParticipantsRegistered(int $participants_registered): self
    {
        $this->participants_registered = $participants_registered;

        return $this;
    }

    public function getParticipantsMax(): ?int
    {
        return $this->participants_max;
    }

    public function setParticipantsMax(int $participants_max): self
    {
        $this->participants_max = $participants_max;

        return $this;
    }

    public function getParticipantsMin(): ?int
    {
        return $this->participants_min;
    }

    public function setParticipantsMin(int $participants_min): self
    {
        $this->participants_min = $participants_min;

        return $this;
    }

    /**
     * isClosed() vérifie si le nombre de participants maximum est atteint
     *
     * @return boolean
     */
    public function isClosed()
    {
      $max= $this->getParticipantsMax();
      $current = $this->getParticipantsRegistered();
      return($max == $current);
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getEventPicture(): ?string
    {
        return $this->event_picture;
    }

    public function setEventPicture(string $event_picture): self
    {
        $this->event_picture = $event_picture;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addEvent($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeEvent($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Comments>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setEvent($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getEvent() === $this) {
                $comment->setEvent(null);
            }
        }

        return $this;
    }

    public function getDistance(): ?int
    {
        return $this->distance;
    }

    public function setDistance(?int $distance): self
    {
        $this->distance = $distance;

        return $this;
    }

    public function getNiveau(): ?string
    {
        return $this->niveau;
    }

    public function setNiveau(?string $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getEstimatedTime(): ?string
    {
        return $this->estimated_time;
    }

    public function setEstimatedTime(?string $estimated_time): self
    {
        $this->estimated_time = $estimated_time;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(?int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getAddress1(): ?string
    {
        return $this->address1;
    }

    public function setAddress1(string $address1): self
    {
        $this->address1 = $address1;

        return $this;
    }

    public function getAddress2(): ?string
    {
        return $this->address2;
    }

    public function setAddress2(?string $address2): self
    {
        $this->address2 = $address2;

        return $this;
    }

    public function getZipcode(): ?int
    {
        return $this->zipcode;
    }

    public function setZipcode(int $zipcode): self
    {
        $this->zipcode = $zipcode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }
}
