const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const config = require("./config");
const loadCommands = require("./Loaders/loadCommands");
const loadEvents = require("./Loaders/loadEvents");
const loadDashboard = require("./Loaders/loadDashboard")
const loadDatabase = require("./Loaders/loadDatabase")

bot.commands = new Discord.Collection();
bot.colors = "#95A5A6";
bot.function = {
    createId: require("./Fonctions/createId"),
    generateCaptcha: require("./Fonctions/generateCaptcha")
};

loadDashboard(bot)
loadCommands(bot);
loadEvents(bot);
bot.login(config.token);




bot.on("guildCreate", guild => {
    const x = Date.now() - guild.createdTimestamp;
    const created = Math.floor(x / 86400000);
    console.log(`[SERVEUR] Ajout au serveur [${guild.name}]`)
    const Embed = new Discord.EmbedBuilder()
        .setTitle("⚙️ Arrivé sur un serveur")
        .setDescription(`> \`⚙️\` **Nom**: \`${guild.name}\`\n> \`🆔\` **Identifiant**: \`${guild.id}\`\n> \`📄\` **Description**: \`${guild.description || "Aucune"}\`\n> \`👑\` **Propriétaire**: \`${guild.ownerId}\` <@${guild.ownerId}>\n> \`👥\` **Membres**: \`${guild.memberCount}\`\n> \`🔮\` **Nombre de boost(s)**: \`${guild.premiumSubscriptionCount} (Tier ${guild.premiumTier})\`\n > \`💎\` **Partenaire**: \`${guild.partnered || "Non"}\`\n > \`💎\` **Vérifier**: \`${guild.verified || "Non"}\`\n> \`📆\` **Date de création**: <t:${Math.floor(guild.createdAt / 1000)}:F> \`(Il y a ${created} jour${created <= 1 ? "" : "s"})\` `)
        .setThumbnail(guild.iconURL({dynamic: true}) || bot.user.displayAvatarURL({dynamic: true}))
        .setColor("Green")

        bot.channels.cache.get("992374004910411826").send({embeds: [Embed]})
})
bot.on("guildDelete", guild => {
    const x = Date.now() - guild.createdTimestamp;
    const created = Math.floor(x / 86400000);
    console.log(`[SERVEUR] Départ au serveur [${guild.name}]`)
    const Embed = new Discord.EmbedBuilder()
        .setTitle("⚙️ Départ d'un serveur")
        .setDescription(`> \`⚙️\` **Nom**: \`${guild.name}\`\n> \`🆔\` **Identifiant**: \`${guild.id}\`\n> \`📄\` **Description**: \`${guild.description || "Aucune"}\`\n> \`👑\` **Propriétaire**: \`${guild.ownerId}\` <@${guild.ownerId}>\n> \`👥\` **Membres**: \`${guild.memberCount}\`\n> \`🔮\` **Nombre de boost(s)**: \`${guild.premiumSubscriptionCount} (Tier ${guild.premiumTier})\`\n > \`💎\` **Partenaire**: \`${guild.partnered || "Non"}\`\n > \`💎\` **Vérifier**: \`${guild.verified || "Non"}\`\n> \`📆\` **Date de création**: <t:${Math.floor(guild.createdAt / 1000) }:F> \`(Il y a ${created} jour${created <= 1 ? "" : "s"})\` `)
        .setThumbnail(guild.iconURL({dynamic: true}) || bot.user.displayAvatarURL({dynamic: true}))
        .setColor("Red")

        bot.channels.cache.get("992374006332260422").send({embeds: [Embed]})
})