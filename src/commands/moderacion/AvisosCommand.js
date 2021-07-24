const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const bot = new Discord.Client();

module.exports = class AvisosCommand extends BaseCommand {
  constructor() {
    super('avisos', 'moderacion', []);
  }

  async run(client, message, args) {
    
    const messageToSay = args.join(" ");
    const avisosEmbed = new Discord.MessageEmbed()
      .setTitle('Aviso')
      .setDescription(`@ ${messageToSay}`)
      .setColor('RANDOM');
    
    client.channels.cache.find('name', 'anuncios').send(avisosEmbed);

    message.delete();
  }
}