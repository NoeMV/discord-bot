const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('presentacion')
		.setDescription('Presenta el bot en las divisiones'),
	async execute(interaction, client) {
		//const channel = client.channels.cache.get('767857881990692884');
		//await channel.send(`Peleen <@&914992344774893578>, <@&914992579462963200>, <@&914992629144502272>`);

		const channelPA = client.channels.cache.get('914997058891575376');
		const channelAA = client.channels.cache.get('914997314056257536');
		const channelIA = client.channels.cache.get('914997989184004146');

		await channelPA.send(`Buen día, soy League Assistant el bot de PA, estaré apoyando en distintas tareas aquí, así que si obtienes algún ping por mi solo estaré haciendo mi trabajo.`);
		await channelAA.send(`Buen día, soy League Assistant el bot de PA, estaré apoyando en distintas tareas aquí, así que si obtienes algún ping por mi solo estaré haciendo mi trabajo.`);
		await channelIA.send(`Buen día, soy League Assistant el bot de PA, estaré apoyando en distintas tareas aquí, así que si obtienes algún ping por mi solo estaré haciendo mi trabajo.`);

		await interaction.reply({content: 'Mensaje enviado', ephemeral: true });
	},
};