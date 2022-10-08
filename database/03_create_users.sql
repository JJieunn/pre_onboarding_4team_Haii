CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `password` varchar(255),
  `email` varchar(255),
  `phone_number` varchar(255),
  `account` varchar(255),
  `grade` int,
  `create_at` DATETIME DEFAULT NOW(),
  `update_at` DATETIME DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);