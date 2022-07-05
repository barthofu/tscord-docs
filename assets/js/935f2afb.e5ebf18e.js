"use strict";(self.webpackChunktscord_template_docs=self.webpackChunktscord_template_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/tscord-template-docs/docs/intro","docId":"intro"},{"type":"category","label":"Get Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/tscord-template-docs/docs/get-started/installation","docId":"get-started/installation"},{"type":"link","label":"Configuration","href":"/tscord-template-docs/docs/get-started/configuration","docId":"get-started/configuration"},{"type":"link","label":"Usage","href":"/tscord-template-docs/docs/get-started/usage","docId":"get-started/usage"},{"type":"link","label":"Understand the template","href":"/tscord-template-docs/docs/get-started/understand-the-template","docId":"get-started/understand-the-template"}]},{"type":"category","label":"Discord","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Interactions","href":"/tscord-template-docs/docs/discord/interactions","docId":"discord/interactions"},{"type":"link","label":"Events","href":"/tscord-template-docs/docs/discord/events","docId":"discord/events"},{"type":"link","label":"Guards","href":"/tscord-template-docs/docs/discord/guards","docId":"discord/guards"},{"type":"link","label":"Activities","href":"/tscord-template-docs/docs/discord/activities","docId":"discord/activities"}]},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Database","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration","href":"/tscord-template-docs/docs/features/database/configuration","docId":"features/database/configuration"},{"type":"link","label":"ORM","href":"/tscord-template-docs/docs/features/database/orm","docId":"features/database/orm"},{"type":"link","label":"Migrations","href":"/tscord-template-docs/docs/features/database/migrations","docId":"features/database/migrations"},{"type":"link","label":"Sync","href":"/tscord-template-docs/docs/features/database/sync","docId":"features/database/sync"},{"type":"link","label":"Single Data Type","href":"/tscord-template-docs/docs/features/database/single-data-type","docId":"features/database/single-data-type"},{"type":"link","label":"Backups","href":"/tscord-template-docs/docs/features/database/backups","docId":"features/database/backups"}]},{"type":"link","label":"Stats","href":"/tscord-template-docs/docs/features/stats","docId":"features/stats"},{"type":"link","label":"API","href":"/tscord-template-docs/docs/features/api","docId":"features/api"},{"type":"link","label":"Logger","href":"/tscord-template-docs/docs/features/logger","docId":"features/logger"},{"type":"link","label":"Scheduler","href":"/tscord-template-docs/docs/features/scheduler","docId":"features/scheduler"},{"type":"link","label":"Assets","href":"/tscord-template-docs/docs/features/assets","docId":"features/assets"},{"type":"link","label":"Custom Events","href":"/tscord-template-docs/docs/features/custom-events","docId":"features/custom-events"},{"type":"link","label":"Internationalization (i18n)","href":"/tscord-template-docs/docs/features/internationalization","docId":"features/internationalization"},{"type":"link","label":"Local Store","href":"/tscord-template-docs/docs/features/local-store","docId":"features/local-store"},{"type":"link","label":"Error Handler","href":"/tscord-template-docs/docs/features/error-handler","docId":"features/error-handler"}]},{"type":"category","label":"Devops","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"From development to production","href":"/tscord-template-docs/docs/devops/from-development-to-production","docId":"devops/from-development-to-production"},{"type":"link","label":"Docker","href":"/tscord-template-docs/docs/devops/docker","docId":"devops/docker"},{"type":"link","label":"PM2","href":"/tscord-template-docs/docs/devops/pm2","docId":"devops/pm2"},{"type":"link","label":"Debug with VSCode","href":"/tscord-template-docs/docs/devops/debug-with-vscode","docId":"devops/debug-with-vscode"},{"type":"link","label":"CI/CD","href":"/tscord-template-docs/docs/devops/ci-cd","docId":"devops/ci-cd"}]}]},"docs":{"devops/ci-cd":{"id":"devops/ci-cd","title":"CI/CD","description":"","sidebar":"tutorialSidebar"},"devops/debug-with-vscode":{"id":"devops/debug-with-vscode","title":"Debug with VSCode","description":"","sidebar":"tutorialSidebar"},"devops/docker":{"id":"devops/docker","title":"Docker","description":"docker-compose.yml","sidebar":"tutorialSidebar"},"devops/from-development-to-production":{"id":"devops/from-development-to-production","title":"From development to production","description":"","sidebar":"tutorialSidebar"},"devops/pm2":{"id":"devops/pm2","title":"PM2","description":"","sidebar":"tutorialSidebar"},"discord/activities":{"id":"discord/activities","title":"Activities","description":"You can simply setup activities your bot will loop through in the configs/general.ts file, like this:","sidebar":"tutorialSidebar"},"discord/events":{"id":"discord/events","title":"Events","description":"You can use this decorator to declare methods that will be executed whenever a Discord event is triggered.","sidebar":"tutorialSidebar"},"discord/guards":{"id":"discord/guards","title":"Guards","description":"A guard is a function that will be executed before an handler (event, slash, simple command, etc) is called.","sidebar":"tutorialSidebar"},"discord/interactions":{"id":"discord/interactions","title":"Interactions","description":"TSCord uses decorators from discord.ts to handle interactions.","sidebar":"tutorialSidebar"},"features/api":{"id":"features/api","title":"API","description":"","sidebar":"tutorialSidebar"},"features/assets":{"id":"features/assets","title":"Assets","description":"","sidebar":"tutorialSidebar"},"features/custom-events":{"id":"features/custom-events","title":"Custom Events","description":"","sidebar":"tutorialSidebar"},"features/database/backups":{"id":"features/database/backups","title":"Backups","description":"Backups are only supported by SQLite databases!","sidebar":"tutorialSidebar"},"features/database/configuration":{"id":"features/database/configuration","title":"Configuration","description":"TSCord supports different databases:","sidebar":"tutorialSidebar"},"features/database/migrations":{"id":"features/database/migrations","title":"Migrations","description":"The synchronization between Entities definition files and actual tables in the database is handled by the MikroORM\'s migrations system.","sidebar":"tutorialSidebar"},"features/database/orm":{"id":"features/database/orm","title":"ORM","description":"What is en ORM?","sidebar":"tutorialSidebar"},"features/database/single-data-type":{"id":"features/database/single-data-type","title":"Single Data Type","description":"The Data entity is quite special as it is an implementation of the EAV pattern.","sidebar":"tutorialSidebar"},"features/database/sync":{"id":"features/database/sync","title":"Sync","description":"Guilds","sidebar":"tutorialSidebar"},"features/error-handler":{"id":"features/error-handler","title":"Error Handler","description":"","sidebar":"tutorialSidebar"},"features/internationalization":{"id":"features/internationalization","title":"Internationalization (i18n)","description":"","sidebar":"tutorialSidebar"},"features/local-store":{"id":"features/local-store","title":"Local Store","description":"","sidebar":"tutorialSidebar"},"features/logger":{"id":"features/logger","title":"Logger","description":"","sidebar":"tutorialSidebar"},"features/scheduler":{"id":"features/scheduler","title":"Scheduler","description":"","sidebar":"tutorialSidebar"},"features/stats":{"id":"features/stats","title":"Stats","description":"","sidebar":"tutorialSidebar"},"get-started/configuration":{"id":"get-started/configuration","title":"Configuration","description":"Env","sidebar":"tutorialSidebar"},"get-started/installation":{"id":"get-started/installation","title":"Installation","description":"To install bot.ts, please read these instructions very carefully, every word is important!","sidebar":"tutorialSidebar"},"get-started/understand-the-template":{"id":"get-started/understand-the-template","title":"Understand the template","description":"Before starting to code a bot using this template, you should understand how it works in a more theorical way (yeah we know, not the most entertaining part :P)","sidebar":"tutorialSidebar"},"get-started/usage":{"id":"get-started/usage","title":"Usage","description":"Now that your bot is all setup, you can start using it!","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"TSCord is a fully-featured Discord bots template written in Typescript, intended to provide a framework that\'s easy to use, extend and modify.","sidebar":"tutorialSidebar"}}}')}}]);