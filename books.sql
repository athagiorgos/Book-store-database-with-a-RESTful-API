CREATE DATABASE book;

USE book;

CREATE TABLE books (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
author VARCHAR( 25 ) NOT NULL ,
title VARCHAR( 40 ) NOT NULL ,
price FLOAT NOT NULL,
genre VARCHAR( 20 ) NOT NULL

) ENGINE = MYISAM ;

select * from books;
describe books;
drop table books; 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';