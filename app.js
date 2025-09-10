const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.get("/new", (req, res) => {
  res.render("newMessage", { message: "EJS test msg" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
