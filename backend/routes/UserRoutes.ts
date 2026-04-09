import express from "express";
import { getUsers, createUser } from "@controllers/UserController";
import { verifyToken } from "@middlewares/verifyToken";

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.post("/", createUser);

export default router;
