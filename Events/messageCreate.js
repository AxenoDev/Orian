const Discord = require("discord.js")

module.exports = async (bot, message) => {

    const db = bot.db;

    // ServRegister
    if(message.author.bot || message.channel.type === Discord.ChannelType.DM) return;
    db.query(`SELECT * FROM serveur WHERE guildID = '${message.guild.id}'`, async (err, req) => {
        if(req.length < 1){
            db.query(`INSERT INTO serveur (guildID, welcomeID, goodbyeID, logsID, economieStatus, economieNumber, xpStatus, xpNumber, ticketCat) VALUES ('${message.guild.id}', 'OFF', 'OFF', 'OFF', 'OFF', '1', 'OFF', '1', 'OFF')`)
            return message.reply("Attendez que le bot enregistre votre serveur !")
        }
    })
    // ServRegister

    // Mention
    if(message.mentions.has(bot.user.id)) {
        let embed = new Discord.EmbedBuilder()
            .setTitle("On m'as mentionné ?")
            .setDescription(`${message.author} merci de ne pas me mentionner !\nMon préfixe est: **Les slashcommandes ! (/help)**`)
            .setColor('Green')

        await message.reply({embeds: [embed]})
    }
    // Mention
    
    // XP
    db.query(`SELECT * FROM xp WHERE guild = ${message.guild.id} AND user = ${message.author.id}`, async(err, req) => {
        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async(ell, all) => {
            if(all[0].xpStatus === "ON") {
                if(req.length < 1) {
                    db.query(`INSERT INTO xp (guild, user, xp, level) VALUES ('${message.guild.id}', '${message.author.id}', '0', '0')`)
                } else {
                    
                    let level = parseInt(req[0].level)
                    let xp = parseInt(req[0].xp)
                    if((level + 1) * 1000 <= xp) {
                        db.query(`UPDATE xp SET xp = '${xp - (level + 1) * 1000}' WHERE guild = '${message.guildId}' AND user = '${message.author.id}'`)
                        db.query(`UPDATE xp SET level = '${level + 1}' WHERE guild = '${message.guild.id}' AND user = '${message.author.id}'`)
                        
                        await message.channel.send(`${message.author} est passé niveau ${level + 1}, félicitations !`)
                    
                    } else {
                        let xptogive = Math.floor(Math.random() * 5) + 1
                        // let xptogive = all[0].xpNumber * 5 + 1;
                        db.query(`UPDATE xp SET xp = '${xp + xptogive}' WHERE guild = '${message.guild.id}' AND user = '${message.author.id}'`)
                    }
                }
            } else if(all[0].xpStatus === "OFF") {
                return;
            }
            
        })
    })
    // XP

    // Coins
    db.query(`SELECT * FROM coins WHERE guildID = ${message.guild.id} AND userID = ${message.author.id}`, async(err, req) => {
        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async(ell, all) => {
            if(all[0].economieStatus === "ON") {
                if(req.length < 1) {
                    db.query(`INSERT INTO coins (guildID, userID, coins) VALUES ('${message.guild.id}', '${message.author.id}', '0')`)
                } else {
                    let xptogive = Math.floor(Math.random(3, 2, 1))
                    db.query(`UPDATE coins SET coins = '${parseInt(req[0].coins) + parseInt(all[0].economieNumber)}' WHERE guildID = '${message.guildId}' AND userID = '${message.author.id}'`)
                }
            } else if(all[0].economieStatus === "OFF") {
                return;
            }
        })
    })
    // Coins
   
}