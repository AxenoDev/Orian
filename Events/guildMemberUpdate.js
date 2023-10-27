const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, oldMember, newMember) => {


    const db = bot.db;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Membre Modifié sur le serveur - " + newMember.user.username)
    .addFields(
        {name: `Membre avant la modification:`,value: `**Ancien surnon du membre** : \`${oldMember.nickname ? oldMember.nickname : "Aucun"}\` \n**Les anciens roles** : ${oldMember._roles} (${oldMember._roles.length} role${newMember._roles.length > 1 ? "s" : ""})`},
        {name: `Membre apres la modification:`,value: `**Nouveau surnon du membre** : \`${newMember.nickname ? newMember.nickname : "Aucun"}\` \n**Les nouveaux roles** : ${newMember._roles} (${newMember._roles.length} role${newMember._roles.length > 1 ? "s" : ""})`},
    )
    .setColor("Red")
    .setFooter({text: "Orian | Logs | guildMemberUpdate"})
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