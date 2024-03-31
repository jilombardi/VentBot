const { SlashCommandBuilder } = require('discord.js');
const chrs = require('../genshinCharacterInfo.json');


module.exports = {
	data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('testing autocomplete')
        .addStringOption((option) =>
            option 
                .setName('test')
                .setDescription('the options')
                .setRequired(true)
                .setAutocomplete(true)
        ),

	async execute(interaction) { 
        const targetCharacterID = interaction.options.getString('test');
        const chr = chrs.find((c) => c.ID === targetCharacterID);
        
		interaction.reply("Character Name: "+chr.characterName +"\n"+
                          "Star rating "+ chr.star+"\n"+
                          "Region: "+ chr.region+"\n"+
                          "Vision: "+ chr.Vision);

	},
};
