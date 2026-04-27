const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRoutes");

const connectDB = require("./config/db");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Base Route
app.get("/api", (req, res) => {
  res.json({ message: "API Running!" });
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
