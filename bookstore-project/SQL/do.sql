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