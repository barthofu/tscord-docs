---
sidebar_position: 2
---

# Migrations

The synchronization between Entities definition files and actual tables in the database is handled by the MikroORM's migrations system.

Indeed, in order to apply on the database all the changes of your Entities classes, you must generate *migrations* JS files.
They contain all the SQL statements needed to modify the current database state in order to match with the newly modified Entities classes, without losing any data.

:::tip
Migration files should be versionned as it permit to rollback to a certain state of your database.
:::

<hr/>

To generate a migration file, simply do this command in the root of your project:

```bash
npm run migration:create
```

Then, to apply it to the database:

```bash
npm run migration:up
```