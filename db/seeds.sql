CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` Int( 100 ) AUTO_INCREMENT NOT NULL,
  `goal` VARCHAR( 300) NOT NULL,
  `acomplished` boolean NOT NULl,

  PRIMARY KEY ( `id` ) 
);