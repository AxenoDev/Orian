const Discord = require("discord.js");
const emojie = require("../emoji.json")
const ms = require("ms")

module.exports = {
    name: "mute",
    description: "Permet de mute un membre",
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
            name: "temps",
            description: "Le temps de mute",
            required: true,
            autocomplete: false
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
        if(!user) return message.reply("Pas de membre à mute")
        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.reply("Pas de membre à mute !")

        let time = args.getString("temps")
        if(!time) return message.reply("Pas de temps fournis")
        if(isNaN(ms(time))) return message.reply("Pas le bon format")
        if(ms(time) > 2419200000) return message.reply("Vous ne pouvez pas mute plus de 28 jours")

        let reason = args.getString("raison")
        if(!reason) reason = "Pas de raison fournie.";

        if(message.user.id === user.id) return message.reply("Essaie pas de te mute !")
        if((await message.guild.fetchOwner()).id === user.id) return message.reply("Ne mute pas le proprietaire du serveur")
        if(!member.moderatable) return message.reply("Je ne peux pas mute ce membre !")
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0 ) return message.reply("Tu ne peux pas mute ce membre")
        if(member.isCommunicationDisabled()) return message.reply("Ce membre est déjà mute")

        try {
            await user.send(`Tu à étais mute du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\` pendant ${time}`)
        } catch(err) {

        }

        await message.reply(`${message.user.tag} à mute ${user.tag} pour la raison : \`${reason}\` pendant ${time}`)

        await member.timeout(ms(time), reason)

    }
}