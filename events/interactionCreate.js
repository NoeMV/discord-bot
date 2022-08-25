module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
		// recibe client de parametro (ahi vienen los comandos) y abajo los ejecuta
		if (!interaction.isCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			command.execute(interaction, client);
		} catch (error) {
			console.error(error);
			interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};