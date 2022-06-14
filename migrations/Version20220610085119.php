<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220610085119 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answers ADD personality_id INT NOT NULL');
        $this->addSql('ALTER TABLE answers ADD CONSTRAINT FK_50D0C606CF3DE080 FOREIGN KEY (personality_id) REFERENCES personality (id)');
        $this->addSql('CREATE INDEX IDX_50D0C606CF3DE080 ON answers (personality_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answers DROP FOREIGN KEY FK_50D0C606CF3DE080');
        $this->addSql('DROP INDEX IDX_50D0C606CF3DE080 ON answers');
        $this->addSql('ALTER TABLE answers DROP personality_id');
    }
}
