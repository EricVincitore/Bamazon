DROP DATABASE IF EXISTS Bamazon_db;
CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE inventory(
  id INT NOT NULL AUTO_INCREMENT,
  Product_Name VARCHAR(45) NULL,
  Department_Name VARCHAR(45) NULL,
  Price float(45) NULL,
  Stock_Quantity INT(4) NULL,
  PRIMARY KEY (id)
);