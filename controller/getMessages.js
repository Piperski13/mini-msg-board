const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getMessages(req, res) {
  res.render("index", { title: "Mini Message Board", messages });
}

module.exports = { getMessages };
