const { SlashCommandBuilder, EmbedBuilder, hyperlink} = require('discord.js');

const chrs = require('../genshinCharacterInfo.json');


module.exports = {
	data: new SlashCommandBuilder()
        .setName('ci')
        .setDescription('testing autocomplete')
        .addStringOption((option) =>
            option 
                .setName('ci')
                .setDescription('the options')
                .setRequired(true)
                .setAutocomplete(true)
        ),

	async execute(interaction) { 
        const targetCharacterID = interaction.options.getString('ci');
        const chr = chrs.find((c) => c.ID === targetCharacterID);

        /*
        
		interaction.reply("Character Name: "+chr.characterName +"\n"+
                          "Star rating "+ chr.star+"\n"+
                          "Region: "+ chr.region+"\n"+
                          "Vision: "+ chr.Vision);

        */

        const charcaterInfo = new EmbedBuilder()
                .setTitle(chr.characterName)
                .setDescription(chr.star+"star | "+chr.Vision+" | "+chr.weapon)
                .setColor("DarkPurple")
                .setImage(chr.ImageLink)
                .addFields(
                        {
                                name: 'Affiliation',
                                value: chr.affiliation,
                                inline:true
                        
                        },
            
                        {
                                
                                name:'Status',
                                value: chr.Status,
                                inline: true
                        },
              
           
                        {
                                name:'Region',
                                value: chr.region,
                                inline:false
                        },
               
          
                        {
                                name:'Birthday',
                                value: chr.birthday,
                                inline: true
                        },
                        {
                                name:'Constellation',
                                value:chr.Constellation,
                                inline:true
                        },
               
                 
                        {
                                name: 'Banner Name',
                                value: chr.bannerName,
                                inline:false
                        },
                        {
                                name: 'Version',
                                value: chr.versionReleased,
                                inline:true
                        },
                        {
                                name:'Date',
                                value:chr.dateReleased,
                                inline:true
                        }

                );

                interaction.reply({embeds:[charcaterInfo], ephemeral: false});

	},

                
};
