const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, message) => {


    const db = bot.db;

    const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: Discord.AuditLogEvent.MessageDelete,
	});
	const deletionLog = fetchedLogs.entries.first();
    if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	const { executor, target } = deletionLog;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Message Supprimer")
    .setDescription(`Le messages de \`${message.author.tag}\` a été supprimer par \`${executor.tag}\`\n**Contenue:** \`\`\`${message.content}\`\`\``)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | MessageDelete"})
    .setThumbnail();

    db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async(err, req) => {
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