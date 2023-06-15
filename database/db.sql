CREATE DATABASE my_diary;

USE my_diary;

CREATE TABLE memory (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
