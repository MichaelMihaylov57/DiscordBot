const Discord = require('discord.js');
//const {Client, Attachment} = require('discord.js');

const client = new Discord.Client();

const prefix = '%';

const fs = require('fs');

client.commands = new Discord.Collection();

client.once('ready', () =>  {
    console.log('SwissArmyBot is online!');
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

     if (command === 'image') {
        client.commands.get('image').execute(message, args, Discord);
    } else if (command == 'send') {
        const attachment = new Discord.MessageAttachment('https://authentis.swiss/wp-content/uploads/2017/09/why-switzerland-swiss-authentis.jpg')
        message.channel.send(attachment);
    }
});



client.login('ODI3MDU5MzUxNDUzNTY0OTM5.YGVhCw.PTr5jTmJTZctI8QdzBXwE2cPA68');

