const Discord = require('discord.js')
const emojie = require("../emoji.json")

module.exports = {

    name: "8ball",
    description: "Pose moi une question, j'y réponderais !",
    usage: "/8ball",
    permission: "Aucune",
    category: `${emojie.fun} Fun`,
    options: [
        {
            type: "string",
            name: "question",
            description: "Quelle question veut tu posser",
            required: true,
            autocomplete: false,
        },
    ],

    async run(bot, message, args) {

        let question = args.getString("question")

        var questionArray = [
            "Oui !",
            "Non !",
            "Je suis sûr !",
            "Je ne suis pas sûr !",
            "Désoler, je ne pense pas !",
            "Probablement que non",
            "Probablement que oui",
            "Probablement"
        ];

        let ballEmbed = new Discord.EmbedBuilder() 
            .setTitle('🎱 8ball')
            .setDescription(`
            ❓ **Question :**
            > \`\`\`${question}\`\`\`
            
            📤 **Réponse :**
            > \`\`\`${questionArray[Math.floor(Math.random() * questionArray.length)]}\`\`\``)
            .setColor('#1badbf')

        await message.reply({embeds: [ballEmbed]})
    }
}