---
sidebar_position: 2
---

# Configuration

## Env

The first thing you have to do after installing the template is to setup the environments variables.
TSCord supports `.env` files out-of-the-box.

You'll find a `.env.example` file in the root directory with the following key/values pairs:

| Key                 | Value                                                                                     | Required |
|---------------------|-------------------------------------------------------------------------------------------|----------|
| **BOT_TOKEN**       | Your discord bot token (can be found [here](https://discord.com/developers/applications)) | ✔        |
| **TEST_GUILD_ID**   | The ID of the guild where you'll make tests with your bot                                 | ✔        |
| **IMGUR_CLIENT_ID** | Imgur client ID (see [here](/docs/features/assets) for more informations)                 |          |

Once you have filled up the required values, rename the file from `.env.example` to `.env`.

## Configs

Nearly all the configuration of the bot lives in the `src/config/` folder. 
It is then splitted in separated files by concern.

### General

```ts title=src/config/general.ts
export const generalConfig = {

    // do not touch that
    __templateVersion: '2.0.0',

	name: '', // the name of your bot
	description: '', // the description of your bot
	defaultLocale: 'en', // default language of the bot, must be a valid locale
	simpleCommandsPrefix: '!', // default prefix for simple command messages (old way to do commands on discord)
	owner: 'YOUR_ID_HERE',
	timezone: 'Europe/Paris', // default TimeZone to well format and localize dates (logs, stats, etc)
	automaticUploadImagesToImgur: true, // enable or not the automatic assets upload

	devs: [
		'260908777446965248'
	], // discord IDs of the devs that are working on the bot 

	eval: {
		name: 'bot', // name to trigger the eval command
		onlyOwner: false // restrict the eval command to the owner only (if not, all the devs can trigger it)
	},

    // define the bot activities (phrases under its name). Types can be: PLAYING, LISTENING, WATCHING, STREAMING
    activities: [
		{
			text: 'discord.js v13',
			type: 'PLAYING'
		},
		{
			text: 'some knowledge',
			type: 'STREAMING'
		}
	]
}
```

### Database

For more informations about the Mikro-ORM config (which holds, for instance, the database connection informations), head [over here](docs/features/database/orm)

```ts title=src/config/database.ts
export const databaseConfig = {
    
    mikroORMConfig, // -> docs/features/database/orm

    path: "./database/", // path to the folder containing the sqlite database (if there is any) and the migrations folder
    
    // config for setting up an automated backup of the database
    backup: {
        enabled: false,
        interval: "daily",
        time: "00:00",
        path: ""
    }
}
```

### Logs

```ts title=src/config/logs.ts
export const logsConfig = {

    debug: true, // set the discordx client debug logs
		
    // for each type of log, you can precise :
    // - if the log should be consoled
    // - if the log should be saved to the log files
    // - if the log should be sent to a discord channel (providing its IP)
    
    interaction: {
        file: true,
        console: true,
        channel: null,

        // exclude some interactions types
        exclude: [
            'BUTTON_INTERACTION', 
            'SELECT_MENU_INTERACTION'
        ]
    },

    simpleCommand: {
        file: true,
        console: true,
        channel: null
    },

    newUser: {
        file: true,
        console: true,
        channel: null
    },
    
    guild: {
        file: true,
        console: true,
        channel: null
    }
}
```

### Stats

```ts title=src/config/stats.ts
export const statsConfig = {

    interaction: {

        // exclude interaction types from being recorded as stat
        exclude: [
            'BUTTON_INTERACTION',
            'SELECT_MENU_INTERACTION'
        ]
    }
}
```