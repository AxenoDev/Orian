const Discord = require("discord.js");
const emojie = require("../emoji.json")
const package = require("../package.json")
const packagelock = require("../package-lock.json");
const os = require("os");
const { ButtonStyle } = require("discord.js");
const { ButtonBuilder } = require("discord.js");
const { ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "invite",
    description: "permet d'inviter le bot sur son serveur",
    permission: "Aucune",
    dm: false,
    category: `${emojie.information} Informations`,

    async run(bot, message, args) {

        const serv = message.guild
        const x = Date.now() - serv.createdTimestamp;
        const created = Math.floor(x / 86400000);

        const categories = bot.channels.cache.filter(c => c.type === Discord.ChannelType.GuildCategory).size
        

        let row = new ActionRowBuilder()
        .addComponents(
            inviteBtn = new ButtonBuilder()
                .setURL('https://discord.com/api/oauth2/authorize?client_id=914187703220850749&permissions=1234567890&scope=bot')
                .setLabel('Invite Moi !')
                .setStyle(ButtonStyle.Link)
        )
        

        let embed = new Discord.EmbedBuilder()
        .setTitle(`Tu peux m'inviter sur ton serveur !`)
        .setDescription(`> **Invite Moi** ${emojie.arrow} \`En cliquant sur ce boutons tu vas avoir un liens pour m'inviter sur ton serveur discord !\``)
        .setColor("Blue")
        .setImage()       
        .setTimestamp()
        .setFooter({text: "Orian | Invite Commandes"})

        await message.reply({embeds: [embed], components: [row]})

    }
}