const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, oldMessage, newMessage) => {


    const db = bot.db;

    if(oldMessage.author.bot) return;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Message Modifier")
    .setDescription(`Le messages de \`${oldMessage.author.tag}\` a été modifier.\n**Ancien contenue:** \`\`\`${oldMessage}\`\`\`**Nouveau contenue:** \`\`\`${newMessage}\`\`\``)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | MessageUpdate"})
    .setThumbnail();

    db.query(`SELECT * FROM serveur WHERE guildID = ${oldMessage.guild.id}`, async(err, req) => {
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