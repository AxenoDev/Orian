const Discord = require("discord.js")
const Canvas = require("discord-canvas-easy")

module.exports = async (bot, member) => {
    const db = bot.db;
    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {
        if(req[0].goodbyeID === 'OFF'){
            return;
        }
        if(req[0].goodbyeID === 'ON') {
            return;
        }
        if(req[0].goodbyeID !== 'ON' || req[0].goodbyeID !== 'OFF') {
            let channel = req[0].goodbyeID
            const Welcome = await new Canvas.Home()
            .setBackground("https://media-craft.fr/img/orian/CanvasBackgroundHome.png")
            .setGuild(member.guild)
            .setUser(member.user)
            .setColorFont("#ffffff")
            .setText(`Aurevoire {user.tag}`)
            .toHome()

            bot.channels.cache.get(channel).send({files: [new Discord.AttachmentBuilder(Welcome.toBuffer(), 'goodbye.png')]})
        }
    })
}