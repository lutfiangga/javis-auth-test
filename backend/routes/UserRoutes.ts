import express from "express";
import { getUsers, createUser, getUserById } from "@controllers/UserController";
import { verifyToken } from "@middlewares/verifyToken";
import { rateLimiter } from "@middlewares/rateLimiter";

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.post("/register", rateLimiter, createUser);
router.get("/:id", getUserById);

export default router;
