const TelBot = require('node-telegram-bot-api');

const Bot = new TelBot(process.env.AMONYX_TOKEN, {
        polling: true
});

Bot.onText(/\/start/,(msg,match)=>{
    const chatId = msg.chat.id;

    Bot.sendMessage(chatId,"Hello");
})