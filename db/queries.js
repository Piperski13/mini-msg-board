const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(text, username) {
  await pool.query("INSERT INTO messages (text,username) VALUES ($1, $2)", [
    text,
    username,
  ]);
}

async function openMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  return rows;
}

async function deleteAllMessages() {
  await pool.query("DELETE FROM messages");
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM messages WHERE id = ($1)", [id]);
}
module.exports = {
  getAllMessages,
  insertMessage,
  openMessage,
  deleteAllMessages,
  deleteMessage,
};
