const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
    if(!kickMember) return message.channel.send("Please provide a user to kick!")

    if(kickMember.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to do this!")

    kickMember.send(`Hello, you have been kicked by **${message.author.username}** from **${message.guild.name}** for: **${reason}**`).then(() => 
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** has been kicked`).then(m => m.delete(5000))


}

module.exports.config = {
    name: "kick",
    description: "Kick a user from the guild!",
    usage: "d>kick <@mention> <reason>",
    accessableby: "Moderator",
    aliases: ["k", "kek"]
}
