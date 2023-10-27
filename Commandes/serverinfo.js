const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "serverinfo",
    description: "Avoir les informations du serveur",
    permission: "Aucune",
    dm: false,
    category: `${emojie.information} Informations`,

    async run(bot, message, args) {

        const serv = message.guild
        const x = Date.now() - serv.createdTimestamp;
        const created = Math.floor(x / 86400000);

        const members = serv.members.cache;
        const stream = members.filter(m => m.presence?.status === 'streaming').size;
        const dnd = members.filter(m => m.presence?.status === 'dnd').size;
        const idle = members.filter(m => m.presence?.status === 'idle').size;
        const online = members.filter(m => m.presence?.status === 'online').size;
        const offline = members.filter(m => m.presence?.status === 'offline').size + members.filter(m => m.presence?.status === undefined).size;
        const categories = serv.channels.cache.filter(c => c.type === Discord.ChannelType.GuildCategory).size
        const salons = serv.channels.cache.filter(c => c.type === Discord.ChannelType.GuildText).size
        const annonce = serv.channels.cache.filter(c => c.type === Discord.ChannelType.GuildAnnouncement).size
        const forum = serv.channels.cache.filter(c => c.type === Discord.ChannelType.GuildForum).size
        const voice = serv.channels.cache.filter(c => c.type === Discord.ChannelType.GuildVoice).size
        const stage = serv.channels.cache.filter(c => c.type === Discord.ChannelType.GuildStageVoice).size
        const totales = [salons + annonce + forum + voice + stage];
        const verificationLevel = serv.verificationLevel === 0 ? "Aucune" : serv.verificationLevel === 1 ? "Faible" : serv.verificationLevel === 2 ? "Moyen" : serv.verificationLevel === 3 ? "Fortes" : serv.verificationLevel === 4 ? "Maximums" : serv.verificationLevel
       

        let embed = new Discord.EmbedBuilder()
        .setTitle(`${message.guild.name} - Informations`)
        .setColor("Blue")
        .setThumbnail(serv.iconURL({ display: true }))
        .setFields(
            { name: `${emojie.fleche} Informations sur le serveur`, value: `> ${emojie.discord} **Nom** ➔ \`${serv.name}\`\n> ${emojie.ID} **ID** ➔ \`${serv.id}\`\n> ${emojie.owner} **Propriétaire** ➔ \`${((await bot.users.fetch((await serv.fetchOwner()).id))).tag}\` ${(await serv.fetchOwner())} \n> ${emojie.description} **Description** ➔ \`${serv.description ? serv.description : "Aucune"}\`\n> ${emojie.boost} **Boost** ➔ \`${serv.premiumSubscriptionCount}\` \`(Tier ${serv.premiumTier})\`\n> ${emojie.date} **Date de création** ➔ <t:${Math.floor(serv.createdAt / 1000)}:F> \`(Il y a ${created} jour${created <= 1 ? "" : "s"})\`\n> ${emojie.protection} **Protection** ${emojie.arrow} \`${verificationLevel}\`` },
            { name: `${emojie.fleche} Informations sur les salons spéciaux`, value: `> ${emojie.rules} **Règlement** ➔ ${serv.rulesChannel ? serv.rulesChannel : "\`Aucun\`"}\n> ${emojie.afk} **AFK** ➔ ${serv.afkChannel ? serv.afkChannel : "\`Aucun\`"}` },
            { name: `${emojie.fleche} Informations sur les membres`, value: `> ${emojie.rules} **Robots** ➔ \`${serv.members.cache.filter(m => m.user.bot).size}\`\n> ${emojie.membre} **Totales de Membres** ➔ \`${serv.memberCount}/${serv.maximumMembers}\`\n> ${emojie.online} **En Ligne** ➔ \`${online}\`\n> ${emojie.stream} **En Stream** ➔ \`${stream}\`\n> ${emojie.idle} **Inactif** ➔ \`${idle}\`\n> ${emojie.dnd} **Ne pas déranger** ➔ \`${dnd}\`\n> ${emojie.offline} **Hors-Ligne** ➔ \`${offline}\`` },
            { name: `${emojie.fleche} Informations sur les statistique`, value: `> ${emojie.categories} **Catégories** ➔ \`${categories}\`\n> ${emojie.channel} **Salons** ➔ \`${salons}\`\n> ${emojie.stage} **Stage** ➔ \`${stage}\`\n> ${emojie.forum} **Forum** ➔ \`${forum}\`\n> ${emojie.annonce} **Annonce** ➔ \`${annonce}\`\n> ${emojie.voice} **Vocal** ➔ \`${voice}\`\n> ${emojie.channel} **Totales** ➔ \`${totales}\`\n> ${emojie.role} **Roles** ➔ \`${serv.roles.cache.size}\`\n> ${emojie.emojie} **Emojis** ➔ \`${serv.emojis.cache.size}\`` },
            )
        .setImage(serv.bannerURL({ dynamic: true, size: 4096 }))       
        .setTimestamp()
        .setFooter({text: "Orian | Ping Commandes"})

        await message.reply({embeds: [embed]})

    }
}