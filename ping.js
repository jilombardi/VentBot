//taken out of commands folder because of error

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		console.log(interaction)
		await interaction.reply('Pong!');
	},
};