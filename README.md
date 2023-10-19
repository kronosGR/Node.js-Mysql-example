# Application Installation and Usage Instructions

```
  npm install
  npm start
```

# Environment Variables

```
  ADMIN_USERNAME = "dabcaowner"
  ADMIN_PASSWORD = "dabca1234"
  DATABASE_NAME = "adoptiondb"
  DIALECT = "mysql"
  DIALECTMODEL = "mysql2"
  PORT = "3000"
  HOST = "localhost"
```

# Additional Libraries/Packages

```
    express-session
    express-session-json
    http-errors
    morgan
    mysql
    mysql2
    passport
    passport-local
    sequelize
    sqlite3
    request
```

# NodeJS Version Used

```
  v18.17.1
```

# DATABASE

```
  CREATE DATABASE `adoptiondb` ;s
```

# DATAINSERTS

```

// Users
[{
  "id": 1,
  "query1": "INSERT INTO users (fullname, username, password, roleid) VALUES ('System admin', 'Admin','admin1234',1)"
}, {
  "id": 2,
  "query1": "INSERT INTO users (fullname, username, password, roleid) VALUES ('User', 'User','user1234',2)"
}, {
  "id": 3,
  "query1": "INSERT INTO users (fullname, username, password, roleid) VALUES ('User2', 'User2','User1234',2)"
}]

// Roles
[{
  "id": 1,
  "query1": "INSERT INTO ROLES (role) VALUES ('admin')"
}, {
  "id": 2,
  "query1": "INSERT INTO ROLES (role) VALUES ('member')"
}]

// Sizes
[{
  "id": 1,
  "query1": "INSERT INTO sizes (name) VALUES ('small')"
}, {
  "id": 2,
  "query1": "INSERT INTO sizes (name) VALUES ('medium')"
}, {
  "id": 3,
  "query1": "INSERT INTO sizes (name) VALUES ('large')"
}]

// Species
[{
  "id": 1,
  "query1": "INSERT INTO species (name) VALUES ('Tedy bear hamster')"
}, {
  "id": 2,
  "query1": "INSERT INTO species (name) VALUES ('Jack-Russel')"
}, {
  "id": 3,
  "query1": "INSERT INTO species (name) VALUES ('Dwarf Hamster')"
}, {
  "id": 4,
  "query1": "INSERT INTO species (name) VALUES ('Budgy')"
}, {
  "id": 5,
  "query1": "INSERT INTO species (name) VALUES ('Tortoise')"
}, {
  "id": 5,
  "query1": "INSERT INTO species (name) VALUES ('Gold Fish')"
}, {
  "id": 6,
  "query1": "INSERT INTO species (name) VALUES ('Lizzard')"
}, {
  "id": 7,
  "query1": "INSERT INTO species (name) VALUES ('Bearded Dragon')"
}, {
  "id": 8,
  "query1": "INSERT INTO species (name) VALUES ('Parrot')"
}, {
  "id": 9,
  "query1": "INSERT INTO species (name) VALUES ('Corn snake')"
}]

// Temperaments
[{
  "id": 1,
  "query1": "INSERT INTO temperaments (name) VALUES ('calm')"
}, {
  "id": 2,
  "query1": "INSERT INTO temperaments (name) VALUES ('scared')"
}, {
  "id": 3,
  "query1": "INSERT INTO temperaments (name) VALUES ('happy')"
}, {
  "id": 4,
  "query1": "INSERT INTO temperaments (name) VALUES ('lazy')"
}, {
  "id": 5,
  "query1": "INSERT INTO temperaments (name) VALUES ('energetic')"
}]

// Animals
[{
  "id": 1,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Coco','2020-02-12',2,1);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 3);"
}, {
  "id": 2,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Ted','2021-02-12',1,1);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 3);"
}, {
  "id": 3,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Coco','2020-02-12',3,2);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 5);"
}, {
  "id": 4,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Everest','2019-02-12',4,1);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 2);"
}, {
  "id": 5,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid, UserId) VALUES ('Rocko','2020-02-12',5,2,2);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 4);"
}, {
  "id": 6,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Goldy','2023-02-12',6,1);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);"
}, {
  "id": 7,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Lizzy','2020-02-12',7,2);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 4);"
}, {
  "id": 8,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Goga','2018-02-12',8,3);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 4);",
  "query4": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 3);"
}, {
  "id": 9,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Tweet Tweet','2020-02-12',9,3);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 4);"
}, {
  "id": 10,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Toothless','2017-02-12',10,2);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 3);"
}, {
  "id": 11,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Sophie','2020-02-12',2,1);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 3);"
}, {
  "id": 12,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Teddy','2021-02-12',1,1);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 3);"
}, {
  "id": 13,
  "query1": "INSERT INTO animals (name, birthdate, specieid, sizeid) VALUES ('Roger','2020-02-12',9,3);",
  "query2": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 1);",
  "query3": "INSERT INTO animtempes (AnimalId, TemperamentId) values(LAST_INSERT_ID(), 2);"
}]
```

# DATABASEACCESS

```
  CREATE USER 'dabcaowner'@'localhost' IDENTIFIED BY 'dabca1234';
  GRANT ALL PRIVILEGES ON adoptiondb.* TO 'dabcaowner'@'localhost';


```

# DATABASEQUERIES
