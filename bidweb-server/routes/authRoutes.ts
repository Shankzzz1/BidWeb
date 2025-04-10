import express from "express";
import { register, login } from "../controller/authcontroller"; // ✅ named imports

const router = express.Router();

router.post("/signup", register); // ✅ function, not app
router.post("/login", login);

export default router;
