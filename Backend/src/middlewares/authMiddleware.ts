import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.split(" ")[1];

    if(!token) {
        res.status(403).json ({ message: "Access denied" });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
        (req as any).user = decoded;
        next();
    } catch (error) {
        res.status(401).json ({ message: "Invalid token" });
        return;
    }
}