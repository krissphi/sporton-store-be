import cors from "cors";
import express from "express";
import { authenticate } from "./middlewares/auth.middleware";
import authRoutes from "./routes/auth.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Sporton Backend is running");
});

app.get("/test-middleware", authenticate, (req, res) => {
  res.send("Cihuyy bisa akses dengan middleware karena terotentikasi");
});

export default app;
