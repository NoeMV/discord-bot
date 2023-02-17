const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const cheerio = require('cheerio'); 
const fs = require('fs');
const discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('analyser')
		.setDescription('Get stats from the replay')
		.addStringOption(option => option.setName('url').setDescription('Replay url')),
	async execute(interaction, client) {

		const url = interaction.options.get('url').value;

		const config = {
			headers: { 
				"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
				"Accept-Encoding": "gzip, deflate, br", 
				"Accept-Language": "en-US,en;q=0.9", 
				"Sec-Ch-Ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"", 
				"Sec-Ch-Ua-Mobile": "?0", 
				"Sec-Ch-Ua-Platform": "\"macOS\"", 
				"Sec-Fetch-Dest": "document", 
				"Sec-Fetch-Mode": "navigate", 
				"Sec-Fetch-Site": "none", 
				"Sec-Fetch-User": "?1", 
			}
		};

		try {
			const res = await axios.get(url, config);

			// script.log

			const $ = cheerio.load(res.data); 
 
			const log = $('.log')
			.map((_, product) => { 
				const $product = $(product); 
				return $product.text() 
			}) 
			.toArray(); 

			fs.writeFileSync('./stats.txt', log.join(''));

			let atc = new discord.MessageAttachment(Buffer.from(log.join('')), 'stats.txt');
			await interaction.reply('Stats done!');
			await interaction.channel.send({ files: [atc] });
			
			fs.unlink('./stats.txt', () => {
				console.log("Delete File successfully.");
			});
			
		} catch (error) {
			console.log('Error: ' + error);
		}

		
	/* 
		const strWithoutHTmlTags = str.replace(/(<([^>]+)>)/gi, "|");

		//let arrStr = [...strWithoutHTmlTags.split(" ")];

		let arrStr = strWithoutHTmlTags.split("|");

		console.log(arrStr.filter(e => (e.length == 0 || e!= '\n'))); 
	}); */

	},
};