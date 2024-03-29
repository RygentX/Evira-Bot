const { RichEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const { prefix } = require('../../botconfig.json');
const { stripIndents } = require('common-tags');

module.exports = {
    config: {
        name: 'help',
        aliases: ['h', 'halp', 'commands'],
        category: 'core',
        description: 'Displays all commands that the bot has.',
        usage: '[command | alias]',
        accessableby: 'Members'
    },
    run: async (bot, message, args) => {
        const roleColor = message.guild.me.highestRole.hexColor;
        
        const embed = new RichEmbed()
            .setColor(roleColor === '#000000' ? '#ffffff' : roleColor)
            .setAuthor(`${message.guild.me.displayName} Help`, bot.user.displayAvatarURL)
            .setThumbnail(bot.user.displayAvatarURL);

        if(!args[0]) {
            const categories = readdirSync('./commands/');

            embed.setDescription(`These are the available commands for ${message.guild.me.displayName}\nThe bot prefix is: **${prefix}**`);
            embed.setFooter(`© ${message.guild.me.displayName} | Total Commands: ${bot.commands.size}`, bot.user.displayAvatarURL);

            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.config.category === category);
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);
                try {
                    embed.addField(`**❯ ${capitalise} [${dir.size}]:**`, dir.map(c => `\`${c.config.name}\``).join(', '));
                } catch(e) {
                    console.log(e);
                };
            });

            return message.channel.send(embed);
        } else {
            let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase());
            if(!command) return message.channel.send(embed.setTitle('Invalid Command.').setDescription(`Do \`${prefix}help\` for the list of the commands.`));
            command = command.config;

            embed.setDescription(stripIndents`The bot's prefix is: \`${prefix}\`\n
            **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Description:** ${command.description || 'No Description provided.'}
            **Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : 'No Usage'}
            **Accessible by:** ${command.accessableby || 'Members'}
            **Aliases:** ${command.aliases ? command.aliases.join(', ') : 'None.'}`);
            embed.setFooter(`Syntax: <> = required, [] = optional`);

            return message.channel.send(embed);
        }
    }
}
