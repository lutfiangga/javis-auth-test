import Users from "@/models/UserModel";
import type { Req, Res } from "@/types/express";
import bcrypt from "bcrypt";

// Get All Users
export const getUsers = async (req: Req, res: Res) => {
    try {
        const response = await Users.findAll({
            attributes: ["id", "name", "email"]
        });
        res.json(response);
    } catch (error) {
        console.log(error)
    }
}

// Get User By Id
export const getUserById = async (req: Req, res: Res) => {
    try {
        const response = await Users.findOne({
            where: {
                id: req.params.id
            },
            attributes: ["id", "name", "email"]
        });
        res.json(response);
    } catch (error) {
        console.log(error)
    }
}

// Create /  Register User
export const createUser = async (req: Req, res: Res) => {
    const { name, email, password, confPassword } = req.body

    if (password !== confPassword) return res.status(400).json({
        success: false,
        status: 400,
        message: "Password and Confirm Password do not match"
    })

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)

    if (await Users.findOne({ where: { email } })) return res.status(400).json({
        success: false,
        status: 400,
        message: "Email already exists"
    })

    try {
        const response = await Users.create({
            name,
            email,
            password: hashPassword,
        });
        res.json({
            success: true,
            status: 201,
            message: "User created successfully",
            data: response
        });
    } catch (error) {
        res.json({
            success: false,
            status: 400,
            message: "User creation failed",
            data: error
        });
    }
}
