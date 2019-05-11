const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {


  
  if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead!`);
if(args[0] == "cool") return message.channel.send("No such command call `cool`");
    if(args[0] == "games"){
        let gembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Gembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Games || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Games`, "minesweeper")
        .setFooter("DerpBot v1.0.2", bot.user.displayAvatarURL)
     message.channel.send(gembed).then(m => m.delete(10000));
    return message.author.send(Gembed);
    }
    if(args[0] == "beta"){
        let eembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Bembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Beta Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `welp no commands are here...`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.0.2", bot.user.displayAvatarURL)
     message.channel.send(eembed).then(m => m.delete(10000));
    return message.author.send(Bembed);
    }
     
  
  if(args[0]){
    let command = args[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
      var SHembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`DerpBot Help`, message.guild.iconURL)
      .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n **Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
     .setFooter("DerpBot v1.0.2", bot.user.displayAvatarURL)
    
      return message.channel.send(SHembed)
      }}
   
  if(!args[0]){
    message.delete();
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Sembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`These are the avaliable commands for the DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands:`, "``serverinfo`` `help` `test2` `rps` `mute` `ban` `softban` `unban` `kick` `ping` `uptime` `???` `yesorno` `meme` `purge` `eval` `reload` `cat` `dog` `pitstats` `minesweeper` `invite` `npm` `1vs1`")
    .addField(`Psst!`, `Do d>help games for games!`)
    .addField(`Are you a tester?`, `Do d>help beta for some commands that are not release!`)
        .setFooter("DerpBot v1.0.2", bot.user.displayAvatarURL)
    message.channel.send(embed).then(m => m.delete(10000));
    message.author.send(Sembed);
  }
   if(args[0] == "justin"){
  return message.delete();
    let boi = new Discord.RichEmbed()
    .setColor("red")
    .setFooter("Psst! You found a secret command! `cool`")
  message.author.send(boi);
   }

     

}



module.exports.config = {
  name: "help",
  aliases: ["h", "commands", "halp"],
  description: "",
  usage: "",
  noalias: "No Aliases",
  accessableby: "Members"
}
