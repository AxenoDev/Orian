const { messageLink } = require("discord.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports = async (bot, interaction) => {
    const db = bot.db
    if(interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete){
        let entry = interaction.options.getFocused()
        if(interaction.commandName === "help") {
            let choices = bot.commands.filter(cmd => cmd.name.includes(entry))
            await interaction.respond(entry === "" ? bot.commands.map(cmd => ({name: cmd.name, value: cmd.name})) : choices.map(choice => ({name: choice.name, value: choice.name}))) 
        }
        if(interaction.commandName === "ascii")  {
            const focusedValue = interaction.options.getFocused();
            const choices = ['Basic', 'Standard', 'arrows', 'Big', 'train', 'sweet', 'soft', 'small', 'script', 'star wars', 'stampate']
            const filtered = choices.filter(choice => choice.startsWith(focusedValue));
            await interaction.respond(filtered.map(choice => ({name: choice, value: choice})))
        }
    }

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../Commandes/${interaction.commandName}`)
        command.run(bot, interaction, interaction.options, bot.db)
    }

    if(interaction.isButton()) {
        if(interaction.customId === "ticket") {
            
            db.query(`SELECT * FROM serveur WHERE guildId = '${interaction.guild.id}'`, async(err, req) => {
                
                if(req[0].ticketCat === "ON") return interaction.message.delete()
                if(req[0].ticketCat === "OFF") {
                    interaction.message.delete()
                    // interaction.message.reply({content: "Le systeme de ticket à été désactiver ! \nContacter un Administrateur pour les réactiver", ephemeral: true})
                } 
                else {
                    let channel = await interaction.guild.channels.create({
                        name: `ticket-${interaction.user.username}`,
                        type: Discord.ChannelType.GuildText,
                        // permissionOverwrites: [
                        //     {
                        //         id: interaction.guild.roles.everyone.id,
                        //         deny: [Discord.PermissionFlagsBits.ViewChannel]
                        //     }, {
                        //         id: interaction.user.id,
                        //         allow: [
                        //             Discord.PermissionFlagsBits.ViewChannel,
                        //             Discord.PermissionFlagsBits.SendMessages,
                        //             Discord.PermissionFlagsBits.ReadMessageHistory,
                        //             Discord.PermissionFlagsBits.AttachFiles
                        //         ]
                        //     }
                        // ]
                    })
                    // interaction.channel.parent.id
                    await channel.setParent(req[0].ticketCat)
                    await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                        ViewChannel: false
                    })
                    await channel.permissionOverwrites.create(interaction.user, {
                        ViewChannel: true,
                        SendMessages: true,
                        ReadMessageHistory: true,
                        AttachFiles: true
                    })
        
                    
                    
                    await interaction.reply({
                        content: `Votre ticket à correctement été créer !`,
                        ephemeral: true
                    })
            
                    let Embed = new Discord.EmbedBuilder()
                        .setColor("Blue")
                        .setTitle("Création d'un ticket")
                        .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
                        .setDescription("Ticket créé")
                        .setTimestamp()
                        .setFooter({ text: bot.user.username, iconURL: bot.user.displayAvatarURL({ dynamic: true }) })
            
                    const btn = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
                        .setCustomId("close")
                        .setLabel("Fermer le ticket")
                        .setStyle(Discord.ButtonStyle.Danger)
                        .setEmoji("🚮")
                    )
                    await channel.setTopic(interaction.user.id)
                    await channel.send({embeds: [Embed], components: [btn]})
                }
                
                
            })
            
        }
        if(interaction.customId === "close") {
            let user = bot.users.cache.get(interaction.channel.topic)
            try {
                await user.send("Votre ticket a été fermer")
            } catch(err) {}
    
            await interaction.channel.delete()
        }
    }

    

    
    
}