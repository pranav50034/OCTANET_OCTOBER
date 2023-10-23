const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
   task: {
      type: String,
      required: false,
   },
   isCompleted: {
      type: Boolean,
      required: false,
   },
   time: { type: Date, default: Date.now(), required: false },
   deadline: {
      type: Date,
      required: true,
   },
   priority: {
      type: String,
      required: true,
   },
   user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("Todos", Todo);
