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
}
