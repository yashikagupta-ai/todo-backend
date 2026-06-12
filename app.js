import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Backend Working");
});
export default app;
