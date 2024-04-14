const { SlashCommandBuilder, EmbedBuilder, hyperlink } = require('discord.js');
const domains = require('../genshinDomainInfo.json');


module.exports = {
	data: new SlashCommandBuilder()
        .setName('di')
        .setDescription('genshin domain information')
        .addStringOption((option) =>
            option 
                .setName('di')
                .setDescription('domain options')
                .setRequired(true)
                .setAutocomplete(true)
        ),

	async execute(interaction) { 
        const targetDomainID = interaction.options.getString('di');
        const domain = domains.find((c) => c.ID === targetDomainID);
        
		// interaction.reply("Domain Name: "+domain['Domain Name'] +"\n"+
                //           "Region "+ domain.Region+"\n"+
                //           "Location: "+ domain.Location+"\n"+
                //           "Reccomended Elements: "+ domain['Reccomended Elements']);

                // const domainInfo = new EmbedBuilder()
                //         .setTitle(domain['Domain Name'])
                //         .setDescription(domain['Domain Type']+" | "+domain.RewardType)
                //         .setImage(domain.imageLinkOne)

                //         interaction.reply({embeds:[domainInfo], ephemeral: false});
                

                if(domain['Domain Type'] === ('Domain of Forgery'))
                {
                        const domainInfo = new EmbedBuilder()
                                .setTitle(domain['Domain Name'])
                                .setDescription(domain['Domain Type'] + " | " + domain.RewardType)
                                .setImage(domain.imageLinkOne)

                                interaction.reply({embeds:[domainInfo], ephemeral: false});
                }else
                {
                        const domainInfo = new EmbedBuilder()
                        .setTitle(domain['Domain Name'])
                        .setDescription(domain['Domain Type'] + " | " + domain.RewardType)
                        .setImage(domain.imageLinkOne)

                        interaction.reply({embeds:[domainInfo], ephemeral: false});   
                } 
                        
                

	},
};
