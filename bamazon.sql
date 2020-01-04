DROP DATABASE IF EXISTS Bamazon_db;
CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE topSongs(
  id INT NOT NULL AUTO_INCREMENT,
  Item_ID INT(45) NULL,
  Product_Name VARCHAR(45) NULL,
  Department_Name VARCHAR(45) NULL,
  Price float(45) NULL,
  Stock_Quantity INT(4) NULL,
  PRIMARY KEY (id)
);