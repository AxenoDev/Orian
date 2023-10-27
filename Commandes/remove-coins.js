const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "remove-coins",
    description: "Retire de l'argent à un membre du serveur",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: `${emojie.coins} Economie`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à qui retirer l'argent",
            required: true,
            autocomplete: true,
        },
        {
            type: "string",
            name: "coins",
            description: "Le nombre d'argent à retirer",
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
                let member = message.guild.members.cache.get(user.id)
                let coins = args.getString("coins")
        
                function isNum(coins){
                    return !isNaN(coins)
                }
                if (isNaN(coins) !== false) 
                {
                    message.reply("Vous devez metre un chiffre !")
                }
                
                try {
                    db.query(`SELECT * FROM coins WHERE guildID = ${message.guild.id} AND userID = ${user.id}`, async(err, req) => {
                        if(req.length < 1) {
                            db.query(`INSERT INTO coins (guildID, userID, coins) VALUES ('${message.guild.id}', '${user.id}', '0')`)
                        } else {
                            try {
                                if(req[0].coins <= 0) {
                                    message.reply({content: "Vous ne pouvez pas baisser plus de points !", ephemeral: true})
                                } else {
                                    db.query(`UPDATE coins SET coins = '${parseInt(req[0].coins) - parseInt(coins)}' WHERE userID = ${user.id} AND guildID = ${message.guild.id}`)
                                    let Embed = new Discord.EmbedBuilder()
                                    .setTitle("Succès - AddPoints")
                                    .setDescription(`Vous avez retirer \`${parseInt(coins)}\` points à ${user} avec succès !\n**Il à maintenant \`${parseInt(req[0].coins) - parseInt(coins)}\` point${req[0].coins <= 1 ? "" : "s"} **`)
                                    .setColor("Green")
                                    let EmbedUserSend = new Discord.EmbedBuilder()
                                    .setTitle(`${message.guild.name} - AddPoints`)
                                    .setDescription(`<@${message.user.id}> (${message.user.tag}) vous à retirer \`${parseInt(coins)}\` avec succès !\n**Vous avez maintenant \`${parseInt(req[0].coins) - parseInt(coins)}\` point${req[0].coins <= 1 ? "" : "s"} !**`)
                                    .setColor("Green")
        
                                    await message.reply({embeds: [Embed], ephemeral: true})
                                    await user.send({embeds: [EmbedUserSend]})
                                }
                            } catch(err) { message.reply({content: "Une erreur c'est produit !", ephemeral: true}) }   
                        }
                    })
                } catch(err) { message.reply({content: "Une erreur c'est produit !", ephemeral: true}) }
            }
        })
        
    }
}