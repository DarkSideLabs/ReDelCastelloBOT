process.env.NTBA_FIX_319 = 1;
/** token ReDelCastello_BOT */
const TOKEN = process.env.TELEGRAM_TOKEN || '1328058614:AAETGD56cXKya-YtiPok4Ua09sMZVfMcFmU';
const TelegramBot = require('node-telegram-bot-api');
/* ------------------------------------------------------------- HEROKU */
const options = { webHook: { port: process.env.PORT } };
/** Link app a cui collegarsi e porta da usare */
const url = process.env.APP_URL || 'https://redelcastello-bot.herokuapp.com:443';
const ReDelCastello = new TelegramBot(TOKEN, options);
ReDelCastello.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
ReDelCastello.on('message', function onMessage(msg) {
  ReDelCastello.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});
/* -------------------------------------------------------------------- */
/* ------------------------------------------------------ DICHIARAZIONI */
//const claYale = require('./bot');
const claYale = ReDelCastello;
//let idChat = require('./variabili').idChat;
//const cRoyale = require('./croyale');
//const varandas = require('./varandas');
/* -------------------------------------------------------------------- */

/* ------------------------------------------------------------ CROYALE */
claYale.onText(/\/player/, msg => {
  try {
    idChat = msg.chat.id;
    varandas.getPlayer(idChat);
  } catch (e) {
    ReDelCastello.sendMessage(msg.chat.id, "c'è stato un errore");
    ReDelCastello.sendMessage(msg.chat.id, e);
  }
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