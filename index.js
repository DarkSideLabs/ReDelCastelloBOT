process.env.NTBA_FIX_319 = 1;
/* ------------------------------------------------------ DICHIARAZIONI */
const claYale = require('./bot');
let idChat = require('./variabili').idChat;
const cRoyale = require('./croyale');
const varandas = require('./varandas');
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