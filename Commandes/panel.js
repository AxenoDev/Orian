const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "panel",
    description: "Permet de config le bot",
    permission: "Aucune",
    dm: false,
    category: `${emojie.systeme} Système`,

    async run(bot, message, args, db) {

        let PanelLink = `http://162.19.13.67/settings/${message.guild.id}`

        let PanelEmbed = new Discord.EmbedBuilder()
        .setTitle("Panel - Lien du panel")
        .setDescription("Voici le lien du panel pour le serveur: \n" + PanelLink)

        await message.reply({
            embeds: [PanelEmbed],
            ephemeral: true
        })
        
    }
}