const { Router } = require("express");
const indexRouter = Router();
const {
  getMessages,
  formPage,
  newMessages,
} = require("../controller/messagesController");

indexRouter.get("/", getMessages);
indexRouter.get("/new", formPage);
indexRouter.post("/new", newMessages);

module.exports = indexRouter;
