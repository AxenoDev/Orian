const Discord = require("discord.js")

module.exports = async (bot, oldEmoji, newEmoji) => {


    const db = bot.db;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Modification Emoji")
    .setDescription(`Emoji ${oldEmoji} (\`${oldEmoji.name}\`) à été modifié par \`${newEmoji.name}\` !`)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | emojiUpdate"})
    .setThumbnail();
    
    db.query(`SELECT * FROM serveur WHERE guildID = ${newEmoji.guild.id}`, async(err, req) => {
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