const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://api-to.get-a.life/meme`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`MEMES!`, message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Meme 101`, bot.user.displayAvatarURL)

       let tEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`MEMES!`, message.guild.iconURL)
       .setDescription(body.text)
        .setTimestamp()
        .setFooter(`Meme 101`, bot.user.displayAvatarURL)

        msg.delete();

   if(args[0] == "img") retrun message.channel.send(mEmbed)

}


module.exports.config = {
    name: "meme",
    noalias: "No Aliases",
    description: "Meme ¯\_(ツ)_/¯",
    usage: "d>meme",
    accessableby: "Members",
    aliases: ["m", "joke"]
}
