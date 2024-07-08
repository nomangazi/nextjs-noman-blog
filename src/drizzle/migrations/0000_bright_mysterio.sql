CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL DEFAULT '',
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`photo_url` varchar(1000) NOT NULL DEFAULT '',
	`password` varchar(500) NOT NULL DEFAULT '',
	`role` varchar(255) NOT NULL DEFAULT '',
	`is_active` varchar(255) NOT NULL DEFAULT 'active',
	`is_verified` boolean NOT NULL DEFAULT false,
	`time_created` bigint,
	`time_updated` bigint,
	`time_deleted` bigint,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_username_unique` UNIQUE(`username`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`),
	CONSTRAINT `user_phone_unique` UNIQUE(`phone`)
);
