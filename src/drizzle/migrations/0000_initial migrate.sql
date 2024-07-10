CREATE TABLE `post` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`authorId` bigint DEFAULT 0,
	`title` text NOT NULL DEFAULT (''),
	`content` text NOT NULL DEFAULT (''),
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`ipLong` bigint DEFAULT 0,
	`creator` bigint DEFAULT 0,
	`timeCreated` bigint DEFAULT 0,
	`timeUpdated` bigint DEFAULT 0,
	`timeDeleted` bigint DEFAULT 0,
	CONSTRAINT `post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`fullName` varchar(255) NOT NULL DEFAULT '',
	`firstName` varchar(255) NOT NULL DEFAULT '',
	`lastName` varchar(255) NOT NULL DEFAULT '',
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`photo_url` varchar(1000) NOT NULL DEFAULT '',
	`password` varchar(255) NOT NULL DEFAULT '',
	`role` varchar(20) NOT NULL DEFAULT 'user',
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`address` varchar(500) NOT NULL DEFAULT '',
	`isVerified` boolean NOT NULL DEFAULT false,
	`ipLong` bigint DEFAULT 0,
	`creator` bigint DEFAULT 0,
	`timeCreated` bigint DEFAULT 0,
	`timeUpdated` bigint DEFAULT 0,
	`timeDeleted` bigint DEFAULT 0,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_username_unique` UNIQUE(`username`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`),
	CONSTRAINT `user_phone_unique` UNIQUE(`phone`)
);
