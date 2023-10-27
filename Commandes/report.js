const { TextInputStyle } = require('discord.js')
const Discord = require('discord.js')
const emojie = require("../emoji.json")

module.exports = {

    name: 'report',
    description: 'Permet de signaler un bug',
    permission: 'Aucune',
    category: `${emojie.utils} Utiles`,
    dm: false,
    
    async run(bot, message, args) {

        let Modal = new Discord.ModalBuilder()
        .setCustomId('report')
        .setTitle("Signaler un bug")

        let question1 = new Discord.TextInputBuilder()
        .setCustomId('commande')
        .setLabel('Quelles commande ça touche')
        .setRequired(true)
        .setPlaceholder('Quelles commande ça touche ?')
        .setStyle(TextInputStyle.Short)

        let question2 = new Discord.TextInputBuilder()
        .setCustomId('details')
        .setLabel("Plus de détails ?")
        .setRequired(false)
        .setPlaceholder('Des détails ?')
        .setStyle(TextInputStyle.Paragraph)

        let question3 = new Discord.TextInputBuilder()
        .setCustomId('autre')
        .setLabel("Comment on éffectue le bug ?")
        .setRequired(true)
        .setPlaceholder('Comment éffectuer le bug ?')
        .setStyle(TextInputStyle.Paragraph)

        let question4 = new Discord.TextInputBuilder()
        .setCustomId('lien')
        .setLabel('Avez-vous des rushs/screens du bug ?')
        .setRequired(true)
        .setPlaceholder('Exemple : YouTube, Lien Imgur : Screen')
        .setStyle(TextInputStyle.Short)

        let ActionRow1 = new Discord.ActionRowBuilder().addComponents(question1);
        let ActionRow2 = new Discord.ActionRowBuilder().addComponents(question2);
        let ActionRow3 = new Discord.ActionRowBuilder().addComponents(question3);
        let ActionRow4 = new Discord.ActionRowBuilder().addComponents(question4);

        Modal.addComponents(ActionRow1, ActionRow2, ActionRow3, ActionRow4)

        await message.showModal(Modal)

        try {

            let reponse = await message.awaitModalSubmit({time: 300000})

            let commande = reponse.fields.getTextInputValue('commande')
            let details = reponse.fields.getTextInputValue('details')
            let autre = reponse.fields.getTextInputValue('autre')
            let lien = reponse.fields.getTextInputValue('lien')

            await reponse.reply({content: "Votre signalement à été envoyer avec succès au support d'Orian!", ephemeral: true})

            let Embed = new Discord.EmbedBuilder()
            .setColor('#000')
            .setAuthor({ name: "Par " + message.user.tag, iconURL: message.user.displayAvatarURL() })
            .setTitle('Un Bug à été signalé')
            .addFields(
                { name: "Commande Toucher :", value: `\`\`\`${commande}\`\`\``},
                { name: "Plus de détails :", value: `\`\`\`${details || "Aucun autre détails donner"}\`\`\``},
                { name: "Comment on éffectue le bug ? :", value: `\`\`\`${autre}\`\`\``},
                { name: "Screens/Vidéos :", value: `\`\`\`${lien}\`\`\``},
            )
            .setThumbnail(message.user.displayAvatarURL())
            .setTimestamp()
            .setFooter({ text: bot.user.username, iconURL: bot.user.displayAvatarURL() })

            await bot.channels.cache.get("992373990800752792").send({embeds: [Embed]})

        } catch (err) { }
    }
}