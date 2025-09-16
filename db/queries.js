const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function openMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  return rows;
}

async function deleteAllUsers() {
  await pool.query("DELETE FROM usernames");
}
module.exports = {
  getAllMessages,
  insertUsername,
  openMessage,
  deleteAllUsers,
};
