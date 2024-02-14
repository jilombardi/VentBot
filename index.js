/*
Juliet Lombardi
VentBot code
SER375
*/


//working code to put bot online


/* will set up later (base code to put bot online forever)

// server imports
const express = require('express');
const app = express();
const port = 3000;
// create main route
app.get('/', (req, res) => res.send('Hello World!'));
// instantiate server
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
*/


//start of base code
require('dotenv').config(); //initializes dotenv
const Discord = require('discord.js'); //imports discord.js

const client = new Discord.Client({ intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages,
  Discord.GatewayIntentBits.MessageContent
  
]})

//setting up slash commands


//end setting up slash commands



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', msg => {
  
  if (msg.content === ("ping")) {
    msg.reply('Pong!');
  }

  if (msg.content.includes("e"))
  {
    msg.reply("E");
  }
});


//this line must be at the very end
client.login(process.env.CLIENT_TOKEN); //signs the bot in with token

//end of base code


