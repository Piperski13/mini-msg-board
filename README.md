# 📬 Mini Message Board

A simple message board built with **Node.js**, **Express**, and **EJS**, following an **MVC (Model–View–Controller)** structure.  
Users can:
- View all messages on the board
- Post a new message
- Open each message on its own page

---

## 🚀 Features
- **Express.js** backend
- **EJS** templates for rendering views
- **MVC-based structure** (separating routes, controllers, and views)
- Supports `GET` for fetching pages and `POST` for adding new messages
https://mini-msg-board-6p7g.onrender.com/
---

## 📦 Deployment
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
3. Run the app:
   ```bash
   npm start
   ```
    or (if using nodemon for auto-restart):
    ```bash
    npm run dev
    ```
4. Open in your browser:
   ```bash
   http://localhost:3000
---

## 📝 Example
- **/** → shows all messages
- **/new** → form to add a new message
- **/messages/:id** → details page for a single message

---

## 🔮 Future Improvements
- Persist messages using a database (e.g., PostgreSQL, MongoDB)
- Add user authentication
- Style with CSS framework (Tailwind, Bootstrap)
  
