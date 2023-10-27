const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "add-role-masif",
    description: "Ajouter un role à tous les personne du serveur",
    permission: Discord.PermissionFlagsBits.ManageRoles,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "role",
            name: "roles",
            description: "Role à rajouter aux membres",
            required: true,
            autocomplete: true,
        }
    ],

    async run(bot, message, args) {

        
        let role = message.options.getRole("roles")
        let roleEmbed = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription("Vous devez fournire un rôle !")
        let everyoneNameErreur = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription("Le rôle everyone ne peux pas être modifier !")
        let botNoPerms = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription(`Le bot doit être au dessus de ${role}`)
        let success = new Discord.EmbedBuilder()
        .setTitle("Succès")
        .setColor('#30c000')
        .setDescription(`Vous venez de donner le rôle ${role} à tous le monde avec succès !`)
        let erreur = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription("Une erreur est survenue lors de l'execution de la commande ! Veuillez réesayer !")

        if(!role) return message.reply({embeds: [roleEmbed], ephemeral: true})
        try {
            if (message.guild.roles.cache.find(role => role.name === 'everyone')) return message.reply({embeds: [everyoneNameErreur], ephemeral: true})
            else {
                if (message.guild.roles.highest.comparePositionTo(role) <= 0) return message.reply({embeds: [botNoPerms], ephemeral: true}); 
                try {                    
                    await message.guild.members.cache.forEach(m => {
                            m.roles.add(role);
                    });
                    message.reply({embeds: [success], ephemeral: true})

                } catch(err) {
                    await message.reply({embeds: [erreur], ephemeral: true})
                    console.log(err)
                }
            }
        } catch(err) {
            await message.reply({embeds: [erreur], ephemeral: true})
        }
    }
}