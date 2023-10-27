const Discord = require("discord.js")
const emojie = require("../../emoji.json")
const BanLogsReason = require("../../Commandes/ban")

module.exports = async (bot, ban) => {


    const db = bot.db;

    const fetchedLogs = await ban.guild.fetchAuditLogs({
		limit: 1,
		type: Discord.AuditLogEvent.MemberBanAdd,
	});
	// Since there's only 1 audit log entry in this collection, grab the first one
	const banLog = fetchedLogs.entries.first();

	// Perform a coherence check to make sure that there's *something*
	if (!banLog) return console.log(`${ban.user.tag} was banned from ${ban.guild.name} but no audit log could be found.`);

	// Now grab the user object of the person who banned the member
	// Also grab the target of this action to double-check things
	const { executor, target, reason } = banLog;

	// Update the output with a bit more information
	// Also run a check to make sure that the log returned was for the same banned member
    if (target.id === ban.user.id) {
        let embed = new Discord.EmbedBuilder()
            .setTitle("Logs - Ban")
            .setDescription(`\`${ban.user.tag}\` à été banni par \`${executor.tag}\` pour la raison \`${reason ? reason : "Aucune raison fournie"}\`.`)
            .setColor("Red")
            .setFooter({text: "Orian | Logs | GuildBanAdd"})
            .setThumbnail()
        const db = bot.db;
        db.query(`SELECT * FROM serveur WHERE guildID = ${ban.guild.id}`, async(err, req) => {
            if(req.length < 1) {
                return
            }
            if(req[0].logsID === "OFF") return;
            if(req[0].logsID === "ON") return;
            if(req[0].logsID !== "OFF" && req[0].logID !== "ON") {
                bot.channels.cache.get(req[0].logID).send({embeds: [embed]})
            }
        })
        
    }
}