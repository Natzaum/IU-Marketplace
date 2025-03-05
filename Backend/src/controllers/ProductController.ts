import { Request, Response } from "express";
import { AppDataSource} from "../config/database";
import { Product } from "../models/Product";

export class ProductController {
    public static async registerProduct(req: Request, res: Response): Promise<Response> {
        try {
            const { name, description, price, imageUrl, category, available } = req.body;

            const productRepository = AppDataSource.getRepository(Product);

            const newProduct = productRepository.create({name, description, price, imageUrl, category, available});
            await productRepository.save(newProduct);

            return res.status(201).json({ message: "Product created successfully", product: newProduct });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }
}