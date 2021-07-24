const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require ('discord.js');
const discord = require ('discord.js')

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    console.log(client.user.tag + ' has logged in.');
    client.user.setPresence({
       activity: {
       name: '[e!] | Vladimir Putin' ,
       type: "PLAYING"
      },
        status: 'dnd' 
      })
      .catch(console.error);
    client.user.setUsername(`${client.user.username}`)
      .then(user => console.log(`Mi usuario nuevo es ${user.username}`))
      .catch(console.error);  
    const embed = new Discord.MessageEmbed()
      .setTitle('Bot online!')
      .setColor('#00ffee');
  }
}