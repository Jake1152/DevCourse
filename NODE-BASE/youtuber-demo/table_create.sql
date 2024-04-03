
CREATE TABLE users
(
    id  INT(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(45) NOT NULL DEFAULT 0,
    password VARCHAR(30) NOT NULL,
    contact VARCHAR(45),
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)

CREATE TABLE channels
(
    id  INT(11) UNIQUE NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    sub_num INT(11) NOT NULL DEFAULT 0,
    video_count INT(11) DEFAULT 0,
    user_id INT(11),
    FOREIGN KEY (user_id)
    REFERENCES users(id),
    PRIMARY KEY (id)  
)

-- REF
-- CREATE TABLE emp_table
-- (   
--     emp_id      INT             UNIQUE NOT NULL AUTO_INCREMENT,
--     emp_name    VARCHAR(100)    NOT NULL,
--     gender      VARCHAR(10)         NULL,
--     age         INT               NULL,
--     hire_date   DATE                 NULL,
--     etc         VARCHAR(300)        NULL,
--     PRIMARY KEY (emp_id)                  
-- );