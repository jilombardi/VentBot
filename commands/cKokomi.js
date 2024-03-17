const { SlashCommandBuilder} = require('discord.js');
const chrs = require('../genshinCharacterInfo.json');
//const { execute } = require('./help');
const chrNumber = 2

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kokomi')
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