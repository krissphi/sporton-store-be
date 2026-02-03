import cors from "cors";
import express from "express";
import path from "node:path";
import { authenticate } from "./middlewares/auth.middleware";
import authRoutes from "./routes/auth.routes";
import categoryRoutes from "./routes/category.routes";
import productRoutes from "./routes/product.routes";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Sporton Backend is running");
});

app.get("/test-middleware", authenticate, (req, res) => {
  res.send("Cihuyy bisa akses dengan middleware karena terotentikasi");
});

export default app;
