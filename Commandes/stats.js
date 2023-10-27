const Discord = require("discord.js");
const emojie = require("../emoji.json")
const os = require("os");
module.exports = ({
    name: "stats",
    description: "Permet d'avoir des informations sur les stats du bot",
    permission: "Aucune",
    dm: true,
    category: `${emojie.information} Informations`,

  async run(bot, message, args, db) {
    let servercount = bot.guilds.cache.size;
    let usercount = bot.users.cache.size;
    let channelscount = bot.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = bot.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;
    let stats = new Discord.EmbedBuilder()
      .setTitle(`Statistique ${bot.user.username}`)
      .setColor("Blue")
      .addFields(
        { name: '💻 | Nombre de serveurs', value: `\`${servercount}\`` },
        { name: '🌍 | Nombre de membres', value: `\`${usercount}\`` },
        { name: '💬 | Nombre de salons', value: `\`${channelscount}\`` },
        { name: '🚨 | Architecture de windows', value: `\`${arch}\`` },
        { name: '🌐 | Plateforme de windows', value: `\`${platform}\`` },
        { name: '📊 | Nombre de shard', value: `\`${shard}\`` },
        { name: '📺 | Version de Node.js', value: `\`${NodeVersion}\`` },
        { name: '💖 | Nombre de cœurs', value: `\`${cores}\`` }
      )
      .setTimestamp()
      .setFooter({ text: `Orian` });
    message.channel.send({ embeds: [stats] })
  }
})