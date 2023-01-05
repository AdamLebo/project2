DROP DATABASE IF EXISTS cars_db;
CREATE DATABASE cars_db;

USE cars_db;

CREATE TABLE users (
    id INT NOT NULL,
    username VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(30) NOT NULL
    PRIMARY KEY (id)
);

CREATE TABLE cars (
    id INT NOT NULL,
    owner_id INT NOT NULL,
    year INT NOT NULL,
    make VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    color VARCHAR(30) NOT NULL,
    FOREIGN KEY (owner_id)
    REFERENCES users(id)
    ON DELETE SET NULL
)