/*
Juliet Lombardi
VentBot code
SER375
*/


//working code to put bot online
/* 
*/


//start of base code
require('dotenv').config(); //initializes dotenv
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js'); //imports discord.js
const fs = require("node:fs");
const path = require("node:path");

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMessageReactions
  
]})


//setting up slash commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

for(const file of commandFiles)
{
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if("data" in command && "execute" in command)
  {
    client.commands.set(command.data.name, command);
  }else
  {
    console.log(
      '[WARNING] The command at ${filePath} is missing a required something'
    )
  }
}


const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

//end setting up slash commands



client.on('messageCreate', msg => {
  
  if (msg.content === ("ping")) {
    msg.reply('Pong!');
  }

  if (msg.content.includes("frog"))
  {
    msg.reply("im not a FROG >:c")
  }
  if (msg.content.includes("dinner"))
  {
    msg.reply("i wish i could eat... but alas, i am a bot.")
  }
  
});


//this line must be at the very end
client.login(process.env.CLIENT_TOKEN); //signs the bot in with token

//end of base code

//node index.js
//^C to kill terminal


