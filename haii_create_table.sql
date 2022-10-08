CREATE TABLE `regions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `region` varchar(255)
);

CREATE TABLE `centers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `center_name` varchar(255),
  `center_tel` varchar(255),
  `doctors` int,
  `nurses` int,
  `social_workers` int,
  `addres` varchar(255),
  `center_type` varchar(255),
  `region_id` INT,
    FOREIGN KEY (region_id) REFERENCES regions(id) ON UPDATE CASCADE
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `password` varchar(255),
  `email` varchar(255),
  `phone_number` varchar(255),
  `account` varchar(255),
  `create_at` DATETIME DEFAULT NOW(),
  `update_at` DATETIME DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `managers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `region_id` INT,
   FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
   FOREIGN KEY (region_id) REFERENCES regions(id) ON UPDATE CASCADE
);

