ALTER TABLE `user` MODIFY COLUMN `time_created` bigint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `time_updated` bigint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `time_deleted` bigint DEFAULT 1;--> statement-breakpoint
ALTER TABLE `user` ADD `ip_long` bigint DEFAULT 0;