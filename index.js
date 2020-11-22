process.env.NTBA_FIX_319 = 1;
const TOKEN = process.env.TELEGRAM_TOKEN || '1328058614:AAETGD56cXKya-YtiPok4Ua09sMZVfMcFmU';
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TOKEN, {polling: true});
/* ------------------------------------------------------------- HEROKU */
const options = {
  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: process.env.PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }
};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://redelcastello-bot.herokuapp.com:443';
//const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
//bot.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});
/* -------------------------------------------------------------------- */
/* ------------------------------------------------------ DICHIARAZIONI */
//const claYale = require('./bot');
const claYale = bot;
//let idChat = require('./variabili').idChat;
//const cRoyale = require('./croyale');
//const varandas = require('./varandas');
/* -------------------------------------------------------------------- */

/* ------------------------------------------------------------ CROYALE */
claYale.onText(/\/player/, msg => {
  idChat = msg.chat.id;
  varandas.getPlayer(idChat);
})

claYale.onText(/\/cards/, msg => {
  idChat = msg.chat.id;
  varandas.getPlayerCards(idChat);
})

claYale.onText(/\/clan/, msg => {
  const idChat = msg.chat.id;
  varandas.getClan(idChat);
})

claYale.onText(/\/upgrade/, msg => {
  idChat = msg.chat.id;
  varandas.getUpgrade(idChat);
})

claYale.onText(/\/deck/, msg => {
  idChat = msg.chat.id;
  varandas.getDeck(idChat);
})

claYale.onText(/\/test/, msg => {
  idChat = msg.chat.id;
  varandas.getTest(idChat);
})

claYale.onText(/\/allcards/, msg => {
  idChat = msg.chat.id;
  varandas.getAllCard(idChat);
})

claYale.onText(/\/chest/, msg => {
  idChat = msg.chat.id;
  varandas.getChest(idChat);
})
/* -------------------------------------------------------------------- */

/* ----------------------------------------------------------- VARANDAS */
claYale.onText(/\/h/, msg => {
  idChat = msg.chat.id;
  varandas.getD(idChat);
})

claYale.onText(/\/e/, msg => {
  idChat = msg.chat.id;
  varandas.getE(idChat);
})

claYale.onText(/\/f/, msg => {
  idChat = msg.chat.id;
  varandas.getF(idChat);
})

claYale.onText(/\/g/, msg => {
  idChat = msg.chat.id;
  varandas.getG(idChat);
})
/* -------------------------------------------------------------------- */