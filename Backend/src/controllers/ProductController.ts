import { Request, Response } from "express";
import { AppDataSource} from "../config/database";
import { Product } from "../models/Product";
import { findProductMiddleware } from "../middlewares/productMiddleware";

export class ProductController {

    // ------------- Register --------------- //

    public static async registerProduct(req: Request, res: Response): Promise<Response> {
        try {
            const { name, description, price, imageUrl, category, available = true } = req.body;
            const productRepository = AppDataSource.getRepository(Product);
            const newProduct = productRepository.create({name, description, price, imageUrl, category, available});

            await productRepository.save(newProduct);

            return res.status(201).json({ message: "Product created successfully", product: newProduct });

        } catch (e) {
            return res.status(500).json({ message: "Something went wrong" });

        }
    }

    // ------------- Edit --------------- //

    public static async editProduct(req: Request, res: Response): Promise<Response> {
        try {
            const product = (req as any).product as Product;
            const { name, description, price, imageUrl, category, available } = req.body;

            if (name) product.name = name;
            if (description) product.description = description;
            if (price) product.price = price;
            if (imageUrl) product.imageUrl = imageUrl;
            if (category) product.category = category;
            if (available !== undefined) product.available = available;

            await AppDataSource.getRepository(Product).save(product);

            return res.status(201).json({ message: "Product edited successfully", product});

        } catch (e) {
            return res.status(500).json({ message: "Something went wrong" });

        }
    }

    // ------------- Delete --------------- //

    public static async deleteProduct(req: Request, res: Response): Promise<Response> {
        try{
            const product = (req as any).product as Product;

            await AppDataSource.getRepository(Product).remove(product);

            return res.status(201).json({ message: "Product deleted" });

        } catch (e) {
            return res.status(500).json({ message: "Something went wrong" });

        }
    }

    // ------------- Get all --------------- //

    public static async getAllProducts(req: Request, res: Response): Promise<Response> {
        try {
            const productRepository = AppDataSource.getRepository(Product);
            const products = await productRepository.find();

            if(products.length <= 0){
                return res.status(404).json({ message: "No product found" });
            }
            return res.status(200).json({products});

        } catch (e) {
            return res.status(500).json({ message: "Something went wrong" });

        }
    }

    // ------------- Get id --------------- //

    public static async getProductById(req: Request, res: Response): Promise<Response> {
        try{
            const product = (req as any).product as Product;

            return res.status(200).json({ product });

        }catch (e) {
            return res.status(500).json({message: "Something went wrong"});

        }
    }
}