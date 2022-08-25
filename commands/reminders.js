const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('reminder')
		.setDescription('Envia un reminder a todas las divisiones de la liga (PA, AA, IA)')
		.addStringOption(option => 
			option.setName('jornada')
			.setDescription('¿Es la ultima jornada?')
			.setRequired(true)
			.addChoices(
				{ name: 'si', value: 'si' },
				{ name: 'no', value: 'no' },
			)),
	async execute(interaction, client) {
		//const channel = client.channels.cache.get('767857881990692884');
		//await channel.send(`Peleen <@&914992344774893578>, <@&914992579462963200>, <@&914992629144502272>`);
		const channelPA = client.channels.cache.get('914997058891575376');
		const channelAA = client.channels.cache.get('914997314056257536');
		const channelIA = client.channels.cache.get('914997989184004146');

		const res = interaction.options.getString('jornada');

		if(res === 'si'){
			await channelPA.send(`Recordatorio para jugar, esta es la ultima semana de la temporada regular, tienen hasta el domingo sin extensiones <@&914992344774893578>`);
			await channelAA.send(`Recordatorio para jugar, esta es la ultima semana de la temporada regular, tienen hasta el domingo sin extensiones <@&914992579462963200>`);
			await channelIA.send(`Recordatorio para jugar, esta es la ultima semana de la temporada regular, tienen hasta el domingo sin extensiones <@&914992629144502272>`)
			await interaction.reply({content: 'Reminder enviado', ephemeral: true });
		} else {
			await channelPA.send(`Recordatorio para jugar esta semana, tienen hasta el domingo <@&914992344774893578>`);
			await channelAA.send(`Recordatorio para jugar esta semana, tienen hasta el domingo <@&914992579462963200>`);
			await channelIA.send(`Recordatorio para jugar esta semana, tienen hasta el domingo <@&914992629144502272>`)
			await interaction.reply({content: 'Reminder enviado', ephemeral: true });
		}
		
	},
};
/*
		.addUserOption(option => option.setName('target').setDescription('Los jugadores seran mencionados')),
		const myGuild = client.guilds.cache.get('767842135428300840');
		const role = myGuild.roles.cache.find(r => r.id === "914992344774893578");
		const user = interaction.options.getUser('target');
		await channel.send(`Hi, ${user}.`);
*/