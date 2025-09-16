const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsernames(query) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE ($1)",
    [`%${query}%`]
  );
  return rows;
}

async function deleteAllUsers() {
  await pool.query("DELETE FROM usernames");
}
module.exports = {
  getAllMessages,
  insertUsername,
  searchUsernames,
  deleteAllUsers,
};
