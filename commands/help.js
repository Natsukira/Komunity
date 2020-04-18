module.exports = {
	name: 'help',
	description: 'Affiche ce message',
	execute(message, args) {
		if(!message.member.hasPermission("MANAGE_MESSAGES"))  {
			message.delete(1)
			const userEmbed = {
			color: 0xffffff,
		
			fields: [
				{
					name: '**Prefixe : k=**',
					value:  `\u200b`
				},
				{
					name: 'Commandes : \n',
					value: `**k=ping** : Affiche la latence du bot. \n
							**k=mods** : Liste de differents mods. (parts, utilitaire, planet)\n
							**k=serverinfo** : Liens utiles pour le serveur. \n
							**k=regles** : Regles du serveur.`
				},
			
			],
		};
	
		message.member.send({ embed: userEmbed });	
	} else {
		message.delete(1)
		const adminEmbed = {
			color: 0x0dc900,
		
			fields: [
				{
					name: '**Prefixe : k=**',
					value:  `\u200b`
				},
				{
					name: 'Commandes : \n',
					value: `**k=ping** : Affiche la latence du bot. \n
							**k=mods** : Liste de differents mods. \n
							**k=serverinfo** : Liens utiles pour le serveur. \n
							**k=regles** : Regles du serveur. \n \u200b`
				},
				{
					name: 'Commandes admin : ',
					value: `**k=clear** : Vous permet de supprimer une multitude de messages tres rapidement. \n
							`
				}
			
			],
		};
	
		message.member.send({ embed: adminEmbed });	
	}
	},

};
