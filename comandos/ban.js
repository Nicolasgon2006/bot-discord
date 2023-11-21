module.exports = {
    name: 'ban',
    description: 'Banea a un usuario mencionado',
    usage: '.ban <usuario> [motivo]',
    execute(message, args) {
        // Verificar que el autor del mensaje tiene permisos para banear.
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('No tienes permisos para banear miembros.');
        }

        // Mencionar al usuario que se va a banear.
        const userToBan = message.mentions.members.first();
        
        // Verificar si se mencionó un usuario válido.
        if (!userToBan) {
            return message.channel.send('Por favor, menciona al usuario que deseas banear.');
        }

        // Obtener el motivo del ban, si se proporciona.
        const reason = args.slice(1).join(' ');

        // Banear al usuario.
        userToBan.ban({ reason: reason })
            .then(() => {
                message.channel.send(`Se ha baneado a ${userToBan.user.tag}.`);
            })
            .catch(error => {
                console.error('Error al banear al usuario:', error);
                message.channel.send('Ha ocurrido un error al intentar banear al usuario.');
            });
    },
};
