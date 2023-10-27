const Discord = require("discord.js");
const emojie = require("../emoji.json")
const ms = require("ms")

module.exports = {
    name: "unban",
    description: "Permet de unmute un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à unban",
            required: true,
            autocomplete: true
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du unban",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        // try 
        // {
            let user = args.getUser("membre")
            if(!user) return message.reply("Pas de membre à unban")

            let reason = args.getString("raison")
            if(!reason) reason = "Pas de raison fournie.";

            // if((await !message.guild.bans.fetch().get(user.id))) return message.reply("Cet utilisateur n'est pas banni")

            try {
                await user.send(`Vous avais étais débanni du serveur ${message.guild.name} pour la raison: \`${reason}\``)
            } catch(err) {}

            await message.reply(`${message.user} à unban ${user.tag} pour la raison \`${reason}\``)

            await message.guild.members.unban(user, reason)

        // }
        // catch(err) 
        // {
        //     return message.reply("Pas d'utilisateur !")
        // }

    }
}