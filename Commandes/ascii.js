const Discord = require("discord.js");
const emojie = require("../emoji.json")
const figlet = require("figlet")

module.exports = {
    name: "ascii",
    description: "Permet de transformer du texte en ASCII",
    permission: "Aucune",
    dm: true,
    category: `${emojie.fun} Fun`,
    options: [
        {
            type: "string",
            name: "text",
            description: "Le texte à transformer",
            required: true,
            autocomplete: false
            
        },
        {
            type: "string",
            name: "font",
            description: "Le font du texte à transformer",
            required: true,
            autocomplete: true
        }
    ],

    async run(bot, message, args) {


        let text = args.getString("text")
        let font = args.getString("font")
        
        let fonts = [
            Basic = 'Basics',
            Standard = 'Standard'
        ]

        
        if(text === "Orian" || text === 'orian' || !text) {
            message.reply(`\`\`\`` + figlet.textSync('Orian', {
                font: 'Basic',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + `\`\`\``);
        } else {
            if(!font || font === `list`) return message.reply(`Voici les fonts: \`Basic\`, \`Standard\`, \`arrow\`,\`Big\`,\`train\`,\`sweet\`,\`soft\`,\`small\`,\`script\`,\`star wars\`,\`stampate\``)
            if(font === "Standard" || font === 'standard') {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Standard',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "arrows") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Arrows',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "Basic" || font === 'basic') {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Basic',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "Big") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Big',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "train") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Train',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "sweet") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Sweet',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "soft") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Soft',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "small") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Small',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "script") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Script',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "star wars") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Star Wars',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === "stampate") {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Stampate',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            } else if(font === 'coca') {

                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Coca',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``)

            } else {
                message.reply(`\`\`\`` + figlet.textSync(text, {
                    font: 'Standard',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 80,
                    whitespaceBreak: true
                }) + `\`\`\``);
            }
        }

    }
}