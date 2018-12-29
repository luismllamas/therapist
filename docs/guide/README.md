# Guide

This guide explains how the Eliza project works.

## Starting a New VueJS Project

1. Create a new project.
    - If using VueJS for the first time, install it with: `yarn global add @vue/cli`.
    - To create a new project, run: `vue create project-name`.
2. Accept the default presets.
3. Move to the new project folder: `cd project-name`.
4. You can start the development environment with: `yarn serve`.

See the [VueJS CLI](https://cli.vuejs.org/guide/) documentation for more details.

## How does Eliza Work?

This VueJS app uses the [List Rendering](https://vuejs.org/v2/guide/list.html) function to display the user and the bot messages in the form of `item in items` list using the `v-for` directive.

```html
<div class="messages">
    <div class="message" v-for="message in messages" :key="message.id">
        <p><strong>{{message.sender}}</strong>: {{message.text}} </p>
    </div>
</div>
```

The main functionality of the application resides in the `parseMessage` function, which compares the input message with a set of predefined Strings. The conditions are very basic. When the input message matches a predefined stored String, the bot replies with a predefined response. This is to give the illusion that the Bot "understands" what the user is saying.

```javascript
parseMessage: function () {
      if(this.match('hi'))
        this.robotMessage('Hi, tell me about yourself')
      if(this.match('hello'))
        this.robotMessage('Hello. Tell me about yourself')
      if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
        this.robotMessage('I\'m fine thank you. Let\'s talk about you')
      if(this.match('I*feel') || this.match('I[^ ]*m feeling'))
        this.robotMessage('Why do you feel that way?')
    }
```

This function can be improved by adding more predefined messages to compare with the input and by adding more functions to enable the bot to use random predefined responses.

This functionalities will be added later.

