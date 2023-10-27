const Discord = require("discord.js")
const emojie = require("../emoji.json")

module.exports = {

    name: "clear",
    description: "Clear des messages d'un salon",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "number",
            name: "nombre",
            description: "Le nombre de messages à supprimer",
            required: true,
            autocomplete: false
        }, {
            type: "channel",
            name: "salon",
            description: "Le salon à clear",
            required: false,
            autocomplete: true
        }
    ],

    async run(bot, message, args) {

        let channel = args.getChannel("salon")
        if(!channel) channel = message.channel;
        let EmbedNoChannel = new Discord.EmbedBuilder()
        .setTitle("Erreur - Clear")
        .setDescription("Le salon n'a pas été trouvé !")
        .setColor("Red")
        if(channel.id !== message.channel.id && !message.guild.channels.cache.get(channel.id)) return message.reply("Le salon n'a pas été trouvé !")

        let number = args.getNumber("nombre")
        let EmbedNumberError = new Discord.EmbedBuilder()
        .setTitle("Erreur - Clear")
        .setDescription("Il me faut un nombre compris entre`1` et `100` !")
        .setColor("Red")
        if(parseInt(number) <= 0 || parseInt(number) > 100) return message.reply("Il me faut un nombre entre `0` et `100` inclus !")


        try {

            let messages = await channel.bulkDelete(parseInt(number))

            let EmbedSuccess = new Discord.EmbedBuilder()
            .setTitle("Succès - Clear")
            .setDescription(`\`${message.size}\` message${message.size <= 1 ? '' : 's'} ont été supprimés dans le salon ${channel} !`)
            .setColor("Green")
            await message.reply({content: `\`${messages.size}\` message(s) ont été supprimés dans le salon ${channel} !`, ephemeral: true})

        } catch (err) {

            let messages = [...(await channel.messages.fetch()).filter(msg => !msg.interaction && (Date.now() - msg.createdAt) <= 1209600000).values()]
            if(messages.length <= 0) return message.reply("Aucun message n'a été supprimé, ils datent tous de plus de 14 jours !")
            await channel.bulkDelete(messages)

            await message.reply({content: `Seul \`${messages.length}\` message(s) ont été supprimés, car le reste date de plus de 14 jours !`, ephemeral: true})
        }
    }
}