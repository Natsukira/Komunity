module.exports = {
	name: 'ping',
	description: 'Quelle est la latence du bot ?',
	execute(message, args) {
		let totalSeconds = (message.client.uptime / 1000);
		let days = Math.floor(totalSeconds / 86400);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = totalSeconds % 60;
		// message.channel.send("Hey");
		let uptime = `${Math.round(days)} jour(s), ${Math.round(hours)} heure(s), ${Math.round(minutes)} minute(s) and ${Math.round(seconds)} seconde(s)`;

	const exampleEmbed = {
		color: 0xffffff,
		//title: 'Ping',
		//url: 'https://discord.js.org',
		// author: {
		// 	name: 'Komunity Bot',
		// 	//icon_url: 'https://i.imgur.com/wSTFkRM.png',
		// 	//url: 'https://discord.js.org',
		// },
		//description: 'Some description here',
		// thumbnail: {
		// 	url: 'https://i.imgur.com/wSTFkRM.png',
		// },
		fields: [
			{
				name: '**Latence du bot : **',
				value:  `:hourglass_flowing_sand: ` + message.client.ping + ` ms`
			},
			{
				name: '**Uptime : **',
				value: `:watch: ` + uptime
			},
			
		],
	};

	message.channel.send({ embed: exampleEmbed });		
	},
};
