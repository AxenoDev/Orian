const fs = require("fs")
const clc = require('cli-color')
const AsciiTable = require("ascii-table")

module.exports = async (bot) => {

    let table = new AsciiTable('Commandes')
    table.setHeading('Commandes', 'Statut')
            
        fs.readdirSync(`./Commandes/`).filter(f => f.endsWith(".js")).forEach(async file => {
            let command = require(`../Commandes/${file}`)
            if(!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'a pas de nom !`)
            bot.commands.set(command.name, command)
            try {
                table.addRow(file, '✅')
            } catch(err) {
                if(err) {
                    table.addRow(file, '❌')
                }
            }
        })
        console.log(clc.greenBright(`\n${table.toString()}`));
}