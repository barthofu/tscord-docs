---
sidebar_position: 3
---

# Sync

## Guilds

TSCord constantly synchronizes guilds between Discord and the database.

This synchronization happens at each startup, so even if the bot is offline and doesn't track some `guildCreate` or `guildDelete` events, it will compare the database and the discord client guilds list to keep it up to date.

Deleted guilds aren't *actualy* deleted, they're `deleted` boolean property in the database is simply set to `true`.
This is really useful as a guild doesn't loose its data if they remove and then re-add the bot.

## Users

Each time an unknown user interact with the bot, it'll create a new user in the database.

So the database contains all users that have been interacting at least once with the bot.