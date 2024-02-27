DROP DATABASE IF EXISTS BookstoreDB;

CREATE DATABASE BookstoreDB;

USE BookstoreDB;

CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    author_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    CONSTRAINT customer_id_foreign_key FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

CREATE TABLE Order_Items (
    order_id INT NOT NULL,
    book_id INT NOT NULL,
    quantity INT NOT NULL,
	total_price DECIMAL(10,2) NOT NULL,
    CONSTRAINT order_id_foreign_key FOREIGN KEY (order_id) REFERENCES Orders(id),
    CONSTRAINT book_id_foreign_key FOREIGN KEY (book_id) REFERENCES Books(id)
);
