const Canvas = require("discord-canvas-easy")
const Discord = require("discord.js")
const emojie = require("../emoji.json")

module.exports = {

    name: "leaderboard",
    description: "Donne le classement de l'expériance du serveur",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: `${emojie.fun} Fun`,

    async run(bot, message, args, db) {
        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id} `, async(err, req) => {
            let embeds = new Discord.EmbedBuilder()
            .setTitle("Erreur")
            .setColor("Red")
            .setDescription("Les levels sont désactivés sur le serveur !")
            if(req[0].xpStatus === "OFF") return message.reply({ embeds: [embeds] });
            else {
                db.query(`SELECT * FROM xp WHERE guild = '${message.guildId}'`, async(err,req) => {
                    if(req.length < 1) return message.reply("Personne n'a d'xp")
        
                    await message.deferReply()
        
                    // const calculXp = (xp, level) => {
                    //     let xptotal = 0;
                    //     for(let i; i < level + 1; i++) xptotal += i * 1000
                    //     xptotal += xp;
                    //     return xptotal;
                    // }
                    const calculXp = (xp, level) => {
                        let xptotal = 0;
                        for(let i = 0; i < level + 1; i++) xptotal += i * 1000
                        xptotal += xp;
                        return xptotal;
                    }
        
                    let leaderboard = await req.sort((a, b) => calculXp(parseInt(b.xp), parseInt(b.level)) - calculXp(parseInt(a.xp), parseInt(a.level)))
        
                    let Leaderboard = await new Canvas.Leaderboard()
                    .setBot(bot)
                    .setGuild(message.guild)
                    .setBackground("https://media-craft.fr/img/orian/BackgroundCanvasLeaderboard.png")
                    .setColorFont("#ffffff")
                    
                    for(let i = 0; i < (req.length > 10 ? 10 : req.length); i++) {
                        
                        await Leaderboard.addUser(await bot.users.fetch(leaderboard[i].user), parseInt(leaderboard[i].level), parseInt(leaderboard[i].xp), (parseInt(leaderboard[i].level) + 1) * 1000)
                    }
        
                    const Image = await Leaderboard.toLeaderboard()
        
                    await message.followUp({files: [new Discord.AttachmentBuilder(Image.toBuffer(), {name: "leaderboard.png"})]})
                })
            }
        })
        

    }
}