import type { Req, Res } from "@/types/express";
import Users from "@/models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Req, res: Res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            },
            attributes: ["id", "name", "email", "password"]
        })

        if (!user) return res.status(404).json({
            success: false,
            status: 404,
            message: "User not found"
        })

        const match = await bcrypt.compare(req.body.password, user.dataValues.password)

        if (!match) return res.status(400).json({
            success: false,
            status: 400,
            message: "Invalid password"
        })

        const accessToken = jwt.sign({
            id: user.dataValues.id,
            name: user.dataValues.name,
            email: user.dataValues.email
        }, process.env.ACCESS_TOKEN_SECRET!, {
            expiresIn: "20s"
        })

        const refreshToken = jwt.sign({
            id: user.dataValues.id,
            name: user.dataValues.name,
            email: user.dataValues.email
        }, process.env.REFRESH_TOKEN_SECRET!, {
            expiresIn: "1d"
        })

        await Users.update({
            refreshToken: refreshToken
        }, {
            where: {
                id: user.dataValues.id
            }
        })

        const isProduction = process.env.NODE_ENV === "production";

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax",
            path: "/",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.json({
            success: true,
            status: 200,
            message: "Login success",
            data: {
                accessToken
            }
        })
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal Server Error"
        })
    }
}

export const logout = async (req: Req, res: Res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.status(204).json({
        success: false,
        status: 204,
        message: "No Content"
    })

    const user = await Users.findOne({
        where: {
            refreshToken
        }
    })

    if (!user) return res.status(204).json({
        success: false,
        status: 204,
        message: "No Content"
    })

    await Users.update({
        refreshToken: null
    }, {
        where: {
            id: user.dataValues.id
        }
    })

    const isProduction = process.env.NODE_ENV === "production";

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        path: "/"
    });
    res.json({
        success: true,
        status: 200,
        message: "Logout success"
    })
}