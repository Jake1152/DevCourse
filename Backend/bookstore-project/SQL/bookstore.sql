CREATE DATABASE bookstore;
USE bookstore;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- index는 예약어
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    form VARCHAR(50) NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    summary TEXT,
    detail TEXT,
    author VARCHAR(255) DEFAULT 'unknown' NOT NULL,
    pages INT NOT NULL,
    contents VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    likes INT DEFAULT 0 NOT NULL,
    pub_date DATE NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE likes (
    user_id INT NOT NULL,
    liked_book_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (liked_book_id) REFERENCES books(id)
);

CREATE TABLE cartItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bookId INT NOT NULL,
    count INT DEFAULT 1 NOT NULL,
    FOREIGN KEY (bookId) REFERENCES books(id)
);

CREATE TABLE delivery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    receiver VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    delivery_id INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    book_title VARCHAR(255) NOT NULL,
    total_count INT NOT NULL,
    FOREIGN KEY (delivery_id) REFERENCES delivery(id)
);

CREATE TABLE orderedBook (
    order_id INT NOT NULL,
    book_id INT NOT NULL,
    count INT NOT NULL,
    PRIMARY KEY (order_id, book_id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);
