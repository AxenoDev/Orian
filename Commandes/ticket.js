const Discord = require("discord.js");
const emojie = require("../emoji.json")
const os = require("os");
module.exports = ({
    name: "ticket",
    description: "Envoie l'embed des tickets",
    permission: Discord.PermissionFlagsBits.ManageGuild,
    dm: true,
    category: `${emojie.systeme} Système`,

  async run(bot, message, args, db) {
    let Embed = new Discord.EmbedBuilder()
    .setColor("Blue")
    .setTitle("Création d'un ticket")
    .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
    .setDescription("Créer un ticket")
    .setTimestamp()
    .setFooter({ text: bot.user.username, iconURL: bot.user.displayAvatarURL({ dynamic: true }) })

    const btn = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
        .setCustomId("ticket")
        .setLabel("Créer un ticket")
        .setStyle(Discord.ButtonStyle.Secondary)
        .setEmoji("📩")    
    )

    await message.reply({embeds: [Embed], components: [btn] })
  }
})