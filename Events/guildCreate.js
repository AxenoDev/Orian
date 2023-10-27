const Discord = require("discord.js")
const emojie = require("../../emoji.json")

module.exports = async (bot, guild) => {


    let db = bot.db

    db.query(`SELECT * FROM serveur WHERE guildID = ${guild.id}`, async (err, req) => {

        if(req.length < 1){
            db.query(`INSERT INTO serveur (guildID, welcomeID, goodbyeID, logsID, economieStatus, economieNumber, xpStatus, xpNumber, ticketCat) VALUES ('${message.guild.id}', 'OFF', 'OFF', 'OFF', 'OFF', '1', 'OFF', '1', 'OFF')`
, function(err) {
                if(err) throw err;
            })
        }
    })
    // const
    const x = Date.now() - guild.createdTimestamp;
    const created = Math.floor(x / 86400000)

    // Let Embed
    // let Embed = new Discord.EmbedBuilder()
    // .setTitle("Arrivé sur un serveur")
    // .setDescription(`
    // > ${emojie.name} Nom: \`${guild.name}\`
    // > ${emojie.ID} Identifiant: \`${guild.id}\`
    // > ${emojie.description} Description: \`${guild.description ? guild.description : "Aucune"}\`
    // > ${emojie.owner} Propriétaire: \`${(((await guild.fetchOwner().id))).tag}\` ${(await guild.fetchOwner())}
    // > ${emojie.membre} Membres: \`${guild.memberCount}/${guild.maximumMembers}\` \`(${guild.members.cache.filter(m => m.user.bot).size} Bots)\`
    // > ${emojie.boost} Nombre de boost(s): \`${guild.premiumSubscriptionCount}\` \`(Tier ${guild.premiumTier})\`
    // > ${emojie.badge} Badge: \`${guild.protection ? "Verifier" : "", guild.partnered ? "Parteniare" : "" ? "Vérifier" || "Partenaire" : "Aucun"}\`
    // > ${emojie.createAccount} Date de création: <t:${Math.floor(guild.createdAt / 1000) }:F> \`(Il y a ${created} jour${created <= 1 ? "" : "s"})\`
    // `)
    // .setColor("Green")
    // .setFooter({text: "Orian | GuildCreate Logs"})

    // Message
    bot.channels.cache.get("979013001912922133").send({embeds: [Embed]})
    console.log(`[GuildCreate Logs] Arrivé sur le serveur [${guild.name}]`)
    
}