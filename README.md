# 🛒 E-Commerce Website with MERN Stack

A fully responsive and dynamic e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) without any external UI libraries.  
The platform allows users to browse products, view details, manage their cart, and complete the checkout process.

---

## 🚀 Features

- 🛍 Browse and search products
- 📄 Product detail pages
- 🛒 Add/remove items from cart
- 💳 Checkout process
- 🔐 User authentication (Register/Login)
- 📱 100% responsive layout
- 🎨 Custom CSS styling (no frameworks)

---

## 🛠 Tech Stack

| Tech       | Usage                                   |
|------------|------------------------------------------|
| MongoDB    | Database to store products & users       |
| Express.js | REST API to handle backend logic         |
| React.js   | Frontend library for interactive UI      |
| Node.js    | Backend runtime environment              |
| CSS        | Fully custom responsive design           |

---

## 📂 Project Structure

/ecommerce-mern  
├── backend  
│ ├── server.js  
│ ├── models/  
│ ├── routes/  
│ ├── controllers/  
│ └── config/  
├── frontend  
│ ├── public/  
│ ├── src/  
│ │ ├── Components/  
│ │ ├── Context/  
│ │ ├── Pages/  
│ │ ├── App.js  
│ │ ├── App.css  
│ │ ├── index.js  
│ │ └── index.css  
├── README.md  
  

yaml
Copy
Edit

---

## 📸 Screenshot

![App Screenshot](./Screenshot.png)

---

## 🔧 Installation and Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ecommerce-mern.git
cd ecommerce-mern
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
npm run server
Make sure MongoDB is running locally or update your connection string in config file.

3. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
The frontend will start on http://localhost:3000.

📬 API Endpoints (Express)
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
POST	/api/users	Register new user
POST	/api/users/login	User login
POST	/api/orders	Create new order

✅ Future Enhancements
Product reviews & ratings

Payment gateway integration

Order history for users

Admin panel for product management

🤝 Contribution
Feel free to fork the repository and submit pull requests. All contributions are welcome!

🙌 Acknowledgements
React Docs

MongoDB

Express.js

Node.js

pgsql
Copy
Edit

