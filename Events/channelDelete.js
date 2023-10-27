const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, channel) => {


    const db = bot.db;

    const fetchedLogs = await channel.guild.fetchAuditLogs({
		limit: 1,
		type: Discord.AuditLogEvent.ChannelCreate,
	});
	const ChannelCreateLogs = fetchedLogs.entries.first();
    if (!ChannelCreateLogs) return;

	const { executor, target, channels } = ChannelCreateLogs;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Salons Supprimer")
    .setDescription(`Le salon \`${channel.name}\` a été supprimé par \`${executor.tag}\``)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | ChannelCreate"})
    .setThumbnail();

    db.query(`SELECT * FROM serveur WHERE guildID = ${channel.guild.id}`, async(err, req) => {
        let LogsID = req[0].logsID;
        if(req.length < 1) {
            return
        }
        if(LogsID === "OFF") return;
        if(LogsID === "ON") return;
        if(LogsID !== "ON" && LogsID !== "OFF") {
            bot.channels.cache.get(req[0].logsID).send({embeds: [embed]})           
        }
        
    })
    
}