import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authroutes";
import cors from "cors";

dotenv.config();

const app = express(); // ✅ DECLARE APP FIRST
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
