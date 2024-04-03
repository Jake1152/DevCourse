INSERT INTO users (email, name, password, contact) 
VALUES 
("rancho@gmail.com", "rancho", "2222", "10-888-7777"),
("jim@gmail.com", "jim", "3333", "001-2224-9999");


INSERT INTO channels (name, users_id) 
VALUES 
("jim000", "jim@gmail.com", 3),
("rancho", "rancho@gmail.com", 2);

