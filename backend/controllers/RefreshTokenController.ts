import Users from "@/models/UserModel";
import jwt from "jsonwebtoken"
import type { Req, Res } from "@/types/express";

export const refreshToken = async (req: Req, res: Res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json({
            success: false,
            status: 401,
            message: "Unauthorized"
        })

        const user = await Users.findOne({
            where: {
                refreshToken
            }
        })

        if (!user) return res.status(403).json({
            success: false,
            status: 403,
            message: "Forbidden"
        })

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any, decoded: any) => {
            if (err) return res.status(403).json({
                success: false,
                status: 403,
                message: "Forbidden"
            })
            const payload = decoded as jwt.JwtPayload;
            const accessToken = jwt.sign({
                id: payload.id,
                name: payload.name,
                email: payload.email
            }, process.env.ACCESS_TOKEN_SECRET!, {
                expiresIn: "20s"
            })
            res.json({
                success: true,
                status: 200,
                message: "Refresh token success",
                data: {
                    accessToken
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}
