-- # 16APR24
-- books column 이름 중 일부가  예약어라서 변경
ALTER TABLE books
RENAME COLUMN format to form;
ALTER TABLE books
RENAME COLUMN description to detail;
ALTER TABLE books
RENAME COLUMN index_ to contents;



-- !!중요, 이미 생성된 테이블과 같은 테이블을 만들 수 있는 query 제공
SHOW CREATE TABLE books;

ALTER TABLE books DROP FOREIGN KEY `books_ibfk_1`;

ALTER TABLE books DROP COLUMN category_id;

ALTER TABLE users RENAME COLUMN username to email;

-- remove auto_increment 조건
ALTER TABLE category  MODIFY id INT(11) NOT NULL;

INSERT INTO category (id, name) VALUES
(1, '소설'),
(2, '자기계발'),
(3, '역사');

-- # 17APR24 category_id FK to books table 
ALTER TABLE books ADD COLUMN img VARCHAR(255) AFTER title;
ALTER TABLE books ADD COLUMN category_id INT(11) AFTER img;

-- category_id가 아예 테이블에 컬럼으로 없던 경우
ALTER TABLE books
ADD COLUMN category_id INT(11) NOT NULL,
ADD FOREIGN KEY (category_id) REFERENCES category(id);


-- category_id가 테이블에 컬럼으로 있지만, 외래키 제약조건이 걸려있지 않은 경우
ALTER TABLE books
ADD CONSTRAINT fk_category_id
FOREIGN KEY (category_id) REFERENCES category(id);

ALTER TABLE `bookstore`.`books`
ADD INDEX category_id_idx(`category_id` ASC) VISIBLE;

ALTER TABLE `bookstore`.`books`
ADD CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `bookstore`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION;

-- book, category table join

SELECT * 
FROM books 
LEFT JOIN category 
ON books.category_id = category_id;


-- # 18APR24 likes table add column
---- gemini, OCR

ALTER TABLE `bookstore`.`likes`
ADD INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
ADD INDEX `liked_book_id_idx` (`liked_book_id` ASC) VISIBLE;

ALTER TABLE `bookstore`.`likes`
ADD CONSTRAINT `user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `bookstore`.`users` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,

ADD CONSTRAINT `liked_book_id`
  FOREIGN KEY (`liked_book_id`)
  REFERENCES `bookstore`.`books` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- mysqldump 실패
-- SELECT concat('RENAME TABLE ',TABLE_SCHEMA,'.',TABLE_NAME,' TO ','Bookshop.',TABLE_NAME,';')
-- FROM information_schema.tables
-- WHERE TABLE_SCHEMA LIKE 'bookstore';

-- SELECT concat('RENAME TABLE ',TABLE_SCHEMA,'.',TABLE_NAME,' TO ','bookstore',TABLE_NAME,';')
-- FROM information_schema.tables
-- WHERE TABLE_SCHEMA LIKE 'Bookshop';

-- mariadb-dump -uroot -p bookstore > bookstore.sql

INSERT INTO likes (user_id, liked_book_id) VALUES (1, 1);

-- # 19APR24

-- cartItmes
ALTER TABLE `bookstore`.`cartItems`
ADD COLUMN user_id INT(11) AFTER count;

ALTER TABLE `bookstore`.`cartItems`
RENAME COLUMN bookId to book_id;

ALTER TABLE `bookstore`.`cartItems`
RENAME COLUMN num to quantity;


ALTER TABLE `bookstore`.`cartItems`
ADD INDEX `book_id_idx` (`book_id` ASC) VISIBLE;

ALTER TABLE `bookstore`.`cartItems`
ADD INDEX `user_id_idx` (`user_id` ASC) VISIBLE;

ALTER TABLE `bookstore`.`cartItems`
ADD CONSTRAINT `book_id`
FOREIGN KEY (`book_id`)
REFERENCES `bookstore`.`books` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

-- 에러 발생
ALTER TABLE `bookstore`.`cartItems`
ADD CONSTRAINT `user_id`
FOREIGN KEY (`user_id`)
REFERENCES `bookstore`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE `bookstore`.`cartItems`
ADD UNIQUE (`user_id`);

-- 아래 케이스들 중 하나 처리
---- case 1
ALTER TABLE `bookstore`.`cartItems`
ADD CONSTRAINT `fk_user_id`
FOREIGN KEY (`user_id`)
REFERENCES `bookstore`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

---- case 2
ALTER TABLE `bookstore`.`cartItems`
DROP FOREIGN KEY `user_id`;

ALTER TABLE `bookstore`.`cartItems`
ADD CONSTRAINT `user_id`
FOREIGN KEY (`user_id`)
REFERENCES `bookstore`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;


-- # 22APR24

-- cartItems;
ALTER TABLE cartItems RENAME COLUMN num to quantity;

SELECT cartItems.id, book_id, title, summary, quantity, price \
              FROM cartItems LEFT JOIN books \
              On cartItems.book_id = books.id


-- # 23APR24 books,

SELECT * FROM books WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 12 MONTH) AND NOW() LIMIT 4 OFFSET 0;
SELECT * FROM books WHERE category_id='1' AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 12 MONTH) AND NOW() LIMIT 4 OFFSET 0;
SELECT * FROM books WHERE category_id='1' AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW() LIMIT 4 OFFSET 0 
SELECT * FROM books WHERE category_id=1 AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 12 MONTH) AND NOW() LIMIT 4 OFFSET 0
SELECT * FROM books WHERE category_id=1 AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 12 MONTH) AND NOW() LIMIT 4 OFFSET 0


-- # 24APR24 cartItems

ALTER TABLE orders RENAME COLUMN total_count to total_quantity;

ALTER TABLE delivery MODIFY id INT(11) NOT NULL;

-- 
ALTER TABLE orders MODIFY column_name column_definition AFTER another_column_name;


-- ## null 인것 다른 값으로 대체하여 SELECT하기
-- case1
select ifnull(category_id, '123') as category_id 
from books; 

-- case2
select coalesce(category_id, 1) as category_id 
from books; 

-- case3
select case 
    when category_id is null then 1 
    else category_id end as category_id 
from books; 

-- case4
select IFNULL(category_id, 1) FROM books;


-- ## null 인것 채우기!!
UPDATE books
SET category_id=1
WHERE category_id IS NULL;


-- orders 테이블 비우기
TRUNCATE orders;
ERROR 1701 (42000): Cannot truncate a table referenced in a foreign key constraint (`bookstore`.`orderedBook`, CONSTRAINT `orderedBook_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `bookstore`.`orders` (`id`))

SET FOREIGN_KEY_CHECKS = 0;
Query OK, 0 rows affected (0.127 sec)

MariaDB [bookstore]> TRUNCATE TABLE orders;
Query OK, 0 rows affected (0.129 sec)


-- table column 순서 변경
ALTER TABLE table_name MODIFY column_name column_definition AFTER another_column_name;

ALTER TABLE orders MODIFY book_title varchar(255) AFTER id;
ALTER TABLE orders MODIFY total_quantity int(11) NOT NULL AFTER book_title;
ALTER TABLE orders MODIFY total_price decimal(10,2) NOT NULL AFTER total_quantity;
ALTER TABLE orders MODIFY delivery_id int(11) NOT NULL AFTER created_at;
ALTER TABLE orders ADD COLUMN user_id int(11) AFTER created_at 

ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users(id);

| orders | CREATE TABLE `orders` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci |

MariaDB [bookstore]> DESC orders;
+----------------+---------------+------+-----+---------------------+----------------+
| Field          | Type          | Null | Key | Default             | Extra          |
+----------------+---------------+------+-----+---------------------+----------------+
| id             | int(11)       | NO   | PRI | NULL                | auto_increment |
| book_title     | varchar(255)  | YES  |     | NULL                |                |
| total_quantity | int(11)       | NO   |     | NULL                |                |
| total_price    | decimal(10,2) | NO   |     | NULL                |                |
| created_at     | timestamp     | NO   |     | current_timestamp() |                |
| user_id        | int(11)       | YES  |     | NULL                |                |
| delivery_id    | int(11)       | NO   | MUL | NULL                |                |
+----------------+---------------+------+-----+---------------------+----------------+
7 rows in set (0.001 sec)


-- orderedBook

ALTER TABLE orderedBook RENAME COLUMN count to quantity;