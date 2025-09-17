# 📬 Mini Message Board

A simple CRUD message board built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**, following an **MVC (Model–View–Controller)** structure.  

Users can:
- View all messages on the board
- Post a new message
- Delete all messages or delete individual messages
- Open each message on its own page
- Persist data in a PostgreSQL database

---


## 🚀 Features
- **Express.js** backend
- **EJS** templates for rendering views
- **MVC-based structure** (separating routes, controllers, and views)
- **PostgreSQL database** hosted on **Render**
- Supports `GET` for fetching pages and `POST` for adding new messages

---

## 🌍 Live Demo
👉 [Mini-Msg-Board - Live](https://mini-msg-board-6p7g.onrender.com/)

This project is deployed on Render.

---

## ⚙️ Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Piperski13/mini-msg-board.git
   cd mini-msg-board
2. Install dependencies:
   ```bash
      npm install
   ```
3. Set up the database:
   
   3a. Create a new local database (e.g. mini_msg_board).

   
   3b. Add your connection string to a .env file:
   
   ```bash
   PORT=3000
   DB_USER=...
   DB_HOST=...
   DB_DATABASE=...
   DB_PASSWORD=...
   DB_PORT=5432
   DB_CONNECTION_STRING=postgres://user:password@localhost:5432/mini_msg_board
   ```
   
   3c. Run the seed script to create tables and insert sample data:
   
   ```bash
   node db/populatedb.js
   ```
5. Run the app:
   ```bash
   npm start
   ```
    or (if using nodemon for auto-restart):
    ```bash
    npm run dev
    ```
6. Open in your browser:
   ```bash
   http://localhost:3000
---

## 📝 Example
- **/** → shows all messages
- **/new** → form to add a new message
- **/messages/:id** → details page for a single message

---

## 🔮 Future Improvements
- Add user authentication
- Style with CSS framework (Tailwind, Bootstrap)
  
