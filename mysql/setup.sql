create database peopledb character set utf8 collate utf8_general_ci;

USE peopledb;

CREATE TABLE people (id INT PRIMARY KEY AUTO_INCREMENT, name varchar(255) NOT NULL);

INSERT INTO people (name) VALUES ("Bruno")



