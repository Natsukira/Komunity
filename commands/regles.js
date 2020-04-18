module.exports = {
	name: 'regles',
	description: 'Vous affiche les règles du serveur',
	execute(message, args) {
	message.delete(1)
	const rulesEmbed = {
		color: 0xffffff,
		title: ':rocket:  _**REGLES DU DISCORD**_',
		fields: [
			{
				name: ':one:',
				value:  "Le respect est la règle primordiale et centrale de ce Discord. Veillez à respectez vos interlocuteurs lors de vos échanges, que cela soit dans votre langage, dans votre attitude ou dans vos intentions.",
				inline: false
			},
			
			{
				name: ':two:',
				value:  "En outre, vos messages doivent être en accord avec la loi et les termes d'utilisation de Discord (https://discordapp.com/terms)",
				inline: false
			},
			{
				name: ':three:',
				value:  "Veillez également à conserver un discord plaisant pour tous : pas de spam, utilisation des bons channels, pas de capslock etc etc. La propreté et le confort d'un serveur est un petit peu le travail de tous.",
				inline: false
			}
		],
	};

	message.member.send({ embed: rulesEmbed });		
	},
};
