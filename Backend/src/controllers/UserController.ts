import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../models/User";
import bcrypt from "bcryptjs";

export class UserController {
    public static async register(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password } = req.body;

            const userRepository = AppDataSource.getRepository(User);
            const existingUser = await userRepository.findOne({ where: { email } });

            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = userRepository.create({ name, email, password: hashedPassword });
            await userRepository.save(newUser);

            return res.status(201).json({ message: "User created successfully", user: newUser });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }
}
