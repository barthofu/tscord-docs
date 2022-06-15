---
sidebar_position: 1
---

# Interactions

TSCord uses decorators from `discord.ts` to handle interactions.

:::info
Because the template is overriding the default behavior of some of these decorators, you should **always** import them from `@decorators` rather than `discordx`! 
:::

Here is a relevant list of them, linked to the corresponding discord.ts documentation:

## Commands

### [@Slash](https://discord-ts.js.org/docs/decorators/commands/slash)
#### [@SlashChoice](https://discord-ts.js.org/docs/decorators/commands/slash-choice)
#### [@SlashGroup](https://discord-ts.js.org/docs/decorators/commands/slash-group)
#### [@SlashOption](https://discord-ts.js.org/docs/decorators/commands/slash-option)
### [@SimpleCommand](https://discord-ts.js.org/docs/decorators/commands/simple-command)
#### [@SimpleCommandOption](https://discord-ts.js.org/docs/decorators/commands/simple-command-option)

## GUI Interactions

### [@ButtonComponent](https://discord-ts.js.org/docs/decorators/gui/button-component)
### [@ContextMenu](https://discord-ts.js.org/docs/decorators/gui/context-menu)
### [@ModalComponent](https://discord-ts.js.org/docs/decorators/gui/modal-component)
### [@SelectMenuComponent](https://discord-ts.js.org/docs/decorators/gui/select-menu-component)