import express from "express";
import * as todoController from "../controllers/todoController.js"
const router= express.Router();
router.post("/", todoController.createTodo);
router.get("/", todoController.getTodo);
router.delete("/:id", todoController.deleteTodo);
export default router;