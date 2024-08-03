const TelegramBot = require('node-telegram-bot-api');
const token = '7308100582:AAEAjB6aIR-Q_oEORHTtd2GdpoAXR5F8p3k';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const name = msg.chat.first_name;
    const text = msg.text;``

    console.log(text);
    if(text % 2 == 1 || text % 2 == -1 ){
        bot.sendMessage(chatId, text + " Toq son")
    }else if(text % 2 == 0){
        bot.sendMessage(chatId, text + " Juft son")
    }else if (text == 0){
        bot.sendMessage(chatId, " bu son 0 son")
    }else{
        bot.sendMessage(chatId, name + " son kiriting")
    } 
});
