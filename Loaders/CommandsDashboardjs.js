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



Info:
information: {
                  createdBy: "Orian",
                  websiteTitle: "Orian",
                  websiteName: "Orian",
                  websiteUrl: "http://orian.h-code.fr",
                  dashboardUrl: `http://localhost${config.port !== 80 ? `:${config.port}` : ''}/`,
                  supporteMail: "orian@h-code.fr",
                  supportServer: "https://discord.gg/pY2TNb5xFf",
                  imageFavicon: "https://h-code.fr/images/Orian.png",
                  iconURL: "https://h-code.fr/images/Orian.png",
                  pageBackGround: "linear-gradient(#1cadff, #155bff)",
                  loggedIn: "Connecter avec succès.",
                  mainColor: "#2CA8FF",
                  subColor: "#ebdbdb",
              },

Settings:
settings: [
              // Bienvenue
              {
                  categoryId: "welcome_options",
                  categoryName: "Bienvenue",
                  categoryDescription: "Les options pour bienvenue",
                  categoryOptionsList: [
                    {
                      optionType: "spacer",
                      title: "Configuration de l'option bienvenue",
                      description:
                      "Merci, de bien lire tous les chants, avant de commancer.",
                    },
                    {
                      optionId: "wlswitch",
                      optionName: "Activer ou Désactiver l'option bienvenue",
                      optionDescription: "Si vous activer l'option, veuillez mettre un salon.",
                      optionType: DBD.formTypes.switch(false),
                      getActualSet: async ({guild}) => {
                        // 1
                        const data = new Promise((resolve, reject) => {
                          db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                            if (err) {
                              resolve(false);
                            }
                        
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
                  
              },// Fin de Bvn
              // Au revoir
              {
                categoryId: "bye_opt",
                categoryName: "Au revoir",
                categoryDescription: "Les options d'Au revoir",
                categoryOptionsList: [
                  {
                    optionType: "spacer",
                    title: "Configuration d'au revoir",
                    description:
                      "Merci, de bien lire tous les chants, avant de commancer.",
                  },
                  {
                    optionId: "bye_on-off",
                    optionName: "Activer ou Désactiver l'option au revoir",
                    optionDescription: "Si vous activer l'option, veuillez mettre un salon.",
                    optionType: DBD.formTypes.switch(false),
                    getActualSet: async ({guild}) => {
                      // 1
                      const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                          if (err) {
                            resolve(false);
                          }
                      
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
                        } else if(newData === false) {
                          db.query(`UPDATE serveur SET goodbyeID = 'OFF' WHERE guildID = ${guild.id}`)
                        }
                      // End 1
                    } 
                  },
                  {
                    
                    optionId: "bye-channel",
                    optionName: "Salon d'au revoir",
                    optionDescription: "Ici, vous devez définir le salon d'au revoir.",
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
                            resolve(true);
                          }
                        })
                      })
                      
                      return await data;
                      
                      // End 1
                    },
                    setNew: async ({guild, newData}) => {
                      
                      // 1
                      db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                        if(req[0].goodbyeID === "OFF") return null;
                        if(newData === "") return null;
                        else{
                          db.query(`UPDATE serveur SET goodbyeID = '${newData}' WHERE guildID = ${guild.id}`)
                        }
                      })
                      
                      
                      // End 1
                    } 
                  }
                ],
                
            },// Fin Au revoir
              // logs
              {
                categoryId: "logs_opt",
                categoryName: "Logs",
                categoryDescription: "Les options des logs",
                categoryOptionsList: [
                  {
                    optionType: "spacer",
                    title: "Configuration d'au revoir",
                    description:
                      "Merci, de bien lire tous les chants, avant de commancer.",
                  },
                  {
                    optionId: "logs_on-off",
                    optionName: "Activer ou Désactiver l'option des logs",
                    optionDescription: "Si vous activer l'option, veuillez mettre un salon.",
                    optionType: DBD.formTypes.switch(false),
                    getActualSet: async ({guild}) => {
                      // 1
                      const data = new Promise((resolve, reject) => {
                        db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                          if (err) {
                            resolve(false);
                          }
                      
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
                        } else if(newData === false) {
                          db.query(`UPDATE serveur SET logsID = 'OFF' WHERE guildID = ${guild.id}`)
                        }
                      // End 1
                    } 
                  },
                  {
                    
                    optionId: "logs-channel",
                    optionName: "Salon des logs",
                    optionDescription: "Ici, vous devez définir le salon des logs.",
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
                            resolve(true);
                          }
                        })
                      })
                      
                      return await data;
                      
                      // End 1
                    },
                    setNew: async ({guild, newData}) => {
                      
                      // 1
                      db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                        if(req[0].logsID === "OFF") return null;
                        if(newData === "") return null;
                        else{
                          db.query(`UPDATE serveur SET logsID = '${newData}' WHERE guildID = ${guild.id}`)
                        }
                      })
                      
                      
                      // End 1
                    } 
                  }
                ],
                
            },// Fin logs
            // Money
            {
              categoryId: "eco_cat",
              categoryName: "Economie",
              categoryDescription: "Les options de l'économie",
              categoryOptionsList: [
                {
                  optionType: "spacer",
                  title: "Configuration de l'économie du serveur",
                  description:
                    "Merci, de bien lire tous les chants, avant de commancer. Le membre gagneras ~ 2 points par message.",
                },
                {
                  optionId: "coins_on-off",
                  optionName: "Activer ou Désactiver l'économie",
                  optionDescription: "Ici vous activer ou désactiver l'économie sur le serveur discord.",
                  optionType: DBD.formTypes.switch(false),
                  getActualSet: async ({guild}) => {
                    // 1
                    const data = new Promise((resolve, reject) => {
                      db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                        if (err) {
                          resolve(false);
                        }
                    
                        if (req[0].economieStatus === "ON") {
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
              
          },// Fin Money
          // Level
          {
            categoryId: "level_cat",
            categoryName: "Level",
            categoryDescription: "Les options de les levels",
            categoryOptionsList: [
              {
                optionType: "spacer",
                title: "Configuration des levels du serveur",
                description:
                  "Merci, de bien lire tous les chants, avant de commancer.",
              },
              {
                optionId: "level_on_off",
                optionName: "Activer ou Désactiver les levels",
                optionDescription: "Ici vous activer ou désactiver les levels sur le serveur discord.",
                optionType: DBD.formTypes.switch(false),
                getActualSet: async ({guild}) => {
                  // 1
                  const data = new Promise((resolve, reject) => {
                    db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                      if (err) {
                        resolve(false);
                      }
                  
                      if (req[0].xpStatus === "ON") {
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
          },// Fin lvl
          // ticket
          {
            categoryId: "ticket_options",
            categoryName: "Tickets",
            categoryDescription: "Les options pour les tickets",
            categoryOptionsList: [
              {
                optionType: "spacer",
                title: "Configuration de l'option des tickets",
                description:
                "Merci, de bien lire tous les chants, avant de commancer.",
              },
              {
                optionId: "ticket1",
                optionName: "Activer ou Désactiver l'option ticket",
                optionDescription: "Si vous activer l'option, veuillez mettre une catégorie.",
                optionType: DBD.formTypes.switch(false),
                getActualSet: async ({guild}) => {
                  // 1
                  const data = new Promise((resolve, reject) => {
                    db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                      if (err) {
                        resolve(false);
                      }
                  
                      if (req[0].ticketCat === "ON") {
                        resolve(true);
                      } else if(req[0].ticketCat !== "ON" && req[0].ticketCat !== "OFF") {
                        resolve(true);
                      } else if(req[0].ticketCat === "OFF") {
                        resolve(false)
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
                
                optionId: "ticket2",
                optionName: "Salon de bienvenue",
                optionDescription: "Configuration du channel de bienvenue",
                optionType: DBD.formTypes.channelsSelect(
                  false,
                  (channelTypes = [GuildCategory])
                ),
                getActualSet: async ({guild}) => {
                  // 1
                  const data = new Promise((resolve, reject) => {
                    db.query(`SELECT * FROM serveur WHERE guildID = '${guild.id}'`, async (err, req) => {
                      if (err) {
                        resolve(false);
                      }
                  
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
            
        },// Fin de ticket
        ],