module.exports = {
	name: 'clear',
	description: 'The k=clear powaaa',
	execute(message, args) {

		if(!message.member.hasPermission("MANAGE_MESSAGES"))  {
			message.delete(1)
			return message.reply("Tu n'as pas les permissions requises.").then(msg => msg.delete(10000));
		} else if (!args.length) {
			message.delete(1)
			return message.channel.send(`Tu n'as pas fourni d'argument, ${message.author}`).then(msg => msg.delete(10000));
		} else if (args[0] > 100) {
			message.delete(1)
			return message.channel.send(`Le maximum est 100 messages.`).then(msg => msg.delete(10000));

		} else {
			message.delete(1)
				message.channel.bulkDelete(args[0]).then(() => {
				
				message.channel.send(`${args[0]} messages supprimés.`).then(msg => msg.delete(5000));
				let auth = message.member.user.tag;
				const logembed = {
				color: 0xfff700,
				fields: [
					{
						name: `${auth} a utilisé k=clear`,
						value:  `${args[0]} messages on été supprimés dans ${message.channel}`
					}
				],
				timestamp: new Date(),
				};
				message.client.channels.get(`611482110859018250`).send({ embed: logembed });

				}).catch(error => {
				message.delete(1)
				if (error.code !== 10008) {
					 message.channel.send("Erreur : " + error).then(msg => msg.delete(10000));
				 }
			
			
	})
	
};
		
			
		
	},
};