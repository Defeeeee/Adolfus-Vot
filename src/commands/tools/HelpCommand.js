const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require ('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'tools', []);
  }

  async run(client, message, args) {
    return message.channel.send('Comando no disponible temporalmente...')
    const mentionedMember = message.mentions.members.first()
    let close = args[0];
    var guild = message.guild
    const member2 = message.author.username
    const member = message.author.id
    const pepolRole = message.guild.roles.cache.get('733346115948380201');

    if (close == ('close')) {
    if (!message.channel.name.includes("ayuda")) return message.channel.send('ese comando no se puede usar aca');
    await message.channel.delete().catch(err => console.log(err));
   }

    if (!close) {
    if (!message.member.roles.cache.has(pepolRole.id)) return message.channel.send('no podes usar este comando');
    guild.channels.create(`${member2} ayuda`, {
  type: 'text',
  permissionOverwrites: [
     {
       id: message.author.id,
       allow: ['VIEW_CHANNEL']
    },
    {
      id: message.guild.roles.everyone,
      deny: ['VIEW_CHANNEL'],
    },
  ],
})
.then(async (channel) => {
    channel.send(
     `<@${member}> Bondia!`,
     new Discord.MessageEmbed()
      .setDescription(
       'El staff va a estar aca en breve, para cerrar el canal `e!help close`'
      )
      .setColor('00f8ff')
      .setTimestamp()
    );
    client.channels.cache.get(`829513498664239124`).send(` @everyone ${member2} necesita ayuda en ${channel}`);
   });
  }
  if (close == ('close')) {
    if (!message.channel.name.includes("ayuda")) return message.channel.send('ese comando no se puede usar aca');
    await message.channel.delete().catch(err => console.log(err));
   }
  }
}