CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  content TEXT,
  room_id INTEGER,
  username_id INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  room_name INTEGER
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

