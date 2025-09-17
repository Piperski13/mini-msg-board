const db = require("../db/queries");

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("name")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("msg").trim(),
];

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }
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
  validateUser,
  newMessages,
  deleteAllMessages,
  deleteMessage,
};
