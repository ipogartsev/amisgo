<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220618111317 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE personality ADD descrip2_title VARCHAR(255) DEFAULT NULL, ADD descrip2_text LONGTEXT DEFAULT NULL, ADD quality_1 VARCHAR(255) DEFAULT NULL, ADD quality_2 VARCHAR(255) DEFAULT NULL, ADD quality_3 VARCHAR(255) DEFAULT NULL, ADD quote VARCHAR(255) DEFAULT NULL, ADD descrip3_title VARCHAR(255) DEFAULT NULL, ADD descrip3_text LONGTEXT DEFAULT NULL, ADD personality_picture_2 VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE personality DROP descrip2_title, DROP descrip2_text, DROP quality_1, DROP quality_2, DROP quality_3, DROP quote, DROP descrip3_title, DROP descrip3_text, DROP personality_picture_2');
    }
}
