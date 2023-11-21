const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: 33283
})

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('¡Estamos en línea!');
    client.user.setPresence({ activities: [{ name: 'En desarrollo...', type: 'PLAYING' // 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
}] }); 
});


client.on('messageCreate', message => {
    if (!message.content.startsWith('.') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('¡Hubo un error al ejecutar ese comando!');
    }
});

client.login('TOKEN_AQUI');
