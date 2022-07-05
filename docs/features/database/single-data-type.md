---
sidebar_position: 4
---

# Single Data Type

The `Data` entity is quite special as it is an implementation of the [EAV pattern](https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model).

It permits to have key/value kind of data stored in an SQL database, which is not really possible by default.

These data and their initial values are stored in the `defaultData` variable in the `src/entities/Data.ts` file, and you can add as much key/value as you want.

To interact with them, we've created a custom repository for the Data entity with very simple `set`, `get` and `update` methods. All of these methods are strongly **typed** thanks to the infered types of the initial values.

Usage example:

```ts
@Discord()
@injectable()
export default class PingCommand {

    constructor(
        private db: Database
    ) {}

    @Slash('ping')
    async pingHandler() {

        const dataRepo = this.db.getRepo(Data)

        const isInMaintenance = dataRepo.get('maintenance') // -> false

        await dataRepo.set('maintenance', true) // -> true

        await dataRepo.update('maintenance', (currentValue) => !currentValue) // -> false

        await dataRepo.set('maintenance', 'foo') // -> ERROR: Type 'string' is not assignable to type 'boolean'
    }

}
```

Here are the built-in key/value data:

| Key               | Type      | Default value | Description                              |
|-------------------|-----------|---------------|------------------------------------------|
| `maintenance`     | *boolean* | false         | Actual maintenance state of the bot      |
| `lastMaintenance` | *Date*    | Date.now()    | Timestamp of the last maintenance        |
| `lastStartup`     | *Date*    | Date.now()    | Timestamp of the last startup of the bot |