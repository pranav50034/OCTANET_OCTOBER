const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { createTodo } = require("../controllers/controller.todo");
const app = express()

app.post("/create-todo", authMiddleware, createTodo);

module.exports = app
