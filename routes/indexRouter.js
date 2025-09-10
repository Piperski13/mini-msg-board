const { Router } = require("express");
const indexRouter = Router();
const { getMessages } = require("../controller/getMessages");

indexRouter.get("/", getMessages);

module.exports = indexRouter;
