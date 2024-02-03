/*
  Warnings:

  - You are about to drop the `bloge` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `bloge` DROP FOREIGN KEY `bloge_blogeID_fkey`;

-- DropTable
DROP TABLE `bloge`;

-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `short_des` VARCHAR(300) NOT NULL,
    `long_des` LONGTEXT NOT NULL,
    `blogID` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_blogID_fkey` FOREIGN KEY (`blogID`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
