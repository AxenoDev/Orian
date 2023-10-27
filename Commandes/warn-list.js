const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "warn-list",
    description: "list des warn d'un membre",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "La liste les warn du membre",
            required: true,
            autocomplete: true
        }
    ],

    async run(bot, message, args, db) {
        
        let user = args.getUser("membre")
        if(!user) return message.reply("Pas de membre !")
        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.reply("Pas de membre !")

        db.query(`SELECT * FROM warns WHERE guild = '${message.guildId}' AND user = '${user.id}'`, async (err, req) => {
            await req.sort((a, b) => parseInt(b.date) - parseInt(a.date))
            if(req.length < 1) return message.reply("Ce membre n'a pas de warn !")

            let Embed = new Discord.EmbedBuilder()
            .setTitle(`Warns de ${user.tag}`)
            .setThumbnail(user.displayAvatarURL({display: true}))
            .setTimestamp()
            .setFooter({text: "Warns"})

            for(let i = 0; i < req.length; i++) {
                Embed.addFields([{name: `Warn n°${i+1}`, value: `> **Auteur**: ${(await bot.users.fetch(req[i].author)).tag}\n> **Id**: \`${req[i].warn}\`\n> **Raison**: ${req[i].reason}\n> **Date**: <t:${Math.floor(parseInt(req[i].date / 1000))}:F>`}])
            }
            await message.reply({embeds: [Embed]})
        })      
    }
}