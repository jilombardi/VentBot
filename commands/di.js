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
        


                if(domain['Domain Type'] === ('Domain of Forgery') || domain['Domain Type'] === ('Domain of Mastery'))

 
                {
                        const domainInfo = new EmbedBuilder()
                                .setTitle(domain['Domain Name'])
                                .setDescription(domain['Domain Type'] + " | " + domain.RewardType)
                                .setImage(domain.imageLinkOne)
                                .addFields(
                                        {
                                                name: domain.Region,
                                                value: domain.Location,
                                                inline:true
                                        
                                        },
                                        {
                                                name: domain.Rewards[0].Days,
                                                value: "2 star: "+domain.Rewards[0]['2 star unique rewards']+
                                                "\n3 star: "+domain.Rewards[0]['3 star unique rewards']+
                                                "\n4 star: "+domain.Rewards[0]['4 star unique rewards']+
                                                "\n5 star: "+domain.Rewards[0]['5 star unique rewards'],
                                                inline:false
                                        
                                        },
                                        {
                                                name: domain.Rewards[1].Days,
                                                value: "2 star: "+domain.Rewards[1]['2 star unique rewards']+
                                                        "\n3 star: "+domain.Rewards[1]['3 star unique rewards']+
                                                        "\n4 star: "+domain.Rewards[1]['4 star unique rewards']+
                                                        "\n5 star: "+domain.Rewards[1]['5 star unique rewards'],
                                                inline:true
                                        
                                        },
                                        {
                                                name: domain.Rewards[2].Days,
                                                value: "2 star: "+domain.Rewards[2]['2 star unique rewards']+
                                                "\n3 star: "+domain.Rewards[2]['3 star unique rewards']+
                                                "\n4 star: "+domain.Rewards[2]['4 star unique rewards']+
                                                "\n5 star: "+domain.Rewards[2]['5 star unique rewards'],
                                                inline:false
                                        
                                        })

                                interaction.reply({embeds:[domainInfo], ephemeral: false});
                }else
                {
                        const domainInfo = new EmbedBuilder()
                        .setTitle(domain['Domain Name'])
                        .setDescription(domain['Domain Type'] + " | " + domain.RewardType)
                        .setImage(domain.imageLinkOne)
                        .addFields(
                                {
                                        name: domain.Region,
                                        value: domain.Location,
                                        inline:true
                                
                                },
                                {
                                        name: 'Rewards Avaiable Everyday',
                                        value: "2 star: "+domain.Rewards[0]['2 star unique rewards']+
                                        "\n3 star: "+domain.Rewards[0]['3 star unique rewards']+
                                        "\n4 star: "+domain.Rewards[0]['4 star unique rewards']+
                                        "\n5 star: "+domain.Rewards[0]['5 star unique rewards'],
                                        inline:false
                                
                                })

                        interaction.reply({embeds:[domainInfo], ephemeral: false});   
                } 
                        
                

	},
};
