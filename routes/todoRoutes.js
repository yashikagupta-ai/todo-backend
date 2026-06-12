import express from "express";
import * as todoController from "../controllers/todoController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(protect);
router.post("/", todoController.createTodo);
router.get("/", todoController.getTodo);
router.delete("/:id", todoController.deleteTodo);
export default router;