const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chifeadores')
		.setDescription('Replies with the list of chifeadores!'),
	async execute(interaction, client) {
		await interaction.reply('Ricky\nTikkito\nKirito\nChinas\nAldo\nNoe\nZeta');
	},
};