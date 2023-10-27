const Discord = require("discord.js");
const emojie = require("../emoji.json")

module.exports = {
    name: "help",
    description: "Avoir toutes les information sur les commandes du bot",
    permission: "Aucune",
    dm: true,
    category: `${emojie.information} Informations`,
    options: [
        {
            type: "string",
            name: "commande",
            description: "La commande à afficher",
            required: false,
            autocomplete: true
        }
    ],

    async run(bot, message, args) {

        let command;
        if(args.getString("commande")){
            command = bot.commands.get(args.getString("commande"));
            if(!command)return message.reply("Pas de commande !")
        }
            if(!command) {
                let categories = [];
                bot.commands.forEach(command => {
                    if(!categories.includes(command.category)) categories.push(command.category)
                })
            

            let Embed = new Discord.EmbedBuilder()
            .setTitle(`Commandes du bot`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Commandes disponible: \`${bot.commands.size}\`\nCatégories disponibles: \`${categories.length}\``)
            .setTimestamp()
            .setFooter({text: "Orian"})

            await categories.sort().forEach(async cat => {
                let commands = bot.commands.filter(cmd => cmd.category === cat)
                //Embed.addFields({name: `${cat}`, value: "Toutes les commandes disponibles.", ("—————————————————————————— \`\n\n" + commands.map(command => command.name).join("\`.\n \`") + "\`\n\n———————————————————————————"))});
                Embed.addFields({name: `‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\n${cat}\n`, value: `${commands.map(cmd => `> \`${cmd.name}\` ➔ ${cmd.description}`).join("\n")}`})
            });

            await message.reply({embeds: [Embed]})
        }else{
            let Embed = new Discord.EmbedBuilder()
            .setTitle(`Commandes ${command.name}`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Nom: \`${command.name}\`\nDescription: \`${command.description}\`\nPermission requise: \`${typeof command.permission !== "bigin" ? command.permission : new Discord.PermissionsBitField(command.permission).toArray(false)}\`\nCommande en DM: \`${command.dm ? "Oui" : "Non"}\`\nCatégorie: \`${command.category}\``)
            .setTimestamp()
            .setFooter({text: "Orian"})

            await message.reply({embeds: [Embed]})
        }
    }
}