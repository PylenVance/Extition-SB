const { Client } = require('discord.js-selfbot-v13');
const axios = require('Axios')
const os = require('os')
const color = require('cli-color');

const client = new Client({
    checkUpdate: false,
    // Turning the auto-update check off for NPM package
    // All Config options are linked below
    // https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
});
const config = require('./config.json');
const prefix = config.prefix;

var Vers = "V1"
var Emojis = require("./utils/emojis.json")


client.on('ready', async () => {
    console.log(`Welcome ${client.user.username}!`);
});

process.on('uncaughtException', function (exception) {
    //Does nothing (eats it nomnomnom)
});

client.on('messageCreate', (msg) => {
    if (config.allowOthersToUse == true) {
        return;
    } else {
        if (msg.author != client.user) {
            return;
        }
    }

    const args = msg.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase();

    if(cmd == "uptime"){
        const currentTime = new Date();
        const uptime = currentTime - startTime;
        message.channel.send(`Bot has been online for ${formatMilliseconds(uptime)}`);
        }
      if(cmd == "avatar"){
        const user = message.mentions.users.first() || message.author;
        message.channel.send(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
      }
      if(cmd == "servericon"){
        const guild = message.guild;
        message.channel.send(guild.iconURL({ format: 'png', dynamic: true, size: 1024 }));
      }
      if(cmd == "coinflip"){
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        message.edit(`The coin landed on ${result}!`);
      }
      if(cmd == "ping"){
        const startTime = Date.now();
        message.channel.send('Pinging...').then((sentMessage) => {
          const endTime = Date.now();
          const ping = endTime - startTime;
          sentMessage.edit(`Pong! \nLatency is: ${ping}ms\nAPI Latency is ${client.ws.ping}ms`);
        });
      }
      if(cmd == "clear"){
        var inp = args[1]
          msg.channel.messages.fetch({
            limit: inp 
        }).then((messages) => { 
            messages.filter(m => m.author === client.user).forEach(msg => msg.delete())
        })
      }
      if(cmd == "react"){
        var id = args[1]
        msg.channel.messages.fetch(id).then(function (message) { message.react(randomarray(Emojis.emojis)) })
        return;
      }
      if(cmd == "iplookup"){
          console.clear()
          var ip = args[1]
          axios.get(`http://ip-api.com/line/${ip}`).then(response => {
          if(args[2] != null || args[2] == "client"){
            msg.edit(delline(response.data))
          }else{
            console.log(color.green(delline(response.data))).catch(e => console.log(e)  );
          }
        })
      }
});


async function initConsole(){
    await client.login(config.token);
    console.clear()
    log(color.red(`
             ███████╗██╗  ██╗████████╗██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗
             ██╔════╝╚██╗██╔╝╚══██╔══╝██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
             █████╗   ╚███╔╝    ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║
             ██╔══╝   ██╔██╗    ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║
             ███████╗██╔╝ ██╗   ██║   ██║██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
             ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
  
                                  Welcome ${color.green(os.hostname)}   
                                  Version: ${color.green(Vers)}         
                                  
                            ==== Thank you for using Extinction! ====
                                                                                          
  `))}

  
initConsole()