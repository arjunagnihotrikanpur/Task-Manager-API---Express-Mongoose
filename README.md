# 🚀 Task Management API

A role-based Task Management API built with **Node.js, Express, MongoDB, and JWT authentication**.

This API allows admins to assign tasks and employees to manage their assigned tasks securely.

---

## 📌 Features

- 🔐 JWT Authentication
- 👥 Role-Based Access Control (Admin / Employee)
- 🧾 Task Assignment System
- 🛡️ Protected Routes using Middleware
- ⚙️ RESTful API Design

---

## 👤 User Roles & Permissions

### 🧑‍💼 Admin

- Create & assign tasks
- View all tasks
- Delete tasks

### 👨‍💻 Employee

- View only assigned tasks
- Update task status (pending/completed)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- bcrypt (Password Hashing)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd taskmanagerapi
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ▶️ Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

## 🌐 Base URL

```
http://localhost:5000/api
```

---

## 🧪 API Routes

---

### 🔹 Health Check

**GET** `/api`

Check if API is running.

---

## 🔐 Authentication Routes

---

### 📝 Register (Admin / Employee)

**POST** `/api/auth/register`

#### Request Body:

```json
{
  "name": "Arjun Agnihotri",
  "email": "arjun@gmail.com",
  "password": "admin123",
  "role": "admin"
}
```

#### Response:

```json
{
  "token": "your_jwt_token"
}
```

---

### 🔑 Login

**POST** `/api/auth/login`

#### Request Body:

```json
{
  "email": "arjun@gmail.com",
  "password": "admin123"
}
```

#### Response:

```json
{
  "token": "your_jwt_token"
}
```

---

## 📌 Task Routes

> ⚠️ All routes below require Authorization Header:

```
Authorization: Bearer <token>
```

---

### 🧑‍💼 Admin Routes

---

#### ➕ Create Task

**POST** `/api/tasks`

```json
{
  "title": "Fix Bug",
  "description": "Fix login issue",
  "assignedTo": "USER_ID"
}
```

---

#### 📋 Get All Tasks

**GET** `/api/tasks`

---

#### ❌ Delete Task

**DELETE** `/api/tasks/:id`

---

### 👨‍💻 Employee Routes

---

#### 📥 Get My Tasks

**GET** `/api/tasks/me`

---

#### 🔄 Update Task Status

**PATCH** `/api/tasks/:id`

```json
{
  "status": "completed"
}
```

---

## ❗ Error Handling

Common responses:

- `401` → Unauthorized (No/Invalid Token)
- `403` → Forbidden (Access Denied)
- `400` → Bad Request
- `404` → Resource Not Found

---

## 🧠 Future Improvements

- Input validation (Joi / Zod)
- Refresh Tokens & Logout system
- Rate limiting (security)
- Pagination & filtering
- Logging system (Winston)
- Docker support
- Deployment (AWS / VPS)

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Arjun Agnihotri**

---
