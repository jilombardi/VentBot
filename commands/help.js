const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with list of avalible commands'),
	async execute(interaction) {
		console.log(interaction)
		await interaction.reply(
			'Note - messages with "." before last letter included so bot doesnt respond to them \n'+
            '/Ping -- responds with "Pong!" \n'+
            'ping -- responds with "Pong!"\n'+
            'fro.g -- responds with "im not a FROG >:C"\n'+
            'dinne.r -- responds with "i wish i could eat... but alas, i am a bot."\n'
            );
	},
};