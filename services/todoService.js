import Todo from "../models/todoModel.js";

const createTodo= async(todoData)=> {
    return await Todo.create(todoData);
}

const getAllTodo= async()=> {
    return await Todo.find({ userId });
}
const deleteTodo= async(id)=> {
    return await Todo.findByIdAndDelete(id);
}
export {createTodo, getAllTodo, deleteTodo}