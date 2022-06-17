---
sidebar_position: 4
---

# Understand the template

Before starting to code a bot using this template, you should understand how it works in a more theorical way (yeah we know, not the most entertaining part :P)

Here is a sample of the architecture of TSCord:

<br/>

![TSCord architecture diagram](./img/tscord_architecture_LIGHT.png#gh-light-mode-only)
![TSCord architecture diagram](./img/tscord_architecture_DARK.png#gh-dark-mode-only)

## Architecture

TSCord is following a clear separation of concerns and is built on multiple layers, each having its own scope in the codebase.

### Presentation layer

The first brick in this layered architecture, and the place where all of the flow starts are the **[Events](/docs/discord/events)** listeners triggered by interactions on Discord. Theses interactions are then redirected to the correct **[Handler](/docs/discord/interactions)**, similar to a *controller* in a MVC pattern.

We can also trigger our own **[Custom Events](/docs/features/custom-events)** at any time from anywhere in the codebase.

### Business layer

The business layer includes all the *logic* of the application. It is represented by the **Services** and **Utility** classes.
Indeed, the *handlers* should contain the least amount of logic possible.

### Data layer

Last but not least, the data layer have the responsability of manipulating and persisting data to a database.

We are using **[Mikro-ORM](/docs/features/database/orm)** within TSCord so you don't have to worry a lot about this layer, except to write some custom methods on repositories.


## Files structure

Here is a simplified view of the template structure:

```bash
tscord-template
├── .env # environments variables
├── package.json # config for npm
├── mikro-orm.config.ts # exports the config of Mikro-ORM for the CLI (/!\ DO NOT TOUCH /!\)
├── pm2.config.json # config for PM2
├── tsconfig.json # config for the typescript transcompiler (/!\ DO NOT TOUCH /!\)
├── .typesafe-i18n.json # config for the i18n plugin (/!\ DO NOT TOUCH /!\)
├── docker-compose.yml # docker-compose config file
├── .docker # dockerfiles
│   └─ #...
├── .vscode # contains the configs for vscode (e.g: debug)
│   └─ # ...
├── assets # assets folder
│   └─ # ...
├── cli # plop CLI code base location
│   └─ # ...
├── configs # bot's config files
│   └─ # ...
├── database
│   ├─ db.sqlite # SQLite database location (if SQLite is configured as database for the bot)
│   └─ migrations # folder where are stored the database migrations
│       └─ #...
├── configs # log files (info, warn, debug, error)
│   └─ # ... 
└── src # all the source code of the bot!
    ├─ commands # commands handlers (can be nested as wanted)
    │   └─ #...
    │       └─ #...
    ├─ entities # entities models definitions (mikro-orm)
    │   └─ #...
    ├─ events # events and custom events handlers
    │   ├─ triggers # custom events triggers based on discord events
    │   │   └─ # ...
    │   └─ #...
    ├─ guards # guards functions (similar to middlewares)
    │   └─ #...
    ├─ i18n # localization (i18n) system. /!\ YOU SHOULD NOT TOUCH FILES, ONLY LOCALES FOLDERS
    │   ├─ en
    │   ├─ fr
    │   └─ #...
    ├─ services # services classes exposing most of the features of the bot
    │   └─ #...
    ├─ utils # utilities
    │   ├─ functions # utility simple pure functions 
    │   │   └─ #...
    │   ├─ classes # utility classes 
    │   │   └─ #...
    │   ├─ decorators # implementations of decorators 
    │   │   └─ #...
    │   └─ types # typescript types definitions 
    │       └─ #...
    ├─ client.ts # discordx client config
    └─ main.ts # main file that starts all the bot logic
```


## Typescript

> TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### Discord.ts

:::tip
Under the hood, *TSCord* uses **discord.ts** that is himself a superset of **discord.js**.

We **HIGHLY** recommand to check their documentation here: **https://discord-ts.js.org/**
::: 

### Decorators

A Decorator is a special kind of declaration that can be attached to a class *declaration*, *method*, *accessor*, *property*, or *parameter*. Decorators use the form @expression , where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

This template and **discord.ts** are using decorators *a lot*.

Even if it is not difficult at all to understand and use them, creating ones is quite another thing. Don't hesitate to check the [official decorators doc](https://www.typescriptlang.org/docs/handbook/decorators.html) and take the already existing ones as examples (`src/utils/decorators`).

## Coding principles

Here are some code principles the template is using and that you should be aware of.

### Dependency Injection and Singletons

Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out.

Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g. Spring) to do that, but they certainly aren't required.

In addition of that, you can use the [Singleton Pattern](https://sourcemaking.com/design_patterns/singleton) that will instantiate a class only once. Furthermore, this is this single instance that will be passed everywhere in your codebase using Dependency Injection.

We are using the **[tsyringe](https://github.com/microsoft/tsyringe)** package to achieve this in this template.

Here is a concrete example of how you would use DI:

```ts
import { singleton, injectable } from 'tsyringe'

@singleton()
class LoggerService {

    private uniqueIdentifier = Math.random() * 1000000 // each time this class is instantiated, it will have a merely unique 'uniqueIdentifier' attribute

    public log(message: string) {

        console.log(`[${this.uniqueIdentifier}] ${message}`)
    }
}

@injectable()
class Foo {

    constructor(
        private logger: LoggerService
    ) {}

    public bar() {

        this.logger.log('Hello world!')
    }
}

const foo = new Foo()
foo.bar() // -> [175000] Hello World!

const logger = container.resolve(LoggerService)
logger.log('Hello World!') // -> [175000] Hello World!

```

Explanations:
- Thanks to the `@singleton` decorator, the `LoggerService` class will be instantiated *once* when your program starts
- Then, this instance can be injected with 2 methods:
    - By passing a parameter to the constructor with the class type of the desired instance (only possible when using the `@injectable` decorator on the class)
    - By using the `container.resolve()` function (so we can get the instance from anywhere in the code, not only from classes)

You can see that both methods will output `175000` as `uniqueIdentifier`, showing that it is from the same class!