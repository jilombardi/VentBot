const { SlashCommandBuilder} = require('discord.js');
const chrs = require('../genshinCharacterInfo.json');
//const { execute } = require('./help');
const chrNumber = 0

module.exports = {
	data: new SlashCommandBuilder()
		.setName('venti')
		.setDescription('Replies with a genshin character'),
	async execute(interaction) {
		console.log(chrs[0].characterName);
		await interaction.reply("character name: "+chrs[chrNumber].characterName+"\n"+
                                "star rating: "+chrs[chrNumber].star+"\n"+
                                "weapon: "+chrs[chrNumber].weapon+"\n"+
                                "region: "+chrs[chrNumber].region+"\n"+
                                "affiliation: "+chrs[chrNumber].affiliation+"\n"+
                                "banner name: "+chrs[chrNumber].bannerName+"\n"+
                                "banner type: "+chrs[chrNumber].bannerType+"\n"
        
        );
	},
};

//await interaction.reply(chrs[0].characterName);

/*
const data = new SlashCommandBuilder()
    .setName('chr')
    .setDescription('find character from list of genshin charcters')
    .addStringOption((option) =>
        option
            .setName('chr-name')
            .setDescription('Name of character.')
            .setRequired(true)
            .setAutocomplete(true)

        );

function run({ interaction }) {
    console.log(interaction.options.getString('chr-name'));
    const chrChoice = interaction.options.getString('chr-name');
    const chr = chrs.find((p) => p.characterName === chrChoice);

 

    interaction.reply('character: '+ chr.chrName);

}

module.exports = {data, run};

*/