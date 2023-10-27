const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, oldChannel, newChannel) => {


    const db = bot.db;


    const fetchedLogs = await newChannel.guild.fetchAuditLogs({
		limit: 1,
		type: Discord.AuditLogEvent.ChannelUpdate,
	});

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Salons Modifié")
    .setColor("Red")
    .setFooter({text: "Orian | Logs | ChannelCreate"})
    .setThumbnail()
    .addFields(
    {name: `Ancien Salon :`,value: `**Nom de l'ancien salon** : \`${oldChannel.name}\` (<#${oldChannel.id}>)\n**Type de l'ancien salon** : \`${oldChannel.type}\`\n**Nsfw** : \`${oldChannel.nsfw ? "Oui" : "Non"}\`\n **Position de l'ancien salon**: \`${oldChannel.rawPosition}\``},
    {name: `Nouveau Salon :`,value: `**Nom du nouveau salon** : \`${newChannel.name}\` (<#${newChannel.id}>)\n**Type du nouveau salon** : \`${newChannel.type}\`\n**Nsfw** : \`${newChannel.nsfw ? "Oui" : "Non"}\`\n **Position du nouveau salon**: \`${newChannel.rawPosition}\``},
    );

    db.query(`SELECT * FROM serveur WHERE guildID = ${newChannel.guild.id}`, async(err, req) => {
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