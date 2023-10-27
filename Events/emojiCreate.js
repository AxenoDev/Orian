const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, emoji) => {


    const db = bot.db;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Ajout Emoji")
    .setDescription(`Emoji ${emoji} (\`${emoji.name}\`) à été ajouté sur le serveur !`)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | emojiCreate"})
    .setThumbnail();
    
    db.query(`SELECT * FROM serveur WHERE guildID = ${emoji.guild.id}`, async(err, req) => {
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