const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, oldGuild, newGuild) => {


    const db = bot.db;

    let embed = new Discord.EmbedBuilder()
    .setTitle("Logs - Serveur Modifier")
    // .setDescription(``)
    .setColor("Red")
    .setFooter({text: "Orian | Logs | GuildUpdate"})
    .setThumbnail()
    .addFields(
        {name: `Serveur avant La modification:`,value: `**Ancien nom du serveur** : \`${oldGuild.name}\`\n**L'ancien icone** : \`${oldGuild.icon}\`\n**L'ancien afkChannel** : ${oldGuild.afkChannel ? oldGuild.afkChannel : "\`Aucun\`"}\n**L'ancien niveau de verification** : \`${oldGuild.verificationLevel}\`\n**Bar de boost** : \`${oldGuild.premiumProgressBarEnabled ? "Oui" : "Non"}\``},
        {name: `Serveur après la modification:`,value: `**Nouveau nom du serveur** : \`${newGuild.name}\`\n**La nouvelle icone** : \`${newGuild.icon}\`\n**Le nouveau afkChannel** : ${newGuild.afkChannel ? newGuild.afkChannel : "\`Aucun\`"}\n**Le nouveau niveau de verification** : \`${newGuild.verificationLevel}\`\n**Bar de boost** : \`${newGuild.premiumProgressBarEnabled ? "Oui" : "Non"}\``},
    );

    db.query(`SELECT * FROM serveur WHERE guildID = ${newGuild.id}`, async(err, req) => {
        let LogsID = req[0].logsID;
        if(req.length < 1) return;
        if(LogsID === "OFF") return;
        if(LogsID === "ON") return;
        if(LogsID !== "ON" && LogsID !== "OFF") {
            bot.channels.cache.get(req[0].logsID).send({embeds: [embed]})           
        }
    })
}