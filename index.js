/*
Juliet Lombardi
VentBot code
SER375
*/


//working code to put bot online
/* 
*/


//start of base code

//setting up requirments 
require('dotenv').config(); //initializes dotenv
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js'); //imports discord.js
const fs = require("node:fs");
const path = require("node:path");
const chrs = require('./genshinCharacterInfo.json');
const domains = require('./genshinDomainInfo.json');
const visions = require('./genshinCharacterSort');

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMessageReactions,
]})

//end setting up requirments 


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
      '[WARNING] The command at'+ filePath+ ' is missing a required data or execute property'
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



//autocomplete interactions

//SLASH COMMAND 'ci'
client.on('interactionCreate',(interaction) => {
  if (!interaction.isAutocomplete()) return;
  
  if (interaction.commandName !== 'ci') return;

    const focusedValue = interaction.options.getFocused();
    console.log(focusedValue);

    const filteredChoices = chrs.filter((chr) =>
     chr.characterName.toLowerCase().startsWith(focusedValue.toLowerCase())
   );

    const results = filteredChoices.map((choice) => {
      return{
        name: choice.characterName.toLowerCase(),
        value: choice.ID,
      }
    })

    interaction.respond(results.slice(0,25)).catch(()=> {});
 

});

//SLASH COMMAND 'di'
client.on('interactionCreate',(interaction) => {
  if (!interaction.isAutocomplete()) return;
  
  if (interaction.commandName !== 'di') return;

    const focusedValue = interaction.options.getFocused();
    console.log(focusedValue);

    const filteredChoices = domains.filter((domain) =>
     domain['Domain Name'].toLowerCase().startsWith(focusedValue.toLowerCase())
   );

    const results = filteredChoices.map((choice) => {
      return{
        name: choice['Domain Name'].toLowerCase(),
        value: choice.ID,
      }
    })

    interaction.respond(results.slice(0,25)).catch(()=> {}); 

});


//SLASH COMMAND 'cl'
//TWO AUTOCOMPLETE OPTIONS
client.on('interactionCreate',(interaction) => {
  if (!interaction.isAutocomplete()) return;
  
  if (interaction.commandName !== 'cl') return;

    const focusedOption = interaction.options.getFocused(true);
    console.log(focusedOption);

    if(focusedOption.name === 'vision')
    {

      const filteredChoices = visions.filter((vision) =>
        vision.vision.toLowerCase().startsWith(focusedOption.value.toLowerCase())
      );

      const results = filteredChoices.map((choice) => {
        return{
          name: choice.vision,
          value: choice.vision
        }
      })

      interaction.respond(results.slice(0,25)).catch(()=> {});

    }else if (focusedOption.name === 'character')
    {
      const otheroption = focusedOption.name.vision;
      console.log(otheroption);
      const filteredChoices = chrs.filter((chr)=>
        chr.characterName.toLowerCase().startsWith(focusedOption.value.toLowerCase())
      );

      const results = filteredChoices.map((choice) => {
        return{
          name: choice.characterName.toLowerCase(),
          value: choice.ID,
        }
      })

      interaction.respond(results.slice(1,25)).catch(() => {});
    }
 

});





//end autocmplete interactions 


//basic commands
client.on('messageCreate', msg => {
  
  if (msg.content === ("ping")) {
    msg.reply('Pong!');
  }

  if (msg.content === ("ventiImage")){

    
    msg.reply({files: ["./characterImages/VentiCard.png"], content:"Venti\naslkefvakjv"});

    
    
  

  }
  
});
//end basic commands





//this line must be at the very end
client.login(process.env.CLIENT_TOKEN); //signs the bot in with token

//end of base code

//node index.js
//^C to kill terminal


