const { EmbedBuilder  } = require('discord.js');

module.exports = {
    name: 'server',
    execute(message, args) {
        const embed = new EmbedBuilder ()
            .setColor('#0099ff')
            .setTitle('Datos del Servidor')
            .setDescription(`Nombre del servidor: ${message.guild.name}
            \nTotal miembros: ${message.guild.memberCount}
            \nID del Servidor: ${message.guild.id}
            \nRegión del Servidor: ${message.guild.region}`)
            .setTimestamp()

        message.channel.send({ embeds: [embed] });
    },
};
