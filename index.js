const fs = require('fs');
const Canvas = require('canvas');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	
	storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});

//const sequelize = new Sequelize('database', 'user', 'password', {
//	host: 'localhost',
//	dialect: 'sqlite',
//	logging: false,
//	
//	storage: 'points.sqlite',
//});
//const Points = sequelize.define('points', {
//	name : {
//		type: Sequelize.STRING,
//		unique: true,
//	},
//	
//	point: Sequelize.INTEGER,
//});

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`En ligne en tant que : ${client.user.tag} !`);
  Tags.sync();
  
  client.user.setStatus('online', 'Made by Natsukira') 
  client.user.setPresence({
  	  game: {
	  	  name: 'k=help'
	  }
  });
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();


	if(!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply("Impossible d'éxécuter cette commande, une erreur est survenue. Essayez k=help.");
	}
	//if (command === 'ping')
	//{
	//	client.commands.get('ping').execute(message, args);
	//}
})

client.on('message', async message => {
	if (message.content.startsWith(prefix)) {
		const input = message.content.slice(prefix.length).split(' ');
		const command = input.shift();
		const commandArgs = input.join(' ');

		if (command === 'addtag') {
			message.channel.bulkDelete(1);
			const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');
			try {
				const tag = await Tags.create({
					name: tagName,
					description: tagDescription,
					username: message.author.username,
				});
				return message.reply(`Tag ${tag.name} ajouté.`);
			}
			catch (e) {
				if (e.name === 'SequelizeUniqueConstraintError') {
					return message.reply('Ce tag existe deja.')
				}
				return message.reply('Une erreur est survenue lors de l\'ajout du tag.')
			}

		} else if (command === 'tag') {
			message.channel.bulkDelete(1);
			const tagName = commandArgs;

			
			const tag = await Tags.findOne({ where: { name: tagName } });
			if (tag) {
			
				tag.increment('usage_count');
				return message.channel.send(tag.get('description'));
			}
			return message.reply(`Tag introuvable : ${tagName}`);
		} else if (command === 'edittag') {
			message.channel.bulkDelete(1);
			const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');
			const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
			if (affectedRows > 0) {
				return message.reply(`Tag ${tagName} a ete modifie.`);
			}
			return message.reply(`Tag introuvable : ${tagName}`);

		} else if (command === 'taginfo') {
			message.channel.bulkDelete(1);
			const tagName = commandArgs;

			const tag = await Tags.findOne({ where: { name: tagName } });
			if (tag) {
				return message.channel.send(`${tagName} a ete cree par ${tag.username} a ${tag.createdAt} et a ete utilise ${tag.usage_count} fois.`);
			}
			return message.reply(`Tag introuvable : ${tagName}`);
		} else if (command === 'showtags') {
			message.channel.bulkDelete(1);
			const tagList = await Tags.findAll({ attributes: ['name'] });
			const tagString = tagList.map(t => t.name).join(', ') || 'Aucun tags.';
			return message.channel.send(`Liste des tags : ${tagString}`)
		} else if (command === 'removetag') {
			message.channel.bulkDelete(1);
			const tagName = commandArgs;

			const rowCount = await Tags.destroy({ where: { name: tagName } });
			if (!rowCount) return message.reply('Ce tag n\'existe pas.');

			return message.reply('Tag supprimé.');
		} else if (command === 'addpoints') {
			message.channel.bulkDelete(1);
			const splitArgs = commandArgs.split(' ');
			const pseudo = splitArgs.shift();
			const point = splitArgs.join(' ');
			
			try {
				const points = await Points.create({
					name: pseudo,
					point: point,
				});
				return message.reply(`${points.point} ajoutés a ${points.pseudo}`)
			} 
			catch (e) {
				return message.reply('une erreur est survenue lors de l\'ajout des points.')
			}
		} else if (command === 'voirpoints') {
			message.channel.bulkDelete(1);
			const pseudoName = commandArgs;
			const points = await Points.findOne({ where: { name: pseudoName } });
			if (points) {
				return message.channel.send(`${Points.pseudoName} a ${Points.point} points.`)
			}
		}
	}
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	
	let fontSize = 70;

	do {
	
		ctx.font = `${fontSize -= 10}px corbel`;
	
	} while (ctx.measureText(text).width > canvas.width - 300);

	
	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'k-clear-test');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

//	ctx.strokeStyle = '00#ffffff';
//	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px corbel';
	ctx.fillStyle = '#CB2B08';
	ctx.fillText('Bienvenue sur le KFP,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName} !`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName} !`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Bonjour, ${member}!`, attachment);

	const welcomeEmbed = {
			color: 0x04200,
		
			fields: [
				{
					name: ':one:',
					value: `Bienvenue sur le Kerbal French Program. \n
							N'hesite pas a utiliser la commande **k=regles** pour eviter tout soucis. :slight_smile: \n
							`
				},
			
			],
		};
	member.send({embed: welcomeEmbed})
});

client.login(token);