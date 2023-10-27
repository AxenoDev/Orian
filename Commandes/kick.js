const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "kick",
    description: "kick un membre",
    permission: Discord.PermissionFlagsBits.KickMembers,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "le membre à kick",
            required: true,
            autocomplete: true,
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du kick",
            required: false,
            autocomplete: true,
        }
    ],

    async run(bot, message, args) {
        let user = args.getUser("membre")
        if(!user) return message.reply("Pas de membre à kick")
        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.reply("Pas de membre à kick !")

        let reason = args.getString("raison")
        let EmbedBanMeUser = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Essaie pas de te kick !")
            .setColor("Red")
            let EmbedBanOwnerError = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Tu ne peux pas kick le propriétaire du serveur !")
            .setColor("Red")
            let EmbedBotErrorBan = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Je ne peux pas kick ce membre !")
            .setColor("Red")
            let EmbedErrorPerm = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Tu ne peux pas kick ce membre !")
            .setColor("Red")
            let EmbedErrorBanDejaBan = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Ce membre est déjà kick du serveur !")
            .setColor("Red")
            let EmbedSuccessUserSend = new Discord.EmbedBuilder()
            .setTitle(`BAN - ${message.guild.name}`)
            .setDescription(`Tu as été kick du serveur ${message.guild.name} par ${message.user.tag} pour la raison \`${reason}\``)
            .setColor("Red")
            let EmbedSuccess = new Discord.EmbedBuilder()
            .setTitle("Succès - Kick")
            .setDescription(`${message.user} a kick ${user.tag} pour la raison: \`${reason}\``)
            .setColor("Green")


        if(!reason) reason = "Pas de raison fournie.";
        if(message.user.id === user.id) return message.reply({embeds: [EmbedBanMeUser], ephemeral: true});
        if((await message.guild.fetchOwner()).id === user.id) return message.reply({embeds: [EmbedBanOwnerError], ephemeral: true});
        if(member && !member.bannable) return message.reply({embeds: [EmbedBotErrorBan], ephemeral: true});
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply({embeds: [EmbedErrorPerm], ephemeral: true});
        
        try {
            await user.send({embeds: [EmbedSuccessUserSend], ephemeral: true})
        } catch(err) {}

        await message.reply({embeds: [EmbedSuccess], ephemeral: true})

        await member.kick(reason)
        
    }
}