import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Cart } from "../models/Cart";
import { User } from "../models/User";
import { Product } from "../models/Product";

export class CartController {

    // ------------- Add to cart --------------- //
    public static async addToCart(req: Request, res: Response): Promise <Response>{
        try{
            const { userId, productId} = req.body;
            const quantity = Number(req.body.quantity);

            const userRepository = AppDataSource.getRepository(User);
            const productRepository = AppDataSource.getRepository(Product);
            const cartRepository = AppDataSource.getRepository(Cart);

            const user = await userRepository.findOne({ where: { id: userId } });
            const product = await productRepository.findOne({ where: { id: productId } });

            if (!user || !product) {
                return res.status(404).json({ message: "User or product not found." });
            }

            let cartItem = await cartRepository.findOne({
                where: { user: { id: userId }, product: { id: productId } },
                relations: ["user", "product"],
            });

            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cartItem = cartRepository.create({
                    user,
                    product,
                    quantity});
                }

            await cartRepository.save(cartItem);
            return res.status(201).json({ message: "Product added to cart", cartItem });
        } catch (e){
            console.log(e);
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

    // ------------- Get by id --------------- //

    static async getUserCart(req: Request, res: Response): Promise<Response> {
        try {
            const userId = parseInt(req.params.userId);

            const cartRepository = AppDataSource.getRepository(Cart);

            const cartItems = await cartRepository.find({
                where: { user: { id: userId } },
                relations: ["product"],
            });

            return res.status(200).json({
                userId,
                items: cartItems.map(item => ({
                    product: item.product,
                    quantity: item.quantity
                }))
            });

        } catch (err) {
            console.error("Erro ao buscar produtos do usuário:", err);
            return res.status(500).json({ message: "Something went wrong." });
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

    // ------------ Delete --------------- //
    public static async deleteFromCart(req: Request, res: Response): Promise<Response> {
        try {
            const { productId, userId } = req.body;

            const cartRepository = AppDataSource.getRepository(Cart);

            const cartItem = await cartRepository.findOne({
                where: { user: { id: userId }, product: { id: productId } },
                relations: ["user", "product"]
            });

            if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

            await cartRepository.remove(cartItem);

            return res.status(200).json({ message: "Cart item deleted" });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }
}