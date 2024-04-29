const { SlashCommandBuilder, EmbedBuilder, hyperlink} = require('discord.js');

const chrs = require('../genshinCharacterInfo.json');
const visions = require('../genshinCharacterSort.json');


module.exports = {
	data: new SlashCommandBuilder()
        .setName('cl')
        .setDescription('testing autocomplete')
        .addStringOption((option) =>
            option 
                .setName('vision')
                .setDescription('character vision')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addStringOption((option) =>
            option 
                .setName('character')
                .setDescription('character name')
                .setRequired(true)
                .setAutocomplete(true)

        
        ),

	async execute(interaction) { 
        const targetVisionID = interaction.options.getString('vision');
        const vision = visions.find((v) => v.ID === targetVisionID);

        const targetCharacterID = interaction.options.getString('character');
        const chr = chrs.find((c) => c.id === targetCharacterID);

        interaction.reply(vision+", "+chr);

        

    }

                
};