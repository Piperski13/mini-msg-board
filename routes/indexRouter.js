const { Router } = require("express");
const indexRouter = Router();
const {
  getMessages,
  openMessages,
  formPage,
  newMessages,
} = require("../controller/messagesController");

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:id", openMessages);
indexRouter.get("/new", formPage);
indexRouter.post("/new", newMessages);

module.exports = indexRouter;
