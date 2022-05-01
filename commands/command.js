module.exports = {
    name: 'author',
    description: "Linkedin flex!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle("DaProfile")
        .setURL('https://www.linkedin.com/in/michael-mihaylov/')
        .setDescription('My linkedin if you care')
         .setImage('https://media-exp1.licdn.com/dms/image/C4D03AQH8ORp0DjTVow/profile-displayphoto-shrink_400_400/0/1602193022190?e=1622678400&v=beta&t=aibwaVuESSAATc3qRaz5OMZ9tCuCTUtGt9XIqouoWXg')
        .setFooter('Make sure to give me an internship offer!')
    
        message.channel.send(newEmbed);
    }
}