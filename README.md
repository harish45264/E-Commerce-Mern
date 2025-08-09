# 🛒 MERN E-Commerce Website

A fully responsive and dynamic e-commerce platform built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) — no external UI libraries used.

---

## 📌 Features
- 🔐 User authentication (register/login)
- 📦 Product listing & detailed product pages
- 🛍 Shopping cart management
- 💳 Checkout process
- 📱 100% responsive (mobile, tablet, desktop)
- 🎨 Pure CSS styling without frameworks

---

## 🗂 Project Structure
frontend/
├── public/ # Static files
├── src/
│ ├── Components/ # Reusable UI components
│ ├── Context/ # Global state management
│ ├── Pages/ # Pages (Home, Product, Cart, Checkout)
│ ├── App.js # Main React app
│ ├── App.css # Main styles
│ ├── index.js # Entry point
│ ├── index.css # Global CSS
│ ├── logo.svg # App logo
│ ├── reportWebVitals.js # Performance metrics
│ └── setupTests.js # Testing setup


---

## ⚙️ Installation & Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-mern.git
   cd ecommerce-mern
2. Install dependencies:
   ```
   npm install
3. Create a .env file in the backend folder with:
   ```
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret
   PORT=5000
4. Start backend server:
   ```
   npm run server
5. Start frontend:
   ```
   cd frontend
   npm start
## 🛠 Requirements

-> Node.js 14+
-> MongoDB (local or cloud via MongoDB Atlas)
-> Modern browser
