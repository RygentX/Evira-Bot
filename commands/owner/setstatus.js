const { OwnerID } = require('../../botconfig.json');

module.exports = {
    config: {
        name: 'setstatus',
        aliases: [''],
        category: 'owner',
        description: 'Set the bots status',
        usage: '<status>',
        accessableby: 'Owner'
    },
    run: async (bot, message, args) => {
        if(message.author.id != OwnerID) return message.channel.send(`You're not the bot the owner!`);

        if(args == "") {
            message.channel.send(`Make sure it is either **dnd**, **online**, **idle**, **invisible**`);
        };

        if(args[0] === 'dnd') {
            bot.user.setStatus('dnd');
            message.channel.send(` Successfully changed the bots status to **Do Not Disturb**`);
        };

        if(args[0] === 'idle') {
            bot.user.setStatus('idle');
            message.channel.send(` Successfully changed the bots status to **idle**`);
        };

        if(args[0] === 'online') {
            bot.user.setStatus('online');
            message.channel.send(` Successfully changed the bots status to default -> **online**`);
        };

        if(args[0] === 'invisible') {
            bot.user.setStatus('invisible');
            message.channel.send(` Successfully changed the bots status to **invisible**`);
        };

        if(args[0] === 'offline') {
            bot.user.setStatus('invisible');
            message.channel.send(` Successfully changed the bots status to **invisible**`);
        }
    }
}