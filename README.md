## Sequelize

```
$ npx sequelize-cli init
```
### sequelize cli commands


**Migrations**

If making changes to a table structure or creating
tables

```
$ npx sequelize-cli migration:generate --name mig-name
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:migrate:undo
```

**Seeding**

For adding dummy/initial data to tables

```
npx sequelize-cli seed:generate --name seed-name
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
npx sequelize-cli db:seed --seed seed-name
```

## creating database

```
$ psql -U postgres
psql (12.1)
Type "help" for help.

[local] postgres@postgres=# create database mymdb2;
CREATE DATABASE
Time: 218.667 ms
[local] postgres@postgres=# ^D\q
```

for ubuntu

```
$ ls /home
$ sudo su - <adminusername>
password for admin
$ sudo su - postgres
$ psql
```


## Data models

1 User model

```
{
  "id": "8312321938232",
  "username": "jake",
  "password": "fhwiehr2u3019u312i32121e12",
  "createdAt": DATE,
  "updatedAt": DATE
}
```

2 Movie

```
{
  "id": "3131242542222242",
  "name": "The Matrix",
  "genre": "Sci-fi",
  "language": "English",
  "yearOfRelease": "1999",
  "createdByUser": "8312321938232"
  "createdAt": DATE,
  "updatedAt": DATE
}
```

3 Movie Ratings

```
{
  "id": "1231314321",
  "user": "8312321938232",
  "movie": "3131242542222242",
  "rating": 4, // max is 5
  "createdAt": DATE,
  "updatedAt": DATE
}
```
