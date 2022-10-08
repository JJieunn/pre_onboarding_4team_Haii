CREATE TABLE `managers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `region_id` INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (region_id) REFERENCES regions(id) ON UPDATE CASCADE
);


