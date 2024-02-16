
const { Client, IntentsBitField, Emoji, GuildMember, userMention, User } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildInvites,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c)=>{
    console.log('eeyaa is active');
});
client.on('messageCreate', (message) =>{
    const channel = client.channels.cache.get("Your channel ID");
    if(message.content == 'L'){
        channel.message.fetch({ limit: 100 }).then(messages => {
            channel.message.send(`Received ${messages.size} messages`);
            channel.message.send(message.content);
            //Iterate through the messages here with the variable "messages".
            message.forEach(message => console.log(message.content))
          })
        message.channel.send(`nice try ${userMention}`);

    }
    
});
client.on('messageDelete', (message) => {
    message.channel.send(`IK WHAT U DELETED = ${message.content}`);

});
client.on('message', (userMention)=>{
    message.channel.send("<@" + userMention + ">");
    

});
client.on('messageCreate', (message) =>{
    console.log(message.content);
    if(message.author.bot){
        return;
    }
    if(message.content == 'I hate sex'){
        message.reply("avg virinchi behaviour");
    }
    

});
client.on('emojiCreate', () =>{
    message.reply("i see that");
    
});


client.login('insert your bot's token here');
