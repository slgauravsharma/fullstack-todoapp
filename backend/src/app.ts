import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "@/routes/todoRoutes";
import categoryRoutes from "@/routes/categoryRoutes";
import { errorHandler } from "@/middleware/errorMiddleware";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Todo App API");
});

app.use(errorHandler);

export default app;
