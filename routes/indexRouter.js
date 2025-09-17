const { Router } = require("express");
const indexRouter = Router();
const {
  getMessages,
  openMessages,
  formPage,
  validateUser,
  newMessages,
  deleteAllMessages,
  deleteMessage,
} = require("../controller/messagesController");

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:id", openMessages);
indexRouter.get("/new", formPage);
indexRouter.post("/new", validateUser, newMessages);
indexRouter.post("/delete", deleteAllMessages);
indexRouter.post("/delete/:id", deleteMessage);

module.exports = indexRouter;
