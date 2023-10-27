const Discord = require("discord.js")
const Canvas = require("discord-canvas-easy");

module.exports = async (bot, member) => {
    const db = bot.db;
    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {       

        if(req[0].welcomeID === 'OFF'){
            return;
        }
        if(req[0].welcomeID === 'ON') {
            return;
        }
        if(req[0].welcomeID !== 'ON' || req[0].welcomeID !== 'OFF') {
            let channel = req[0].welcomeID
            const Welcome = await new Canvas.Home()
            .setBackground("https://media-craft.fr/img/orian/CanvasBackgroundHome.png")
            .setGuild(member.guild)
            .setUser(member.user)
            .setColorFont("#ffffff")
            .setText(`Bienvenue sur ${member.guild.name}`)
            .toHome()

            bot.channels.cache.get(channel).send({files: [new Discord.AttachmentBuilder(Welcome.toBuffer(), 'welcome.png')]})
        }
    })
}