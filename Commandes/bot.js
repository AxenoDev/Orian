const Discord = require("discord.js");
const emojie = require("../emoji.json")
const package = require("../package.json")
const packagelock = require("../package-lock.json");
const os = require("os");

module.exports = {
    name: "bot",
    description: "Avoir les informations de Orian",
    permission: "Aucune",
    dm: false,
    category: `${emojie.information} Informations`,

    async run(bot, message, args) {

        const serv = message.guild
        const x = Date.now() - serv.createdTimestamp;
        const created = Math.floor(x / 86400000);

        const categories = bot.channels.cache.filter(c => c.type === Discord.ChannelType.GuildCategory).size
        

        let embed = new Discord.EmbedBuilder()
        .setTitle(`${message.guild.name} - Informations`)
        .setColor("Blue")
        .setThumbnail(serv.iconURL({ display: true }))
        .setFields(
            { 
                name: `${emojie.fleche} Informations sur le bot`, 
                value: `
                > ${emojie.owner} **Propriétaire** ➔ \`Axeno#0017\`
                > ${emojie.dev} **Développeur(s)** ➔ \`Axeno#0017\`
                > ${emojie.name} **Nom** ➔ \`${bot.user.username}\`
                > ${emojie.tag} **Tag** ➔ \`${bot.user.discriminator}\`
                > ${emojie.ID} **ID** ➔ \`${bot.user.id}\`
                > ${emojie.dbb} **Base de données** ➔ \`MySQL\`
                > ${emojie.djs} **Version de Discord.js** ➔ \`${package.dependencies["discord.js"]}\`
                > ${emojie.nodejs} **Version de node.js** ➔ \`${process.version}\`
                > ${emojie.online} **Latence du bot** ➔ \`${bot.ws.ping}ms\``  
            },
            { 
                name: `${emojie.fleche} Informations sur les statistiques`, 
                value: `
                > ${emojie.rules} **Serveurs** ➔ \`${bot.guilds.cache.size}\`
                > ${emojie.membre} **Utilisateurs** ➔ \`${bot.users.cache.size}\`
                > ${emojie.slashcmd} **Commandes** ➔ \`${bot.commands.size + 1}\`
                > ${emojie.slashcmd} **Slash Commandes** ➔ \`Oui\`
                > ${emojie.categories} **Categories** ➔ \`${categories}\`
                > ${emojie.channel} **Salons** ➔ \`${bot.channels.cache.size}\`
                > ${emojie.emojie} **Emojis** ➔ \`${bot.emojis.cache.size}\`` 
            },
            { 
                name: `${emojie.fleche} Informations sur les système`, 
                value: `
                > ${emojie.hosting} **Hébergeur** ➔ \`H-Code.fr\`
                > ${emojie.os} **Os** ➔ \`Linux / H-Panel\`
                > ${emojie.processor} **Processeur** ➔ \`${os.cpus()[0].model}\`
                > ${emojie.coeur} **Nombres de coeur** ➔ \`${os.cpus().length}\`` 
            },
        )
        .setDescription("[Invite moi ici](https://discord.com/api/oauth2/authorize?client_id=914187703220850749&permissions=8&scope=bot%20applications.commands)")
        .setImage(serv.bannerURL({ dynamic: true, size: 4096 }))       
        .setTimestamp()
        .setFooter({text: "Orian | Ping Commandes"})

        await message.reply({embeds: [embed]})

    }
}