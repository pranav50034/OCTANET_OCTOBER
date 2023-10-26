const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { createTodo, getAllTodos } = require("../controllers/controller.todo");
const app = express()

app.post("/create-todo", authMiddleware, createTodo);

app.get("/all-todos", authMiddleware, getAllTodos)

module.exports = app
