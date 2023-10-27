const Discord = require("discord.js");
const emojie = require("../emoji.json")
const Canvas = require('discord-canvas-easy')

module.exports = {
    name: "rank",
    description: "Donne l'xp d'un membre",
    permission: "Aucune",
    dm: false,
    category: `${emojie.fun} Fun`,
    options: [
        {
            type: "user",
            name: "membre",
            description: "L'xp du membre",
            required: false,
            autocomplete: true
        }
    ],

    async run(bot, message, args, db) {
        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id} `, async(err, req) => {
            let embeds = new Discord.EmbedBuilder()
            .setTitle("Erreur")
            .setColor("Red")
            .setDescription("Les levels sont désactivés sur le serveur !")
            if(req[0].xpStatus === "OFF") return message.reply({ embeds: [embeds] });
            else {
                let user;
                if(args.getUser('membre')) {
                    user = args.getUser("membre")
                    if(!user || !message.guild.members.cache.get(user?.id) || message.guild.members.cache.get(user.id).user.bot) return message.reply('Pas de membre');
                } else {
                    user = message.user;
                }
        
                db.query(`SELECT * FROM xp WHERE guild = '${message.guild.id}' AND user = '${user.id}'`, async(err, req) => {
        
                    db.query(`SELECT * FROM xp WHERE guild = '${message.guild.id}'`, async(err, all) => {
                        if(req.length < 1) return message.reply(`Cette utilisateur n'a pas d'xp`)
        
                        await message.deferReply()
        
                        const calculXp = (xp, level) => {
                            let xptotal = 0;
                            for(let i = 0; i < level + 1; i++) xptotal += i * 1000
                            xptotal += xp;
                            return xptotal;
                        }
        
                        let leaderboard = await all.sort(async (a, b) => calculXp(parseInt(b.xp), parseInt(b.level)) - calculXp(parseInt(a.xp), parseInt(a.level)))
                        let xp = parseInt(req[0].xp)
                        let level = parseInt(req[0].level)
                        let rank = leaderboard.findIndex(r => r.user === user.id) + 1
                        let need = (level + 1) * 1000
        
                        let Card = await new Canvas.Card()
                        .setBackground('https://media-craft.fr/img/orian/Backgroundrank.png')
                        .setBot(bot)
                        .setColorFont('#000000')
                        .setRank(rank)
                        .setUser(user)
                        .setColorProgressBar('#1badbf')
                        .setGuild(message.guild)
                        .setXp(xp)
                        .setLevel(level)
                        .setXpNeed(need)
                        .toCard()
        
                        await message.followUp({files: [new Discord.AttachmentBuilder(Card.toBuffer(), {name: "rank.png"})]})
        
                    })
                })
            }
        })
        
    }
}