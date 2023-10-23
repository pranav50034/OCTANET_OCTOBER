const express = require("express");
const app = express();
require("dotenv").config();

// file imports
const PORT = process.env.PORT;
const db = require("./config/db");
const userRoutes = require("./routes/route.user")

// middlewares
app.use(express.json());

// routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})