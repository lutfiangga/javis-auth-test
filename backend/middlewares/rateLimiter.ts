import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: {
    message: "Terlalu banyak percobaan. Silakan coba lagi setelah 5 menit.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
