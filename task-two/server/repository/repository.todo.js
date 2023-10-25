const { TRUE, ERR } = require("../constants");

const saveTodo = async(todoObj) => {
    try {
        await todoObj.save();
        return TRUE
    } catch (error) {
        return {ERR, error}
    }
}

module.exports = {saveTodo}