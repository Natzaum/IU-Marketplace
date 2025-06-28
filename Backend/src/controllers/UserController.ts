import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserController {
  // ------------- Register --------------- //

  public static async register(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      const userRepository = AppDataSource.getRepository(User);
      const existingUser = await userRepository.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = userRepository.create({
        name,
        email,
        password: hashedPassword,
        rawPassword: password,
      });
      await userRepository.save(newUser);

      return res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (e) {
      console.error("Erro no register:", e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }

  // ------------- Login --------------- //

  public static async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "1h" }
      );

      return res.status(200).json({ message: "Login sucessful", token });
    } catch (e) {
      console.error("Erro no login:", e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }

  // ------------- Profile (rota protegida) --------------- //

public static async profile(req: Request, res: Response): Promise<Response> {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const userId = (req as any).user.id;

    const user = await userRepository.findOne({
      where: { id: userId },
      select: ["id", "name", "email", "rawPassword"],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const maskedPassword = "*".repeat(user.rawPassword.length);

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: maskedPassword,
      },
    });
  } catch (error) {
    console.error("Erro no /profile:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

}
