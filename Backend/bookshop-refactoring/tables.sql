CREATE TABLE `category` (
`id` int(11) NOT NULL,
`name` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
);


CREATE TABLE `books` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(255) NOT NULL,
`img` varchar(255) DEFAULT NULL,
`category_id` int(11) DEFAULT NULL,
`form` varchar(50) NOT NULL,
`isbn` varchar(20) NOT NULL,
`summary` text DEFAULT NULL,
`detail` text DEFAULT NULL,
`author` varchar(255) NOT NULL DEFAULT 'unknown',
`pages` int(11) NOT NULL,
`contents` varchar(255) NOT NULL,
`price` decimal(10,2) NOT NULL,
`likes` int(11) NOT NULL DEFAULT 0,
`pub_date` date NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `isbn` (`isbn`),
KEY `category_id_idx` (`category_id`),
CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);


CREATE TABLE `cartItems` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`book_id` int(11) NOT NULL,
`quantity` int(11) NOT NULL DEFAULT 1,
`user_id` int(11) NOT NULL,
PRIMARY KEY (`id`),
KEY `book_id_idx` (`book_id`),
KEY `user_id_idx` (`user_id`),
CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT `cartItems_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`)
);



CREATE TABLE `delivery` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`address` varchar(255) NOT NULL,
`receiver` varchar(255) NOT NULL,
`contact` varchar(20) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `likes` (
  `user_id` int(11) NOT NULL,
  `liked_book_id` int(11) NOT NULL,
  KEY `user_id_idx` (`user_id`),
  KEY `liked_book_id_idx` (`liked_book_id`),
  CONSTRAINT `liked_book_id` FOREIGN KEY (`liked_book_id`) REFERENCES `books` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`liked_book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_title` varchar(255) DEFAULT NULL,
  `total_quantity` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  `delivery_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `delivery_id` (`delivery_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`delivery_id`) REFERENCES `delivery` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `orderedBook` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`order_id` int(11) NOT NULL,
`book_id` int(11) NOT NULL,
`quantity` int(11) NOT NULL,
PRIMARY KEY (`id`),
KEY `book_id` (`book_id`),
CONSTRAINT `orderedBook_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
CONSTRAINT `orderedBook_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`)
);


CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
);

















