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

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $descrip2_title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descrip2_text;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quality_1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quality_2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quality_3;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quote;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $descrip3_title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descrip3_text;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $personality_picture_2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $slogan;

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

    public function getDescrip2Title(): ?string
    {
        return $this->descrip2_title;
    }

    public function setDescrip2Title(?string $descrip2_title): self
    {
        $this->descrip2_title = $descrip2_title;

        return $this;
    }

    public function getDescrip2Text(): ?string
    {
        return $this->descrip2_text;
    }

    public function setDescrip2Text(?string $descrip2_text): self
    {
        $this->descrip2_text = $descrip2_text;

        return $this;
    }

    public function getQuality1(): ?string
    {
        return $this->quality_1;
    }

    public function setQuality1(?string $quality_1): self
    {
        $this->quality_1 = $quality_1;

        return $this;
    }

    public function getQuality2(): ?string
    {
        return $this->quality_2;
    }

    public function setQuality2(?string $quality_2): self
    {
        $this->quality_2 = $quality_2;

        return $this;
    }

    public function getQuality3(): ?string
    {
        return $this->quality_3;
    }

    public function setQuality3(?string $quality_3): self
    {
        $this->quality_3 = $quality_3;

        return $this;
    }

    public function getQuote(): ?string
    {
        return $this->quote;
    }

    public function setQuote(?string $quote): self
    {
        $this->quote = $quote;

        return $this;
    }

    public function getDescrip3Title(): ?string
    {
        return $this->descrip3_title;
    }

    public function setDescrip3Title(?string $descrip3_title): self
    {
        $this->descrip3_title = $descrip3_title;

        return $this;
    }

    public function getDescrip3Text(): ?string
    {
        return $this->descrip3_text;
    }

    public function setDescrip3Text(?string $descrip3_text): self
    {
        $this->descrip3_text = $descrip3_text;

        return $this;
    }

    public function getPersonalityPicture2(): ?string
    {
        return $this->personality_picture_2;
    }

    public function setPersonalityPicture2(?string $personality_picture_2): self
    {
        $this->personality_picture_2 = $personality_picture_2;

        return $this;
    }

    public function getSlogan(): ?string
    {
        return $this->slogan;
    }

    public function setSlogan(?string $slogan): self
    {
        $this->slogan = $slogan;

        return $this;
    }
}
