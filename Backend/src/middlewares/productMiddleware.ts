import { Request, Response, NextFunction } from "express";
import { AppDataSource} from "../config/database";
import { Product } from "../models/Product";

export const findProductMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        const { id } = req.params;
        const productRepository = AppDataSource.getRepository(Product);
        const product = await productRepository.findOne({ where: { id: Number(id) } });

        if(!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }

        (req as any).product = product;

        next();

    } catch (e) {
        res.status(500).json({ message: "something went wrong" });
        return;
    }
}