<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220613094418 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE event ADD distance INT DEFAULT NULL, ADD niveau VARCHAR(255) DEFAULT NULL, ADD estimated_time VARCHAR(255) DEFAULT NULL, ADD price INT DEFAULT NULL, ADD address1 VARCHAR(255) NOT NULL, ADD address2 VARCHAR(255) DEFAULT NULL, ADD zipcode INT NOT NULL, ADD city VARCHAR(255) NOT NULL, ADD country VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE event DROP distance, DROP niveau, DROP estimated_time, DROP price, DROP address1, DROP address2, DROP zipcode, DROP city, DROP country');
    }
}
