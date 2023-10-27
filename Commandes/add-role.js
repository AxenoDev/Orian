const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "add-role",
    description: "Ajouter un role à un membre",
    permission: Discord.PermissionFlagsBits.ManageRoles,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à qui rajouter le role",
            required: true,
            autocomplete: true,
        },
        {
            type: "role",
            name: "roles",
            description: "Role à rajouter au membre",
            required: true,
            autocomplete: true,
        }
    ],

    async run(bot, message, args) {

        let role = message.options.getRole("roles")
        let user = await bot.users.fetch(args._hoistedOptions[0].value)
        let member = message.guild.members.cache.get(user.id)

        let userEmbed = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription('Vous devez fournire un utilisateur !')
        let roleEmbed = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription("Vous devez fournire un rôle !")
        let roledejauserEmbed = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription(`L'utilisateur ${user} à déjà le rôle ${role}`)
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
        .setDescription(`Vous venez de donner le rôle ${role} à <@${user.id}> avec succès !`)
        let erreur = new Discord.EmbedBuilder()
        .setTitle("ERREUR")
        .setColor('#b30000')
        .setDescription("Une erreur est survenue lors de l'execution de la commande ! Veuillez réesayer !")



        try {
            
            if(!user) return message.reply({embeds: [userEmbed], ephemeral: true})
            
            
            if(!role) return message.reply({embeds: [roleEmbed], ephemeral: true})
            if (message.guild.roles.highest.comparePositionTo(role) <= 0) return message.reply({embeds: [botNoPerms], ephemeral: true}); 
            try {
                
                if(member.roles.cache.has(role.id)) return message.reply({embeds: [roledejauserEmbed], ephemeral: true})
                else {
                    
                    await member.roles.add(role);
                    message.reply({embeds: [success], ephemeral: true})
                }

            } catch(err) {
                message.reply({embeds: [erreur], ephemeral: true})
            }

        } catch(err) {
            message.reply({embeds: [erreur], ephemeral: true})
        }
    }
}