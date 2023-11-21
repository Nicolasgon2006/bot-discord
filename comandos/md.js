module.exports = {
    name: 'md',
    description: 'Envía un mensaje privado a un usuario mencionado',
    usage: '.md <usuario> <mensaje>',
    execute(message, args) {
        // Verificar si se mencionó un usuario válido.
        const userToDM = message.mentions.users.first();
        if (!userToDM) {
            return message.channel.send('Por favor, menciona al usuario al que deseas enviar un mensaje privado.');
        }

        // Obtener el mensaje a enviar.
        const messageContent = args.slice(1).join(' ');

        // Enviar el mensaje privado.
        userToDM.send(`Mensaje privado de ${message.author.username}: ${messageContent}`)
            .then(() => {
                message.channel.send(`Se ha enviado un mensaje privado a ${userToDM.tag}.`);
            })
            .catch(error => {
                console.error('Error al enviar mensaje privado:', error);
                message.channel.send('Ha ocurrido un error al intentar enviar el mensaje privado.');
            });
    },
};
