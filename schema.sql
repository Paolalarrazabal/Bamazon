DROP DATABASE IF EXISTS bamazon; 
CREATE DATABASE bamazon; 

USE bamazon; 

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (30) NOT NULL,
department_name VARCHAR (30) NOT NULL,
price DECIMAL (6,2) NOT NULL, 
stock_quantity INTEGER,
PRIMARY KEY (item_id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("necklace", "jewlery", 55.00, 20); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("ring", "jewlery", 120.00, 3); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("sweater", "clothing", 35.00, 43); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("mug", "kitchen", 10.00, 20); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("eyeliner", "makeup", 30.00, 100); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("lipstick", "makeup", 20.00, 84); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("knife", "kitchen", 85.00, 2); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("dresser", "furniture", 224.00, 25); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("boots", "shoes", 60.00, 1); 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("earrings", "jewlery", 30.00, 0); 