# 🩸 Blood Bank Web Application

A full-stack **Node.js** and **MongoDB** based web application to manage **blood donations, donors, and blood stock availability**.  
This project allows admins to track blood inventory, register donors, and handle requests in a transparent and efficient way.

---

## 🚀 Features

- 🏥 Register and manage donors
- 💉 Record blood donations and stock
- 📊 Check available blood groups
- 🔐 User authentication system
- ⚙️ MongoDB database integration
- 🌐 Interactive front-end using HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

| Component | Technology Used |
|------------|----------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Environment | .env configuration file |
| Models | Mongoose (userModel, bloodStockModel) |

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/YourUsername/blood-bank-app.git
cd blood-bank-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file in the root folder:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the Application
```bash
node server.js
```

Visit your app at 👉 **http://localhost:5000**

---

## 📁 Folder Structure
```
blood-bank-app/
├── server.js
├── routes.js
├── db.js
├── models/
│   ├── userModel.js
│   └── bloodStockModel.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .env (not included)
└── package.json
```

---

## 💡 Future Enhancements
- Email/SMS notifications for donors
- Role-based access (Admin, Hospital, Donor)
- Blood request tracking system

---

## 🧾 License
This project is licensed under the **MIT License** — feel free to use and modify with attribution.

---

## 👨‍💻 Author
**Rohit Khobare**  
📧 Contact: [your-email@example.com]  
🌐 GitHub: [https://github.com/YourUsername](https://github.com/YourUsername)
