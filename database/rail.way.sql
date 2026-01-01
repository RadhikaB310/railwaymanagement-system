CREATE DATABASE railway_db;
USE railway_db;

CREATE TABLE booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    train_name VARCHAR(50),
    source VARCHAR(50),
    destination VARCHAR(50)
);
