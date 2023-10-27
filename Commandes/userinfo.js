const Discord = require("discord.js");
const emojie = require("../emoji.json");


module.exports = {
  name: "userinfo",
  description: "Avoir les informations d'un membre",
  permission: "Aucune",
  dm: false,
  category: `${emojie.information} Informations`,
  options: [
    {
      type: "user",
      name: "membre",
      description: "Le membre à avoir les informations",
      required: true,
      autocomplete: true
    }
  ],

  async run(bot, message, args) {

  
    const flags = {
      STAFF: 'Emploier Disord',
      PARTNER: 'Partenaire discord',
      HYPESQUAD: '<:HypeSquadEventsBadge:1023205499275067412>',
      BUGHUNTERLEVEL1: 'Trouveur de bug (Level 1)',
      HypeSquadOnlineHouse1: '<:blurple_bravery:1023205955393044533>',
      HypeSquadOnlineHouse2: '<:HypeSquadBrillianceBadge:1023206067821346966>',
      HypeSquadOnlineHouse3: '<:BalancedHypeSquad:1023206169566773308>',
      PREMIUMEARLYSUPPORTER: 'Early Supporter',
      TEAMUSER: 'Team user',
      BUGHUNTERLEVEL2:'Trouveur de Bug (Level 2)',
      VERIFIEDBOT:'Bot Vérifier',
      EARLYVERIFIEDBOTDEVELOPER: 'Développeurs de bot vérifier',
      DISCORDCERTIFIEDMODERATOR: 'Modérateur Certifié',
    }
    let user = args.getUser("membre")
    if (!user) return message.reply("L'utilisateur demandé n'a pas été trouvé.")
    let member = message.guild.members.cache.get(user.id)
    const status = {
      online: emojie.online,
      idle: emojie.idle,
      dnd: emojie.dnd,
      offline: emojie.offline,
      streaming: emojie.stream
    }
    let userFlags = member.user.flags.toArray();
    if(member.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
      var Nitro = emojie.nitro
    } else {
      var Nitro = ''
    }
    if(member.presence?.activities === null) {
      var Game = 'Aucun'
    } else {
      var Game = !member.presence?.activities ? "Aucun" : member.presence.activities.join(' ')
    }
    let rolemap = member.roles.cache.sort((a, b) => b.position - a.position).map(r => r).join(" ");
    if (rolemap.length > 1024) rolemap = "`Je ne peux pas afficher tous les rôles, il y en a trop !`";
    if (!rolemap) rolemap = "`Cette personne n'a pas de rôle !`";
    const Badge = userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : '\`Aucun\`';
    const x = Date.now() - member.user.createdTimestamp;
    const created = Math.floor(x / 86400000);
    const a = Date.now() - member.joinedTimestamp;
    const create = Math.floor(a / 86400000);
    let embed = new Discord.EmbedBuilder()
      .setTitle(`Information de ${member.user.username}`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .addFields(
        {
          name: `${emojie.fleche} Information sur l'utilisateur`,
          value: 
            `
            > ${emojie.name} **Nom** ${emojie.arrow} \`${member.user.username}#${member.user.discriminator}\` <@${member.user.id}>
            > ${emojie.tag} **Tag** ${emojie.arrow} \`${member.user.discriminator}\`
            > ${emojie.ID} **ID** ${emojie.arrow} \`${member.user.id}\`
            > ${emojie.badge} **Badge** ${emojie.arrow} ${Badge} ${Nitro}
            > ${emojie.status} **Status** ${emojie.arrow} ${status[member.presence?.status] || emojie.offline}
            > ${emojie.game} **Status personnalisé** ${emojie.arrow} \` ${Game}\`
            > ${emojie.plateforme} **Plateforme** ${emojie.arrow}
            > ${emojie.bot} **Robot** ${emojie.arrow} ${member.user.bot ? '\`Oui\`' : '\`Non\`'}
            > ${emojie.createAccount} **Date de création du compte** ${emojie.arrow} <t:${Math.floor(member.user.createdAt / 1000) }:F> \`(Il y a ${created} jour${created <= 1 ? "" : "s"})\``.replace("Custom Status", "")
          ,
          inline: false
        },
        {
          name: `${emojie.fleche} Information de l\'utilisateur sur le serveur`,
          value: `
          > ${emojie.surname} **Surnom** ${emojie.arrow} \`${member.nickname || "Aucun"}\`
          > ${emojie.joined} **Date d'arrivé** ${emojie.arrow} <t:${Math.floor(member.joinedTimestamp / 1000) }:F> \`(Il y a ${create} jour${create <= 1 ? "" : "s"})\`
          > ${emojie.role} **Rôle(s)** ${emojie.arrow} ${rolemap}`,
          inline: false
        }
      )
       
      message.reply({ embeds: [embed] })
 
  }
}