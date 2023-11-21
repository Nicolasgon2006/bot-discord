module.exports = {
    name: 'ayuda',
    execute(message, args) {
        message.channel.send('¡Aquí tienes una lista de comandos disponibles!');
        message.channel.send('- .hola: Responde con "¡Hola!"');
        message.channel.send('- .ayuda: Muestra esta lista de comandos');
        message.channel.send('- .ping: Responde con la latencia del bot');
        message.channel.send('- .invitar: Proporciona un enlace para invitar al bot a tu servidor');

        message.channel.send('- .avatar: Proporciona la imagen de perfil de un usuario');
        message.channel.send('- .server: Muestra información sobre el servidor');
        message.channel.send('- .ban: Permite bloquear a un miembro del servidor');
        message.channel.send('- .clear: Permite borrar una cantidad de mensajes en el chat');
        message.channel.send('- .md: Permite enviar un mensaje privado a un usuario del servidor');
    },
};
