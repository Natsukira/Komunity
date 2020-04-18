module.exports = {
	name: 'serverinfo',
	description: '',
	execute(message, args) {		
	const liensEmbed = {
		color: 0xad2d2d,
		title: ':satellite_orbital: _**LIENS UTILES**_',
		fields: [
			{
				name: 'Twitter du serveur :',
				value:  "https://twitter.com/KerbalFrench"
			},	
			{
				name: 'Chaîne youtube du serveur :',
				value:  "https://www.youtube.com/channel/UC1r7h9W3bqOEJisAY8YTJLw"
			},	
		],
	};

	message.channel.send({ embed: liensEmbed });		
	},
};
