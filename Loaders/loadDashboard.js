const SelectedTheme = require('dbd-soft-ui');
const config = require("../config")
const Discord = require("discord.js");
const { GuildText, GuildCategory } = Discord.ChannelType;
const mysql = require("mysql")


module.exports = async (bot) => {
  let db = mysql.createConnection({
        host: "162.19.13.67",
        user: "root",
        password: "A21@ud9R",
        database: "Orian"
    });
    (async () => {
        let DBD = require('discord-dashboard');
        await DBD.useLicense(config.dbd.dbd_license);
        DBD.Dashboard = DBD.UpdatedClass();
      
        const Dashboard = new DBD.Dashboard({
          port: 80,
          client: config.discord.client,
          redirectUri: `http://162.19.13.67/discord/callback`,
          domain: "162.19.13.67",
          ownerIDs: config.dbd.ownerIDs,
          useThemeMaintenance: true,
          useTheme404: true,
          bot: bot,
          settings: [],
          theme: SelectedTheme({
            customThemeOptions: {
              index: async ({ req, res, config }) => {
                const cards = [
                    {
                        title: "CPU",
                        icon: "single-02",
                        getValue: "Title",
                        progressBar: {
                            enabled: false,
                            getProgress: 50 // 0 - 100 (get a percentage of the progress)
                        }
                    }
                    // Include 3 more cards
                ]
    
                const graph = {
                    values: [690, 524, 345, 645, 478, 592, 468, 783, 459, 230, 621, 345],
                    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"]
                }
    
                return {
                    cards,
                    graph
                }
            },
          },
          websiteName: "Orian",
          colorScheme: "blue",
          supporteMail: "support@orian.media-craft.fr",
          icons: {
              favicon: 'https://media-craft.fr/img/orian/OrianPng.png',
              noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
              sidebar: {
                  darkUrl: 'https://media-craft.fr/img/orian/OrianP.png',
                  lightUrl: 'https://media-craft.fr/img/orian/OrianP.png',
                  hideName: true,
                  borderRadius: false,
                  alignCenter: true
              },
          },
          preloader: {
              image: "https://media-craft.fr/img/orian/OrianPng.png",
              spinner: false,
              text: "Charchement",
          },
          index: {
              card: {
                  category: "Orian",
                  title: "Assistants - The center of everything",
                  description: "Assistants Discord Bot management panel. <b><i>Feel free to use HTML</i></b>",
                  image: "https://media-craft.fr/img/orian/OrianP.png",
                  link: {
                      text: "Rejoin le discord !",
                      enabled: true,
                      url: "https://google.com"
                  }
              },
              graph: {
                  enabled: true,
                  lineGraph: false,
                  title: 'Memory Usage',
                  tag: 'Memory (MB)',
                  max: 100
              },
          },
          sweetalert: {
              errors: {},
              success: {
                  login: "Connecter avec succès !",
              }
          },
          preloader: {
              image: "https://media-craft.fr/img/orian/OrianP.png",
              spinner: true,
              text: "Chargement de la page",
          },
          admin: {
              pterodactyl: {
                  enabled: false,
                  apiKey: "apiKey",
                  panelLink: "https://panel.website.com",
                  serverUUIDs: []
              }
          },
          commands: [
            {
                category: "Fun",
                subTitle: "Fun | Commandes de \"jeu\" fait pour vous amuser !",
                aliasesDisabled: false,
                list: [
                  {
                    commandName: "8ball",
                    commandUsage: "/8ball <Question>",
                    commandDescription: "Pose moi une question, j'y réponderais !",
                    commandAlias: ""
                  },{
                    commandName: "ascii",
                    commandUsage: "/ascii <text> [Font]",
                    commandDescription: "Permet de transformer du texte en ASCII",
                    commandAlias: ""
                  },{
                    commandName: "leaderboard",
                    commandUsage: "/leaderboard",
                    commandDescription: "Donne le classement de l'expériance du serveur",
                    commandAlias: ""
                  },{
                    commandName: "rank",
                    commandUsage: "/rank [membre]",
                    commandDescription: "Donne l'xp d'un membre",
                    commandAlias: ""
                  },
                ],
            },
            {
              category: "Informations",
              subTitle: "Permet d'avoir des inforamtions",
              aliasesDisabled: false,
              list: [
                {
                  commandName: "bot",
                  commandUsage: "/bot",
                  commandDescription: " Avoir les informations de Orian",
                  commandAlias: ""
                },{
                  commandName: "help",
                  commandUsage: "/help [commande]",
                  commandDescription: "Avoir toutes les information sur les commandes du bot",
                  commandAlias: ""
                },{
                  commandName: "invite",
                  commandUsage: "/invite",
                  commandDescription: "permet d'inviter le bot sur son serveur",
                  commandAlias: ""
                },{
                  commandName: "ping",
                  commandUsage: "/ping",
                  commandDescription: "Avoir la latence du bot",
                  commandAlias: ""
                },
                {
                  commandName: "server list",
                  commandUsage: "/server-list",
                  commandDescription: "Avoir les la liste des serveurs",
                  commandAlias: ""
                },
                {
                  commandName: "server info",
                  commandUsage: "/server-info",
                  commandDescription: "Avoir les informations du serveur",
                  commandAlias: ""
                },
                {
                  commandName: "user info",
                  commandUsage: "/userinfo <membre>",
                  commandDescription: "Avoir les informations d'un membre",
                  commandAlias: ""
                }
              ],
            },{
                category: "Modérations",
                subTitle: "Permet de faire de la modération sur le serveur",
                aliasesDisabled: false,
                list: [
                {
                    commandName: "add role masif",
                    commandUsage: "/add-role-masif <role>",
                    commandDescription: "Ajouter un role à tous les personne du serveur",
                    commandAlias: ""
                },{
                    commandName: "add role",
                    commandUsage: "/add-role <membre> <role> ",
                    commandDescription: "Ajouter un role à un membre",
                    commandAlias: ""
                },{
                    commandName: "ban",
                    commandUsage: "/ban <membre> [raison]",
                    commandDescription: "Ban un membre",
                    commandAlias: ""
                },{
                    commandName: "clear",
                    commandUsage: "/clear <nombre de message> [salon]",
                    commandDescription: "Clear des messages d'un salon",
                    commandAlias: ""
                },
                {
                    commandName: "kick",
                    commandUsage: "/kick <membre> [raison]",
                    commandDescription: "kick un membre",
                    commandAlias: ""
                },
                {
                    commandName: "mute",
                    commandUsage: "/mute <membre> [raison]",
                    commandDescription: "Permet de mute un membre",
                    commandAlias: ""
                },
                {
                    commandName: "unban",
                    commandUsage: "/unban <membre>",
                    commandDescription: "Permet de unmute un membre",
                    commandAlias: ""
                },
                {
                    commandName: "unmute",
                    commandUsage: "/unmute <membre>",
                    commandDescription: "Permet de unmute un membre",
                    commandAlias: ""
                },
                {
                    commandName: "unwarn",
                    commandUsage: "/unwarn <membre>",
                    commandDescription: "Supprime le warn le plus récents.",
                    commandAlias: ""
                }
                ],
                },{
                category: "Utiles",
                subTitle: "Autre commande",
                aliasesDisabled: false,
                list: [
                    {
                    commandName: "report bug",
                    commandUsage: "/report",
                    commandDescription: "Permet de signaler un bug",
                    commandAlias: ""
                    }
                ],
                },{
                    category: "Economie",
                    subTitle: "Permet d'avoir une économie sur le serveur",
                    aliasesDisabled: false,
                    list: [
                    {
                        commandName: "add coins",
                        commandUsage: "/add-coins",
                        commandDescription: "Ajoute de l'argent à un membre du serveur",
                        commandAlias: ""
                    },
                    {
                        commandName: "money",
                        commandUsage: "/money",
                        commandDescription: "Permet d'afficher la solde d'une personne",
                        commandAlias: ""
                    },
                    {
                        commandName: "remove coins",
                        commandUsage: "/remove-coins",
                        commandDescription: "Retire de l'argent à un membre du serveur",
                        commandAlias: ""
                    },
                    {
                        commandName: "set coins",
                        commandUsage: "/set-coins",
                        commandDescription: " Permet de m'être de l'argent d'un membre du serveur à un nombre défini",
                        commandAlias: ""
                    }
                    ],
                },{
                    category: "Système",
                    subTitle: "Parametrer le bot",
                    aliasesDisabled: false,
                    list: [
                        {
                        commandName: "panel",
                        commandUsage: "/panel",
                        commandDescription: "Permet d'avoir le lien dui panel pour le serveur",
                        commandAlias: ""
                        }
                    ],
                },
            ],
          }),
          settings : [
            {
                categoryId: "bienvenue",
                  categoryName: "Bienvenue",
                  categoryImageURL: 'https://media-craft.fr/app/webroot/img/orian/icon/plane-arrival-solid.svg',
                  categoryDescription: "Merci, de bien lire tous les chants, avant de commancer.",
                  toggleable: true,
                  getActualSet: async ({ guild }) => {
                    const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                  
                          if (req[0].welcomeID === "ON") {
                            resolve(true);
                          } else if (req[0].welcomeID !== "ON" && req[0].welcomeID !== "OFF") {
                            resolve(true);
                          } else if(req[0].welcomeID === "OFF") {
                            resolve(false);
                          }
                        })
                      })
                      
                      return await data;
                  },
                  setNew: async ({ guild, newData }) => {
                    if(newData === true) {
                        db.query(`UPDATE serveur SET welcomeID = 'ON' WHERE guildID = ${guild.id}`)
                      } else if(newData === false) {
                        db.query(`UPDATE serveur SET welcomeID = 'OFF' WHERE guildID = ${guild.id}`)
                      }
                  },
                /* End of magical code! */
    
                categoryOptionsList: [
                    {
                      optionId: "wlswitch",
                      optionName: "Activer ou Désactiver l'option bienvenue",
                      optionDescription: "Si vous activer l'option, veuillez mettre un salon.",
                      optionType: DBD.formTypes.switch(false),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                    
                            if (req[0].welcomeID === "ON") {
                              resolve(true);
                            } else if (req[0].welcomeID !== "ON" && req[0].welcomeID !== "OFF") {
                              resolve(true);
                            } else if(req[0].welcomeID === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                          if(newData === true) {
                            db.query(`UPDATE serveur SET welcomeID = 'ON' WHERE guildID = ${guild.id}`)
                          } else {
                            db.query(`UPDATE serveur SET welcomeID = 'OFF' WHERE guildID = ${guild.id}`)
                          }
                        // End 1
                      } 
                    },
                    {
                      
                      optionId: "welchannel",
                      optionName: "Salon de bienvenue",
                      optionDescription: "Configuration du channel de bienvenue",
                      optionType: DBD.formTypes.channelsSelect(
                        false,
                        (channelTypes = [GuildText])
                      ),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                            if (err) {
                              resolve(false);
                            }
                        
                            if (req[0].welcomeID === "ON") {
                              resolve(false);
                            } else if (req[0].welcomeID !== "ON" && req[0].welcomeID !== "OFF") {
                              resolve(req[0].welcomeID);
                            } else if(req[0].welcomeID === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                        if(newData === "") return null;
                        else{
                          db.query(`UPDATE serveur SET welcomeID = '${newData}' WHERE guildID = ${guild.id}`)
                        }
                        
                        // End 1
                      } 
                    }
                  ],
            },
            {
                categoryId: "goodbye",
                  categoryName: "Au revoir",
                  categoryImageURL: 'https://media-craft.fr/app/webroot/img/orian/icon/plane-departure-solid.svg',
                  categoryDescription: "Merci, de bien lire tous les chants, avant de commancer.",
                  toggleable: true,
                  getActualSet: async ({ guild }) => {
                    const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                  
                          if (req[0].goodbyeID === "ON") {
                            resolve(true);
                          } else if (req[0].goodbyeID !== "ON" && req[0].goodbyeID !== "OFF") {
                            resolve(true);
                          } else if(req[0].goodbyeID === "OFF") {
                            resolve(false);
                          }
                        })
                      })
                      
                      return await data;
                  },
                  setNew: async ({ guild, newData }) => {
                    if(newData === true) {
                        db.query(`UPDATE serveur SET goodbyeID = 'ON' WHERE guildID = ${guild.id}`)
                      } else if(newData === false) {
                        db.query(`UPDATE serveur SET goodbyeID = 'OFF' WHERE guildID = ${guild.id}`)
                      }
                  },
                /* End of magical code! */
    
                categoryOptionsList: [
                    {
                      optionId: "glswitch",
                      optionName: "Activer ou Désactiver l'option d'au revoir",
                      optionDescription: "Si vous activer l'option, veuillez mettre un salon.",
                      optionType: DBD.formTypes.switch(false),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                    
                            if (req[0].goodbyeID === "ON") {
                              resolve(true);
                            } else if (req[0].goodbyeID !== "ON" && req[0].goodbyeID !== "OFF") {
                              resolve(true);
                            } else if(req[0].goodbyeID === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                          if(newData === true) {
                            db.query(`UPDATE serveur SET goodbyeID = 'ON' WHERE guildID = ${guild.id}`)
                          } else {
                            db.query(`UPDATE serveur SET goodbyeID = 'OFF' WHERE guildID = ${guild.id}`)
                          }
                        // End 1
                      } 
                    },
                    {
                      optionId: "goodchannel",
                      optionName: "Salon d'au revoir",
                      optionDescription: "Configuration du channel d'au revoir",
                      optionType: DBD.formTypes.channelsSelect(
                        false,
                        (channelTypes = [GuildText])
                      ),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                            if (err) {
                              resolve(false);
                            }
                        
                            if (req[0].goodbyeID === "ON") {
                              resolve(false);
                            } else if (req[0].goodbyeID !== "ON" && req[0].goodbyeID !== "OFF") {
                              resolve(req[0].goodbyeID);
                            } else if(req[0].goodbyeID === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                        if(newData === "") return null;
                        else{
                          db.query(`UPDATE serveur SET goodbyeID = '${newData}' WHERE guildID = ${guild.id}`)
                        }
                        
                        // End 1
                      } 
                    }
                  ],
            },
            {
                categoryId: "logs",
                  categoryName: "Logs",
                  categoryImageURL: 'https://media-craft.fr/app/webroot/img/orian/icon/terminal-solid.svg',
                  categoryDescription: "Merci, de bien lire tous les chants, avant de commancer.",
                  toggleable: true,
                  getActualSet: async ({ guild }) => {
                    const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                  
                          if (req[0].logsID === "ON") {
                            resolve(true);
                          } else if (req[0].logsID !== "ON" && req[0].logsID !== "OFF") {
                            resolve(true);
                          } else if(req[0].logsID === "OFF") {
                            resolve(false);
                          }
                        })
                      })
                      
                      return await data;
                  },
                  setNew: async ({ guild, newData }) => {
                    if(newData === true) {
                        db.query(`UPDATE serveur SET logsID = 'ON' WHERE guildID = ${guild.id}`)
                      } else if(newData === false) {
                        db.query(`UPDATE serveur SET logsID = 'OFF' WHERE guildID = ${guild.id}`)
                      }
                  },
                /* End of magical code! */
    
                categoryOptionsList: [
                    {
                      optionId: "logsswitch",
                      optionName: "Activer ou Désactiver l'option des logs",
                      optionDescription: "Si vous activer l'option, veuillez mettre un salon.",
                      optionType: DBD.formTypes.switch(false),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                    
                            if (req[0].logsID === "ON") {
                              resolve(true);
                            } else if (req[0].logsID !== "ON" && req[0].logsID !== "OFF") {
                              resolve(true);
                            } else if(req[0].logsID === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                          if(newData === true) {
                            db.query(`UPDATE serveur SET logsID = 'ON' WHERE guildID = ${guild.id}`)
                          } else {
                            db.query(`UPDATE serveur SET logsID = 'OFF' WHERE guildID = ${guild.id}`)
                          }
                        // End 1
                      } 
                    },
                    {
                      optionId: "logschannel",
                      optionName: "Salon des logs",
                      optionDescription: "Configuration du channel des logs",
                      optionType: DBD.formTypes.channelsSelect(
                        false,
                        (channelTypes = [GuildText])
                      ),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                            if (err) {
                              resolve(false);
                            }
                        
                            if (req[0].logsID === "ON") {
                              resolve(false);
                            } else if (req[0].logsID !== "ON" && req[0].logsID !== "OFF") {
                              resolve(req[0].logsID);
                            } else if(req[0].logsID === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                        if(newData === "") return null;
                        else{
                          db.query(`UPDATE serveur SET logsID = '${newData}' WHERE guildID = ${guild.id}`)
                        }
                        
                        // End 1
                      } 
                    }
                  ],
            },
            {
                categoryId: "eco",
                  categoryName: "Economie",
                  categoryImageURL: 'https://media-craft.fr/app/webroot/img/orian/icon/money-bill-solid.svg',
                  categoryDescription: "Merci, de bien lire tous les chants, avant de commancer.",
                  toggleable: true,
                  getActualSet: async ({ guild }) => {
                    const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                  
                          if (req[0].economieStatus === "ON") {
                            resolve(true);
                          } else if (req[0].economieStatus !== "ON" && req[0].economieStatus !== "OFF") {
                            resolve(true);
                          } else if(req[0].economieStatus === "OFF") {
                            resolve(false);
                          }
                        })
                      })
                      
                      return await data;
                  },
                  setNew: async ({ guild, newData }) => {
                    if(newData === true) {
                        db.query(`UPDATE serveur SET economieStatus = 'ON' WHERE guildID = ${guild.id}`)
                      } else if(newData === false) {
                        db.query(`UPDATE serveur SET economieStatus = 'OFF' WHERE guildID = ${guild.id}`)
                      }
                  },
                /* End of magical code! */
    
                categoryOptionsList: [
                    {
                      optionId: "ecoswitch",
                      optionName: "Activer ou Désactiver l'économie",
                      optionDescription: "Activer ou Désactiver l'économie du serveur",
                      optionType: DBD.formTypes.switch(false),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                    
                            if (req[0].economieStatus === "ON") {
                              resolve(true);
                            } else if (req[0].economieStatus !== "ON" && req[0].economieStatus !== "OFF") {
                              resolve(true);
                            } else if(req[0].economieStatus === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                          if(newData === true) {
                            db.query(`UPDATE serveur SET economieStatus = 'ON' WHERE guildID = ${guild.id}`)
                          } else {
                            db.query(`UPDATE serveur SET economieStatus = 'OFF' WHERE guildID = ${guild.id}`)
                          }
                        // End 1
                      } 
                    }
                  ],
            },
            {
                categoryId: "level",
                  categoryName: "Niveau",
                  categoryImageURL: 'https://media-craft.fr/app/webroot/img/orian/icon/trophy-solid.svg',
                  categoryDescription: "Merci, de bien lire tous les chants, avant de commancer.",
                  toggleable: true,
                  getActualSet: async ({ guild }) => {
                    const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                  
                          if (req[0].xpStatus === "ON") {
                            resolve(true);
                          } else if (req[0].xpStatus !== "ON" && req[0].xpStatus !== "OFF") {
                            resolve(true);
                          } else if(req[0].xpStatus === "OFF") {
                            resolve(false);
                          }
                        })
                      })
                      
                      return await data;
                  },
                  setNew: async ({ guild, newData }) => {
                    if(newData === true) {
                        db.query(`UPDATE serveur SET xpStatus = 'ON' WHERE guildID = ${guild.id}`)
                      } else if(newData === false) {
                        db.query(`UPDATE serveur SET xpStatus = 'OFF' WHERE guildID = ${guild.id}`)
                      }
                  },
                /* End of magical code! */
    
                categoryOptionsList: [
                    {
                      optionId: "levelswitch",
                      optionName: "Activer ou Désactiver les niveaux",
                      optionDescription: "Activer ou Désactiver le système de niveau du serveur",
                      optionType: DBD.formTypes.switch(false),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                    
                            if (req[0].xpStatus === "ON") {
                              resolve(true);
                            } else if (req[0].xpStatus !== "ON" && req[0].xpStatus !== "OFF") {
                              resolve(true);
                            } else if(req[0].xpStatus === "OFF") {
                              resolve(false);
                            }
                          })
                        })
                        
                        return await data;
                        
                        // End 1
                      },
                      setNew: async ({guild, newData}) => {
                        
                        // 1
                          if(newData === true) {
                            db.query(`UPDATE serveur SET xpStatus = 'ON' WHERE guildID = ${guild.id}`)
                          } else {
                            db.query(`UPDATE serveur SET xpStatus = 'OFF' WHERE guildID = ${guild.id}`)
                          }
                        // End 1
                      } 
                    }
                  ],
            },
            {
                categoryId: "ticket",
                  categoryName: "Ticket",
                  categoryImageURL: 'https://media-craft.fr/app/webroot/img/orian/icon/ticket-solid.svg',
                  categoryDescription: "Merci, de bien lire tous les chants, avant de commancer.",
                  toggleable: true,
                  getActualSet: async ({ guild }) => {
                    const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                  
                          if (req[0].ticketCat === "ON") {
                            resolve(true);
                          } else if (req[0].ticketCat !== "ON" && req[0].ticketCat !== "OFF") {
                            resolve(true);
                          } else if(req[0].ticketCat === "OFF") {
                            resolve(false);
                          }
                        })
                      })
                      
                      return await data;
                  },
                  setNew: async ({ guild, newData }) => {
                    if(newData === true) {
                        db.query(`UPDATE serveur SET ticketCat = 'ON' WHERE guildID = ${guild.id}`)
                      } else if(newData === false) {
                        db.query(`UPDATE serveur SET ticketCat = 'OFF' WHERE guildID = ${guild.id}`)
                      }
                  },
                /* End of magical code! */
    
                categoryOptionsList: [
                    {
                        optionId: "ticketswitch",
                        optionName: "Activer ou Désactiver les tickets",
                        optionDescription: "Activer ou Désactiver le système de ticket du serveur",
                        optionType: DBD.formTypes.switch(false),
                        getActualSet: async ({guild}) => {
                          // 1
                          const data = new Promise((resolve, reject) => {
                            db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                      
                              if (req[0].ticketCat === "ON") {
                                resolve(true);
                              } else if (req[0].ticketCat !== "ON" && req[0].ticketCat !== "OFF") {
                                resolve(true);
                              } else if(req[0].ticketCat === "OFF") {
                                resolve(false);
                              }
                            })
                          })
                          
                          return await data;
                          
                          // End 1
                        },
                        setNew: async ({guild, newData}) => {
                          
                          // 1
                            if(newData === true) {
                              db.query(`UPDATE serveur SET ticketCat = 'ON' WHERE guildID = ${guild.id}`)
                            } else {
                              db.query(`UPDATE serveur SET ticketCat = 'OFF' WHERE guildID = ${guild.id}`)
                            }
                          // End 1
                        } 
                      },
                      {
                        optionId: "ticketsg",
                        optionName: "Selections de la catégorie des tickets",
                        optionDescription: "Selectionner une catégorie ou les tickets seront créer",
                        optionType: DBD.formTypes.channelsSelect(
                            false,
                            (channelTypes = [GuildCategory])
                        ),
                        getActualSet: async ({guild}) => {
                          // 1
                          const data = new Promise((resolve, reject) => {
                            db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                                                      
                                if (req[0].ticketCat === "ON") {
                                    resolve(false);
                                } else if (req[0].ticketCat !== "ON" && req[0].ticketCat !== "OFF") {
                                    resolve(req[0].ticketCat);
                                } else if(req[0].ticketCat === "OFF") {
                                    resolve(false);
                                }
                            })
                          })
                          
                          return await data;
                          
                          // End 1
                        },
                        setNew: async ({guild, newData}) => {
                          
                          // 1
                            if(newData === "") return null;
                            else{
                                db.query(`UPDATE serveur SET ticketCat = '${newData}' WHERE guildID = ${guild.id}`)
                            }
                          // End 1
                        } 
                      }
                  ],
            },
        ]
      });
      Dashboard.init();
    })();
}