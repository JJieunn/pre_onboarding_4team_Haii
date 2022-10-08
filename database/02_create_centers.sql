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