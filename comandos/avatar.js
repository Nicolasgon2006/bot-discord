module.exports = {
    name: 'avatar',
    description: 'Muestra el avatar de un usuario',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        message.channel.send(`Avatar de ${user.username}: ${user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
    },
};
