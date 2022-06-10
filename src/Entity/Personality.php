<?php

namespace App\Entity;

use App\Repository\PersonalityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PersonalityRepository::class)
 */
class Personality
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
    private $type_of_personality;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $personality_picture;

    /**
     * @ORM\OneToMany(targetEntity=Answers::class, mappedBy="personality")
     */
    private $answers;

    public function __construct()
    {
        $this->answers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeOfPersonality(): ?string
    {
        return $this->type_of_personality;
    }

    public function setTypeOfPersonality(string $type_of_personality): self
    {
        $this->type_of_personality = $type_of_personality;

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

    public function getPersonalityPicture(): ?string
    {
        return $this->personality_picture;
    }

    public function setPersonalityPicture(string $personality_picture): self
    {
        $this->personality_picture = $personality_picture;

        return $this;
    }

    /**
     * @return Collection<int, Answers>
     */
    public function getAnswers(): Collection
    {
        return $this->answers;
    }

    public function addAnswer(Answers $answer): self
    {
        if (!$this->answers->contains($answer)) {
            $this->answers[] = $answer;
            $answer->setPersonality($this);
        }

        return $this;
    }

    public function removeAnswer(Answers $answer): self
    {
        if ($this->answers->removeElement($answer)) {
            // set the owning side to null (unless already changed)
            if ($answer->getPersonality() === $this) {
                $answer->setPersonality(null);
            }
        }

        return $this;
    }
}
