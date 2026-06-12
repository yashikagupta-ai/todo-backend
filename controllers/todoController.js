import * as todoService from "../services/todoService.js";

const createTodo = async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.json(todo);
};

const getTodo = async (req, res) => {
  const todos = await todoService.getAllTodo();
  res.json(todos);
};

const deleteTodo = async (req, res) => {
  const deletedTodo = await todoService.deleteTodo(req.params.id);
  res.json(deletedTodo);
};
export { createTodo, getTodo, deleteTodo };
