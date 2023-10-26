const joi = require("joi");
const todoSchema = require("../models/model.Todo");
const { saveTodo } = require("../repository/repository.todo");
const { ERR } = require("../constants");

const createTodo = async (req, res) => {
    const isValid = joi
       .object({
          task: joi.string().required(),
          deadline: joi.date().required(),
          priority: joi.string().required(),
       })
       .validate(req.body);

    if(isValid.error) {
        return res.status(400).json({
            status: 400,
            message: "Invalid input!",
            error: isValid.error

        });
    }

    const {task, deadline, priority} = req.body

    const todoObj = new todoSchema({
        task,
        deadline,
        priority,
        creator: req.locals._id
    })

    const savedTodo = await saveTodo(todoObj);

    console.log(savedTodo);

    if(savedTodo.ERR==ERR) {
        res.status(500).json({
            status: 500,
            message: "Error creating Todo",
            error: savedTodo.error
        })
    }

    res.status(201).json({
        status: 201,
        mesage: "Todo created successfully!"
    })

}

const getAllTodos = async (req, res) => {
    let todos;
    
}

module.exports = {createTodo, getAllTodos}