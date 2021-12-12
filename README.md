
## jokeapi
It's a joke API and it makes a random joke.


## Usage
```javascript
npm i jokeapi
```

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
const api = require('jokeapi');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    if (msg.content === '!joke') {
        api.get('en', res => { // cs (Czech), de (German), en (English), es (Spanish), fr (French), pt (Portuguese)
            msg.channel.send(res);
        })
    }
})

client.login('TOKEN HERE')
```
## Note
This module is made by claritz#6164 and shared publicly. Usage is as in the examples.

  