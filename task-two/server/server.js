const express = require("express");
const app = express();
require("dotenv").config();

// file imports
const PORT = process.env.PORT;
const db = require("./config/db");
const userRoutes = require("./routes/route.user");
const todoRoutes = require("./routes/route.todo");
const { authMiddleware } = require("./middlewares/authMiddleware");

// middlewares
app.use(express.json());

// routes
app.use("/user", userRoutes);
app.use("/todo", todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})