const express = require("express");
const { registerUser } = require("../controllers/controller.user");
const app = express();

app.post("/register", registerUser);

module.exports = app;