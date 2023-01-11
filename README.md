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