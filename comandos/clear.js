module.exports = {
    name: 'clear',
    description: 'Borra una cantidad específica de mensajes en el canal actual',
    usage: '.clear <cantidad>',
    execute(message, args) {
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('Por favor, proporciona un número válido para la cantidad de mensajes a borrar.');
        } else if (amount <= 0 || amount > 100) {
            return message.reply('La cantidad de mensajes a borrar debe estar entre 1 y 100.');
        }

        message.channel.bulkDelete(amount + 1)
            .then(messages => message.channel.send(`Se han borrado ${messages.size - 1} mensajes.`))
            .catch(error => {
                console.error('Error al borrar mensajes:', error);
                message.channel.send('Hubo un error al intentar borrar mensajes.');
            });
    },
};