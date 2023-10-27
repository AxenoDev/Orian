const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, guild, oldLelvel, newLevel) => {


    const db = bot.db;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Level Up !")
    .setDescription(`${guild.name} est passer au level ${newLevel} !`)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | guildBoostLevelUp"})
    .setThumbnail();
    
    db.query(`SELECT * FROM serveur WHERE guildID = ${oldMember.guild.id}`, async(err, req) => {
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