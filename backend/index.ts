import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "@config/Database";
import Users from "@models/UserModel";
import router from "@routes/index";

try {
    await db.authenticate()
    console.log("Database connected");
    await Users.sync()
    console.log("Database synced");
} catch (error) {
    console.log(error)
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",") || [];

app.use(cors({
    origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
