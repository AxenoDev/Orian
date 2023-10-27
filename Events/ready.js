const Discord = require("discord.js")
const loadDatabase = require("../Loaders/loadDatabase")
const loadSlashCommands = require("../Loaders/loadSlashCommands")
const clc = require("cli-color")
const AsciiTable = require("ascii-table")

module.exports = async bot => {

    bot.user.setStatus('online')
    const statuses = [
        () => `V2.1`,
        () => `PANEL: http://162.19.13.67/`,
        () => `${bot.guilds.cache.size} serveurs`,
        () => `${bot.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
    ]
    let i = 0
    setInterval(() => {
        bot.user.setActivity(statuses[i](), {type: Discord.ActivityType.Watching})
        i = ++i % statuses.length
    }, 5000)

    loadSlashCommands(bot)

    let table = new AsciiTable('Autres')
    table.setHeading('Type', 'Status')
    
    table.addRow('SlashCommandes', '✅')
    table.addRow('Orian', '✅')
    bot.db = await loadDatabase()
    console.log(bot.db)
    if(bot.db.connect) {
        table.addRow('DataBase', '✅')
    } else if(!bot.db.connect) {
        table.addRow('DataBase', '❌')
    }
    console.log(bot.db)


    console.log(clc.redBright(table.toString()))

    console.log(clc.green(`[ORIAN] ${bot.user.username} : En ligne sur ${bot.guilds.cache.size} serveur(s) !`))

}