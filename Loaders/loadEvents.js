const { bold } = require("discord.js")
const fs = require("fs")

module.exports = async bot => {

    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {
        let event = require(`../Events/${file}`)
        bot.on(file.split(".js").join(""), event.bind(null, bot))
        console.log(`[EVENTS] Event ${file} chargée avec succès !`)
    })

    fs.readdirSync("./Events/logs").filter(f => f.endsWith(".js")).forEach(async file => {
        let event = require(`../Events/logs/${file}`)
        bot.on(file.split(".js").join(""), event.bind(null, bot))
        console.log(`[LOGS-EVENTS] Event logs-${file} chargée avec succès !`)
    })

}