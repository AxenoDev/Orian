const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "money",
    description: "Permet d'afficher combient à une personne (Argent)",
    permission: "Aucune",
    dm: false,
    category: `${emojie.coins} Economie`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à qui regarder l'argent",
            required: true,
            autocomplete: true,
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
        
                try {
                    db.query(`SELECT * FROM coins WHERE guildID = ${message.guild.id} AND userID = ${user.id}`, async(err, req) => {
                        if(req.length < 1) {
                            message.reply({content: "Cette personne n'est pas enregistrer dans la base de donnée !", ephemeral: true})
                        } else {
                            try {
                                let Embed = new Discord.EmbedBuilder()
                                .setTitle("Point - " + user.tag)
                                .setDescription(`<@${user.id}> à ${req[0].coins} point${req[0].coins <= 1 ? "" : "s"}`)
                                .setColor("Green")
                                
        
                                await message.reply({embeds: [Embed], ephemeral: true})
                                
                            } catch(err) { message.reply({content: "Une erreur c'est produit !", ephemeral: true}) }   
                        }
                    })
                } catch(err) { message.reply({content: "Une erreur c'est produit !", ephemeral: true}) }
            }
        })
        
    }
}