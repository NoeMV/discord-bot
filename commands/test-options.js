const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('para pruebas y eso'),
	async execute(interaction, client) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('primary')
				.setLabel('Primary')
				.setStyle('PRIMARY'),
		);

		const rowLink = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setURL('https://bulbapedia.bulbagarden.net/wiki/Kartana_(Pok%C3%A9mon)')
				.setLabel('Descubre al disney mon')
				.setStyle('LINK'),
		);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Disney mons')
			.setDescription('Conoce los picks mickey mouse');
			

		await interaction.reply({ content: 'Probando', embeds: [embed], components: [row, rowLink] });
	},
};




/*const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tests')
		.setDescription('Usado para pruebas y eso')
		.addStringOption(option => 
			option.setName('jornada')
			.setDescription('Entra si es la ultima o no')
			.setRequired(true)
			.addChoices(
				{ name: 'si', value: 'si' },
				{ name: 'no', value: 'no' },
			)),
	async execute(interaction, client) {
		const res = interaction.options.getString('jornada');
		if(res === 'si'){
			await interaction.reply('Es la ultima jornada, avisales');
		} else {
			await interaction.reply('No es la ultima jornada, no diga mamadas mi lic');
		}
		
	},
};
*/