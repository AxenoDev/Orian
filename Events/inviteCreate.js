const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, invite) => {


    const db = bot.db;

    const fetchedLogs = await invite.guild.fetchAuditLogs({
		limit: 1,
		type: Discord.AuditLogEvent.InviteCreate,
	});
	const InviteCreate = fetchedLogs.entries.first();
    if (!InviteCreate) return;

	const { executor, target } = InviteCreate;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Invitation Créer")
    .setDescription(`\`${executor.tag}\` à créé une invitation avec un nombre d'utilisation de \`${invite.maxUses}\`\n**Lien** : https://discord.gg/${invite.code}`)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | InviteCreate"})
    .setThumbnail();

    db.query(`SELECT * FROM serveur WHERE guildID = ${invite.guild.id}`, async(err, req) => {
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