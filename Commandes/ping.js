const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "ping",
    description: "Avoir la latence du bot",
    permission: "Aucune",
    dm: true,
    category: "<:information:992164862459379712> Informations",

    async run(bot, message, args) {
        let embed = new Discord.EmbedBuilder()
        .setTitle("Commande Ping")
        .setDescription(`> **Ping de l'API** ➔ \`${bot.ws.ping}\`ms\n> **Latence du Bot** ➔ \`${Date.now() - message.createdTimestamp}\`ms`)
        .setTimestamp()
        .setFooter({text: "Orian | Ping Commandes"})

        await message.reply({embeds: [embed]})
    }
}