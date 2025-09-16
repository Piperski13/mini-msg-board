const db = require("../db/queries");
// const messages = [
//   {
//     id: 1,
//     text: "Hi there!",
//     user: "Amando",      // RENAMED TO username IN LOCAL DB
//     added: new Date(),
//   },
//   {
//     id: 2,
//     text: "Hello World!",
//     user: "Charles",     // RENAMED TO username IN LOCAL DB
//     added: new Date(),
//   },
// ];

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages });
}

async function openMessages(req, res) {
  const id = Number(req.params.id);
  const msg = messages.find((message) => message.id === id);

  res.render("message", { title: "Message", msg });
}

async function formPage(req, res) {
  res.render("form");
}
async function newMessages(req, res) {
  const { msg, name } = req.body;
  const counter = messages.length + 1;

  messages.push({ id: counter, text: msg, user: name, added: new Date() });
  res.redirect("/");
}

module.exports = { getMessages, openMessages, formPage, newMessages };
