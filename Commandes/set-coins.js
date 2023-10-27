const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "set-coins",
    description: "Permet de m'être de l'argent d'un membre du serveur à un nombre défini",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: `${emojie.coins} Economie`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre",
            required: true,
            autocomplete: true,
        },
        {
            type: "string",
            name: "coins",
            description: "Le nombre d'argent",
            required: true,
            autocomplete: false,
        }
    ],

    async run(bot, message, args, db) {
        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id} `, async(err, req) => {
            let embeds = new Discord.EmbedBuilder()
            .setTitle("Erreur")
            .setColor("Red")
            .setDescription("L'économie est désactivé sur le serveur !")
            if(req[0].economieStatus === "OFF") return message.reply({ embeds: [embeds] });
            else {
                let user = args.getUser("membre")
                let coins = args.getString("coins")
        
                function isNum(coins){
                    return !isNaN(coins)
                }
                if (isNaN(coins) !== false) 
                {
                    message.reply("Vous devez metre un chiffre !")
                }
                else {
                    try {
                        db.query(`SELECT * FROM coins WHERE userID = ${user.id} AND guildID = ${message.guild.id}`, async(err, req) => {
                            if(req.length < 1) {
                                message.reply({content: `<@${user.id}> vient d'être enregistrer !`, ephemeral: true})
                                db.query(`INSERT INTO coins (guildID, userID, coins) VALUES ('${message.guild.id}', '${user.id}', '0')`)
                            } else {
                                try {
                                    db.query(`UPDATE coins SET coins = '${parseInt(coins)}' WHERE guildID = ${message.guild.id} AND userID = ${user.id}`)
                                    let Embed = new Discord.EmbedBuilder()
                                    .setTitle("Succès - AddPoints")
                                    .setDescription(`Vous avez mis le compteur de ${user} à ${coins} point${coins <= 1 ? "" : "s"} avec succès !`)
                                    .setColor("Green")
                                    let EmbedUserSend = new Discord.EmbedBuilder()
                                    .setTitle(`${message.guild.name} - Points`)
                                    .setDescription(`Votre compteur de points à été mis à \`${coins}\` point${coins <= 1 ? "" : "s"} par <@${message.user.id}> ! `)
                                    .setColor("Green")
            
                                    await message.reply({embeds: [Embed], ephemeral: true})
                                    await user.send({embeds: [EmbedUserSend], ephemeral: true})
                                } catch(err) { console.log(err) }   
                            }
                        })
                    } catch(err) { console.log(err) }
                }
            }
        })
        
    }
}