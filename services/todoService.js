import Todo from "../models/todoModel.js";

const createTodo = async (todoData) => await Todo.create(todoData);
const getAllTodo = async (userId) => await Todo.find({ userId });
const deleteTodo = async (id) => await Todo.findByIdAndDelete(id);

export { createTodo, getAllTodo, deleteTodo };
