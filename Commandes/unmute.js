const Discord = require("discord.js");
const emojie = require("../emoji.json")
const ms = require("ms")

module.exports = {
    name: "unmute",
    description: "Permet de unmute un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à mute",
            required: true,
            autocomplete: true
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du mute",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        let user = args.getUser("membre")
        if(!user) return message.reply("Pas de membre à unmute")
        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.reply("Pas de membre à unmute !")

        let reason = args.getString("raison")
        if(!reason) reason = "Pas de raison fournie.";

        if(message.user.id === user.id) return message.reply("Essaie pas de te unmute !")
        if(!member.moderatable) return message.reply("Je ne peux pas mute ce membre !")
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0 ) return message.reply("Tu ne peux pas mute ce membre")
        if(!member.isCommunicationDisabled()) return message.reply("Ce membre n'est pas mute")

        try {
            await user.send(`Tu à étais unmute du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\` `)
        } catch(err) {

        }

        await message.reply(`${message.user.tag} à unmute ${user.tag} pour la raison : \`${reason}\``)

        await member.timeout(null, reason)

    }
}