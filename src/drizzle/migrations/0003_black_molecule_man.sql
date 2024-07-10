ALTER TABLE `user` RENAME COLUMN `name` TO `fullName`;--> statement-breakpoint
ALTER TABLE `user` ADD `firstName` varchar(255) DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `user` ADD `lastName` varchar(255) DEFAULT '' NOT NULL;