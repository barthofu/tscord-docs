---
sidebar_position: 1
---

# ORM

## What is en ORM?

[Object-Relational Mapping](https://en.wikipedia.org/wiki/Object-relational_mapping) (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.$

## Mikro-ORM

TSCord uses **[Mikro-ORM](https://mikro-orm.io/)**, an efficient battle-tested ORM library for Nodejs.

### Entities

One big interest of an ORM is that you **never** touch the database, even when creating new tables.

Indeed, tables are represented by **entities**, which are plain Typescript classes using the *decorator* syntax to provide a simple yet efficient way to build them.

Example of a simple entity:

```ts title=src/entities/User.ts
import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { CustomBaseEntity } from './BaseEntity'

@Entity()
export class User extends CustomBaseEntity {

    @PrimaryKey({ autoincrement: false })
    id: string

    @Property()
    name: string

}
```

Some explanations:
- Every entity must be placed in the `src/entities` directory and be exported in the `src/entities/index.ts` file.
- Every entity class should be decorated with `@Entity()`.
- Every entity must extends `CustomBaseEntity`, which will add *createdAt* and *updatedAt* properties.
- Every attribute of the class marked with the `@Property()` decorator will be a property in the database table.
- `@PrimaryKey()` decorator is used to define entity's unique primary key identifier.

#### For more informations on how to use Mikro-ORM, check their [official documentation here](https://mikro-orm.io/docs/)