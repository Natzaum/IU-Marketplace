import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Cart } from "../models/Cart";
import { User } from "../models/User";
import { Product } from "../models/Product";

export class CartController {

    // ------------- Add to cart --------------- //
    public static async addToCart(req: Request, res: Response): Promise <Response>{
        try{
            const { userId, productId, quantity } = req.body;

            const userRepository = AppDataSource.getRepository(User);
            const productRepository = AppDataSource.getRepository(Product);
            const cartRepository = AppDataSource.getRepository(Cart);

            const user = await userRepository.findOne({ where: { id: userId } });
            if (!user) return res.status(404).json({ message: "User not found" });

            const product = await productRepository.findOne({ where: { id: productId } });
            if (!product) return res.status(404).json({ message: "Product not found" });

            let cartItem = await cartRepository.findOne({
                where: { user: { id: userId }, product: { id: productId } }
            });

            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cartItem = cartRepository.create({user, product, quantity});
            }

            await cartRepository.save(cartItem);
            return res.status(201).json({ message: "Product added to cart", cartItem });
        } catch (e){
            return res.status(500).json({ message: "Something went wrong"})
        }
    }

    // ------------- Get all --------------- //

    public static async getAllFromCart(req: Request, res: Response): Promise <Response>{
        try {
            const cartRepository = AppDataSource.getRepository(Cart);
            const carts = await cartRepository.find({ relations: ["user", "product"] });

            if(carts.length <= 0){
                return res.status(404).json({ message: "No cart found" });
            }

            return res.status(200).json({ carts });

        } catch(e){
            console.log(e);
            return res.status(500).json({ message: "Something went wrong"})
        }
    }

    // ------------ Edit --------------- //

    public static async editCart(req: Request, res: Response): Promise<Response> {
        try {
            const { productId, userId, quantity } = req.body;

            const cartRepository = AppDataSource.getRepository(Cart);

            const cartItem = await cartRepository.findOne({
                where: { user: { id: userId }, product: { id: productId } },
                relations: ["user", "product"]
            });

            if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

            cartItem.quantity = quantity;
            await cartRepository.save(cartItem);

            return res.status(200).json({ message: "Cart item updated", cartItem });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }
}