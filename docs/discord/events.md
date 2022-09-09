---
sidebar_position: 2
---

# Events

You can use this decorator to declare methods that will be executed whenever a Discord event is triggered.

Our methods must be decorated with the `@On(event: string)` or [@Once(event: string)](https://discordx.js.org/docs/decorators/general/once) decorator.

It's that simple, when the event is triggered, the method is called:

```ts
import { Discord, On, Once } from 'discordx'

@Discord()
class Example {

  @On('messageCreate')
  private onMessage() {
    // ...
  }

  @Once('ready')
  private onReady() {
    // ...
  }
}
```

:::tip important
### For more information, head over to the [discordx documentation](https://discordx.js.org/docs/decorators/general/on)
:::