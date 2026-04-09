import jwt from "jsonwebtoken"
import type { Req, Res, Next } from "@/types/express"

export const verifyToken = (req: Req, res: Res, next: Next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({
        success: false,
        status: 401,
        message: "Unauthorized"
    })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, decoded: any) => {
        if (err) return res.status(401).json({
            success: false,
            status: 401,
            message: "Unauthorized"
        })
        const payload = decoded as jwt.JwtPayload;
        req.email = payload?.email;
        next()
    })
}