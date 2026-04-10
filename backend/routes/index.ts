import express from "express";
import UserRoutes from "@routes/UserRoutes";
import { login, logout } from "@controllers/AuthController";
import { refreshToken } from "@controllers/RefreshTokenController";
import { rateLimiter } from "@/middlewares/rateLimiter";

const router = express.Router();

router.get("/", (_, res) => {
    res.send("Hello World!");
});

// Auth Routes
router.post("/login", rateLimiter, login);
router.delete("/logout", logout);

// Refresh Token Routes
router.get("/token", refreshToken);

// User Routes
router.use("/users", UserRoutes);

export default router;
