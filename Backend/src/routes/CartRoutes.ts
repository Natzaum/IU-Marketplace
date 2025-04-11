import { Router, Request, Response} from "express";
import { CartController } from "../controllers/CartController";

const router = Router();

router.post("/add", async (req: Request, res: Response) => {
    await CartController.addToCart(req, res);
})

export default router;