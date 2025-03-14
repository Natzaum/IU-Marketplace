import { Request, Response } from "express";
import { AppDataSource} from "../config/database";
import { Product } from "../models/Product";

export class ProductController {

    // ------------- Register --------------- //

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

    // ------------- Edit --------------- //

    public static async editProduct(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { name, description, price, imageUrl, category, available } = req.body;

            const productRepository = AppDataSource.getRepository(Product);

            const product = await productRepository.findOne({ where: { id: Number(id) } });

            if(!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            if (name) product.name = name;
            if (description) product.description = description;
            if (price) product.price = price;
            if (imageUrl) product.imageUrl = imageUrl;
            if (category) product.category = category;
            if (available !== undefined) product.available = available;

            await productRepository.save(product);

            return res.status(201).json({ message: "Product edited successfully", product});

        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }
}