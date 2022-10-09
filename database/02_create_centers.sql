CREATE TABLE `centers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `center_name` varchar(255),
  `operating_institution_tel` varchar(255),
  `doctors` int,
  `nurses` int,
  `social_workers` int,
  `address` varchar(255),
  `center_type` varchar(255),
  `operating_institution_name` VARCHAR(200);
  `operating_institution_rep` VARCHAR(200);
  `latitude` DECIMAL(15,12) NOT NULL UNIQUE;
  `longitude` DECIMAL(15,12) NOT NULL UNIQUE;
  `region_id` INT,
    FOREIGN KEY (region_id) REFERENCES regions(id) ON UPDATE CASCADE
);