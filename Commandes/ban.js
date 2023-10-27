const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "ban",
    description: "Ban un membre",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    category: `${emojie.modo} Modérations`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "le membre à bannir",
            required: true,
            autocomplete: false,
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du bannissement",
            required: true,
            autocomplete: false,
        }
    ],

    async run(bot, message, args, db) {
        
        try {
            
            let user = await bot.users.fetch(args._hoistedOptions[0].value);
            let member = message.guild.members.cache.get(user.id);
            let reason = args.getString('raison');
            
            if(!user) return message.reply('Pas de membre à bannir');
            if(!reason) reason = 'Pas de raison fournie.';

            let EmbedBanMeUser = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Essaie pas de te bannir !")
            .setColor("Red")
            let EmbedBanOwnerError = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Tu ne peux pas bannir le propriétaire du serveur !")
            .setColor("Red")
            let EmbedBotErrorBan = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Je ne peux pas bannir ce membre !")
            .setColor("Red")
            let EmbedErrorPerm = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Tu ne peux pas bannir ce membre !")
            .setColor("Red")
            let EmbedErrorBanDejaBan = new Discord.EmbedBuilder()
            .setTitle("ERREUR - BAN")
            .setDescription("Ce membre est déjà banni du serveur !")
            .setColor("Red")
            let EmbedSuccessUserSend = new Discord.EmbedBuilder()
            .setTitle(`BAN - ${message.guild.name}`)
            .setDescription(`Tu as été banni du serveur ${message.guild.name} par ${message.user.tag} pour la raison \`${reason}\``)
            .setColor("Red")
            let EmbedSuccess = new Discord.EmbedBuilder()
            .setTitle("Succès - Ban")
            .setDescription(`${message.user} a banni ${user.tag} pour la raison: \`${reason}\``)
            .setColor("Green")



            if(message.user.id === user.id) return message.reply({embeds: [EmbedBanMeUser], ephemeral: true});
            if((await message.guild.fetchOwner()).id === user.id) return message.reply({embeds: [EmbedBanOwnerError], ephemeral: true});
            if(member && !member.bannable) return message.reply({embeds: [EmbedBotErrorBan], ephemeral: true});
            if(member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply({embeds: [EmbedErrorPerm], ephemeral: true});
            // if((await message.guild.bans.fetch().get(user.id))) return message.reply({embeds: [EmbedErrorBanDejaBan], ephemeral: true});

            try {
                await user.send({embeds: [EmbedSuccessUserSend], ephemeral: true})
            } catch(err) {}
    
            await message.reply({embeds: [EmbedSuccess], ephemeral: true})
    
            await message.guild.bans.create(user.id, {reason: reason})

            
            db.query(`SELECT * FROM bans WHERE guild = ${message.guild.id} AND user = ${user.id}`, async(err, req) => {
                db.query(`INSERT INTO bans (guild, user, reason) VALUES ('${guild.id}', '${user.id}', '${reason}')`)
            }) 
            
            
            } catch (err) {
                return console.log(err)
            }
        }
    };