const db = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Message Board", messages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

async function openMessages(req, res) {
  try {
    const id = Number(req.params.id);
    const message = await db.openMessage(id);

    res.render("message", { title: "Message", message });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

async function newMessages(req, res) {
  try {
    const { msg, name } = req.body;
    await db.insertMessage(msg, name);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

async function deleteAllMessages(req, res) {
  try {
    await db.deleteAllMessages();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

async function deleteMessage(req, res) {
  try {
    const id = Number(req.params.id);
    await db.deleteMessage(id);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

async function formPage(req, res) {
  res.render("form");
}

module.exports = {
  getMessages,
  openMessages,
  formPage,
  newMessages,
  deleteAllMessages,
  deleteMessage,
};
