const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, messageReaction) => {


    const db = bot.db;


    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Reaction Ajouter")
    .setDescription(`\`${messageReaction.message.author.tag}\` a ajouter la réaction ${messageReaction._emoji} au message \`\`\` ${messageReaction.message.content}\`\`\` dans le salon \`${messageReaction.message.channel.name}\` (${messageReaction.message.channel})`)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | MessageReactionAdd"})
    .setThumbnail();

    db.query(`SELECT * FROM serveur WHERE guildID = ${messageReaction.message.guild.id}`, async(err, req) => {
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