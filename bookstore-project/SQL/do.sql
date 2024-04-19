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

-- 
ALTER TABLE `bookstore`.`cartItems`
ADD UNIQUE (`user_id`);
